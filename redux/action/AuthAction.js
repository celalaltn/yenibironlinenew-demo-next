import { authApi } from '../../services/api';

// Auth Actions
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: 'AUTH_REQUEST' });
    
    const data = await authApi.login(email, password);
    
    // Token ve kullanıcı bilgilerini localStorage'a kaydet
    localStorage.setItem('token', data.token);
    localStorage.setItem('refreshToken', data.refreshToken);
    localStorage.setItem('user', JSON.stringify(data.user));
    
    // Ayrıca cookie'lere de kaydet (middleware için gerekli)
    document.cookie = `token=${data.token}; path=/; max-age=${60*60*24*7}`; // 7 gün
    document.cookie = `user=${JSON.stringify(data.user)}; path=/; max-age=${60*60*24*7}`; // 7 gün
    
    dispatch({
      type: 'LOGIN_SUCCESS',
      payload: {
        user: data.user,
        token: data.token,
        refreshToken: data.refreshToken,
        accessTokenExpiration: data.accessTokenExpiration
      }
    });
    
    return data; // Kullanıcı verilerini döndür
  } catch (error) {
    dispatch({
      type: 'AUTH_ERROR',
      payload: error.message
    });
    throw error;
  }
};

export const register = (userData) => async (dispatch) => {
  try {
    dispatch({ type: 'AUTH_REQUEST' });
    
    const data = await authApi.register(userData);
    
    dispatch({
      type: 'REGISTER_SUCCESS'
    });
    
    return data;
  } catch (error) {
    dispatch({
      type: 'AUTH_ERROR',
      payload: error.message
    });
    throw error;
  }
};

export const logout = () => async (dispatch) => {
  try {
    await authApi.logout();
    
    // localStorage'dan kullanıcı bilgilerini temizle
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('user');
    
    // Cookie'leri temizle
    document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    document.cookie = 'user=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    
    dispatch({ type: 'LOGOUT' });
  } catch (error) {
    console.error('Logout error:', error);
    // Hata olsa bile kullanıcıyı çıkış yapmış kabul et
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('user');
    
    dispatch({ type: 'LOGOUT' });
  }
};

export const updateUser = (userData) => ({
  type: 'UPDATE_USER',
  payload: userData
});
