import Link from "next/link";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "@/redux/action/AuthAction";
import { useRouter } from "next/navigation";

const Login = () => {
  // Login state
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState('');
  
  // Register state
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerFirstName, setRegisterFirstName] = useState('');
  const [registerLastName, setRegisterLastName] = useState('');
  const [registerPhoneNumber, setRegisterPhoneNumber] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);
  const [registerConfirmPassword, setRegisterConfirmPassword] = useState('');
  const [showRegisterConfirmPassword, setShowRegisterConfirmPassword] = useState(false);
  const [registerRole, setRegisterRole] = useState('Student');
  const [registerLoading, setRegisterLoading] = useState(false);
  const [registerError, setRegisterError] = useState('');
  const [registerSuccess, setRegisterSuccess] = useState(false);
  
  const dispatch = useDispatch();
  const router = useRouter();
  
  // Kullanıcı rolüne göre dashboard'a yönlendirme
  const redirectBasedOnRole = (user) => {
    if (!user || !user.roles || user.roles.length === 0) {
      return '/';
    }
    
    // Ensure roles is an array
    const roles = Array.isArray(user.roles) ? user.roles : [user.roles];
    const primaryRole = roles[0];
    
    console.log('Redirecting based on role:', primaryRole);
    
    switch(primaryRole) {
      case 'Instructor':
        return '/instructor-dashboard';
      case 'Student':
      default:
        return '/student-dashboard';
    }
  };
  
  // Login handler
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginLoading(true);
    setLoginError('');
    
    try {
      const userData = await dispatch(login(loginEmail, loginPassword));
      // Kullanıcı rolüne göre yönlendirme yap
      const redirectPath = redirectBasedOnRole(userData.user);
      router.push(redirectPath);
    } catch (error) {
      setLoginError(error.message || 'Giriş yapılamadı. Lütfen bilgilerinizi kontrol edin.');
    } finally {
      setLoginLoading(false);
    }
  };
  
  // Register handler
  const handleRegister = async (e) => {
    e.preventDefault();
    setRegisterLoading(true);
    setRegisterError('');
    setRegisterSuccess(false);
    
    // Şifre kontrolü
    if (registerPassword !== registerConfirmPassword) {
      setRegisterError('Şifreler eşleşmiyor.');
      setRegisterLoading(false);
      return;
    }
    
    try {
      const userData = {
        email: registerEmail,
        firstName: registerFirstName,
        lastName: registerLastName,
        phoneNumber: registerPhoneNumber || "", // Boş ise boş string gönder
        password: registerPassword,
        roles: [registerRole] // Seçilen rolü dizide gönder
      };
      
      console.log('Kayıt verileri:', JSON.stringify(userData));
      await dispatch({ type: 'AUTH_REQUEST' });
      
      // API isteği
      const response = await fetch('https://opusbtest.cloud.ybsrv.com/api/auth/register', {
        method: 'POST',
        headers: {
          'accept': 'text/plain',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });
      
      console.log('API yanıt durumu:', response.status, response.statusText);
      
      let data;
      const responseText = await response.text();
      console.log('API yanıt metni:', responseText);
      
      try {
        data = JSON.parse(responseText);
      } catch (e) {
        console.error('JSON parse hatası:', e);
        data = { message: responseText || 'Sunucudan geçersiz yanıt alındı.' };
      }
      
      if (!response.ok) {
        throw new Error(data.message || data.title || `Kayıt oluşturulamadı. Hata kodu: ${response.status}`);
      }
      
      dispatch({ type: 'REGISTER_SUCCESS' });
      
      // Başarılı kayıt sonrası login formuna odaklan
      setLoginEmail(registerEmail);
      setRegisterEmail('');
      setRegisterFirstName('');
      setRegisterLastName('');
      setRegisterPhoneNumber('');
      setRegisterPassword('');
      setRegisterConfirmPassword('');
      setRegisterRole('Student');
      setRegisterSuccess(true);
      
      // Kullanıcıya başarılı mesajı göster
      setTimeout(() => {
        setRegisterSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Kayıt hatası:', error);
      setRegisterError(error.message || 'Kayıt oluşturulamadı. Lütfen bilgilerinizi kontrol edin.');
      dispatch({
        type: 'AUTH_ERROR',
        payload: error.message
      });
    } finally {
      setRegisterLoading(false);
    }
  };
  
  return (
    <>
      <div className="col-lg-6">
        <div className="rbt-contact-form contact-form-style-1 max-width-auto">
          <h3 className="title">Giriş Yap</h3>
          {loginError && (
            <div className="alert alert-danger" role="alert">
              {loginError}
            </div>
          )}
          <form className="max-width-auto" onSubmit={handleLogin}>
            <div className="form-group">
              <input
                name="email"
                type="email"
                placeholder="Email *"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                required
              />
              <span className="focus-border"></span>
            </div>
            <div className="form-group position-relative">
              <input
                name="password"
                type={showLoginPassword ? "text" : "password"}
                placeholder="Şifre *"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                required
              />
              <span className="focus-border"></span>
              <button 
                type="button" 
                className="password-toggle" 
                onClick={() => setShowLoginPassword(!showLoginPassword)}
                style={{
                  position: 'absolute',
                  right: '15px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '18px',
                  color: '#666'
                }}
              >
                <i className={`feather-${showLoginPassword ? 'eye-off' : 'eye'}`}></i>
              </button>
            </div>

            <div className="row mb--30">
              <div className="col-lg-6">
                <div className="rbt-checkbox">
                  <input 
                    type="checkbox" 
                    id="rememberme" 
                    name="rememberme" 
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <label htmlFor="rememberme">Beni hatırla</label>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="rbt-lost-password text-end">
                  <Link className="rbt-btn-link" href="#">
                    Şifremi unuttum
                  </Link>
                </div>
              </div>
            </div>

            <div className="form-submit-group">
              <button
                type="submit"
                className="rbt-btn btn-md btn-gradient hover-icon-reverse w-100"
                disabled={loginLoading}
              >
                <span className="icon-reverse-wrapper">
                  <span className="btn-text">{loginLoading ? 'Giriş yapılıyor...' : 'Giriş Yap'}</span>
                  <span className="btn-icon">
                    <i className="feather-arrow-right"></i>
                  </span>
                  <span className="btn-icon">
                    <i className="feather-arrow-right"></i>
                  </span>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="col-lg-6">
        <div className="rbt-contact-form contact-form-style-1 max-width-auto">
          <h3 className="title">Kayıt Ol</h3>
          {registerError && (
            <div className="alert alert-danger" role="alert">
              {registerError}
            </div>
          )}
          <form className="max-width-auto" onSubmit={handleRegister}>
            {registerSuccess && (
              <div className="alert alert-success" role="alert">
                Kayıt başarılı! Şimdi giriş yapabilirsiniz.
              </div>
            )}
            <div className="form-group">
              <input
                name="register-email"
                type="email"
                placeholder="Email *"
                value={registerEmail}
                onChange={(e) => setRegisterEmail(e.target.value)}
                required
              />
              <span className="focus-border"></span>
            </div>

            <div className="form-group">
              <input
                name="register_firstName"
                type="text"
                placeholder="Ad *"
                value={registerFirstName}
                onChange={(e) => setRegisterFirstName(e.target.value)}
                required
              />
              <span className="focus-border"></span>
            </div>
            
            <div className="form-group">
              <input
                name="register_lastName"
                type="text"
                placeholder="Soyad *"
                value={registerLastName}
                onChange={(e) => setRegisterLastName(e.target.value)}
                required
              />
              <span className="focus-border"></span>
            </div>
            
            <div className="form-group">
              <input
                name="register_phoneNumber"
                type="tel"
                placeholder="Telefon Numarası *"
                value={registerPhoneNumber}
                onChange={(e) => setRegisterPhoneNumber(e.target.value)}
                required
              />
              <span className="focus-border"></span>
            </div>

            <div className="form-group position-relative">
              <input
                name="register_password"
                type={showRegisterPassword ? "text" : "password"}
                placeholder="Şifre *"
                value={registerPassword}
                onChange={(e) => setRegisterPassword(e.target.value)}
                required
              />
              <span className="focus-border"></span>
              <button 
                type="button" 
                className="password-toggle" 
                onClick={() => setShowRegisterPassword(!showRegisterPassword)}
                style={{
                  position: 'absolute',
                  right: '15px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '18px',
                  color: '#666'
                }}
              >
                <i className={`feather-${showRegisterPassword ? 'eye-off' : 'eye'}`}></i>
              </button>
            </div>

            <div className="form-group position-relative">
              <input
                name="register_conpassword"
                type={showRegisterConfirmPassword ? "text" : "password"}
                placeholder="Şifre Onayı *"
                value={registerConfirmPassword}
                onChange={(e) => setRegisterConfirmPassword(e.target.value)}
                required
              />
              <span className="focus-border"></span>
              <button 
                type="button" 
                className="password-toggle" 
                onClick={() => setShowRegisterConfirmPassword(!showRegisterConfirmPassword)}
                style={{
                  position: 'absolute',
                  right: '15px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '18px',
                  color: '#666'
                }}
              >
                <i className={`feather-${showRegisterConfirmPassword ? 'eye-off' : 'eye'}`}></i>
              </button>
            </div>

            <div className="form-group">
              <label className="mb-2">Hesap Türü *</label>
              <div className="rbt-modern-select bg-transparent">
                <select 
                  className="w-100"
                  value={registerRole}
                  onChange={(e) => setRegisterRole(e.target.value)}
                  required
                >
                  <option value="Student">Öğrenci</option>
                  <option value="Instructor">Eğitmen</option>
                </select>
              </div>
            </div>

            <div className="form-submit-group">
              <button
                type="submit"
                className="rbt-btn btn-md btn-gradient hover-icon-reverse w-100"
                disabled={registerLoading}
              >
                <span className="icon-reverse-wrapper">
                  <span className="btn-text">{registerLoading ? 'Kayıt oluşturuluyor...' : 'Kayıt Ol'}</span>
                  <span className="btn-icon">
                    <i className="feather-arrow-right"></i>
                  </span>
                  <span className="btn-icon">
                    <i className="feather-arrow-right"></i>
                  </span>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
