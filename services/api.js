// API temel URL ve istek fonksiyonları
const API_URL = 'https://opusbtest.cloud.ybsrv.com';

// Temel fetch fonksiyonu
const fetchApi = async (endpoint, options = {}) => {
  const token = localStorage.getItem('token');
  
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const config = {
    ...options,
    headers,
  };

  try {
    const response = await fetch(`${API_URL}${endpoint}`, config);
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `API error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
};

// Auth API fonksiyonları
export const authApi = {
  login: async (email, password) => {
    return fetchApi('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  },
  
  register: async (userData) => {
    return fetchApi('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  },
  
  logout: async () => {
    return fetchApi('/api/auth/logout', {
      method: 'POST',
      headers: {
        'accept': '*/*'
      }
    });
  },

  refreshToken: async (refreshToken) => {
    return fetchApi('/api/auth/refresh-token', {
      method: 'POST',
      body: JSON.stringify({ refreshToken }),
    });
  }
};

// Öğrenci (Student) API fonksiyonları
export const studentApi = {
  // Öğrenci dashboard bilgilerini getir
  getDashboardInfo: async () => {
    return fetchApi('/api/student/dashboard', {
      method: 'GET'
    });
  },
  
  // Öğrencinin kayıtlı olduğu kursları getir
  getEnrolledCourses: async (page = 1, limit = 10) => {
    return fetchApi(`/api/student/courses?page=${page}&limit=${limit}`, {
      method: 'GET'
    });
  },
  
  // Öğrencinin aktif kurslarını getir
  getActiveCourses: async (page = 1, limit = 10) => {
    return fetchApi(`/api/student/courses/active?page=${page}&limit=${limit}`, {
      method: 'GET'
    });
  },
  
  // Öğrencinin tamamladığı kursları getir
  getCompletedCourses: async (page = 1, limit = 10) => {
    return fetchApi(`/api/student/courses/completed?page=${page}&limit=${limit}`, {
      method: 'GET'
    });
  },
  
  // Öğrencinin siparişlerini getir
  getOrders: async (page = 1, limit = 10) => {
    return fetchApi(`/api/student/orders?page=${page}&limit=${limit}`, {
      method: 'GET'
    });
  }
};

export default fetchApi;
