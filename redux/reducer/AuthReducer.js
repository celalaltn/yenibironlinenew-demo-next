// Authentication reducer
const initialState = {
  user: null,
  token: null,
  refreshToken: null,
  accessTokenExpiration: null,
  isAuthenticated: false,
  loading: false,
  error: null
};

// Eğer localStorage'da token varsa, kullanıcı oturumunu başlat
if (typeof window !== 'undefined') {
  const token = localStorage.getItem('token');
  const user = localStorage.getItem('user');
  
  if (token && user) {
    initialState.token = token;
    initialState.user = JSON.parse(user);
    initialState.isAuthenticated = true;
  }
}

export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_REQUEST':
      return {
        ...state,
        loading: true,
        error: null
      };
    
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        refreshToken: action.payload.refreshToken,
        accessTokenExpiration: action.payload.accessTokenExpiration,
        isAuthenticated: true,
        loading: false,
        error: null
      };
    
    case 'REGISTER_SUCCESS':
      return {
        ...state,
        loading: false,
        error: null
      };
    
    case 'AUTH_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    
    case 'LOGOUT':
      return {
        ...initialState,
        user: null,
        token: null,
        refreshToken: null,
        accessTokenExpiration: null,
        isAuthenticated: false
      };
    
    case 'UPDATE_USER':
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload
        }
      };
      
    default:
      return state;
  }
};
