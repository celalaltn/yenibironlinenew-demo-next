// This is a simple test script to verify the authentication and role-based routing
// You can run this in the browser console to test the functionality

// Test user data
const testUsers = [
  {
    email: "student@example.com",
    password: "password123",
    firstName: "Test",
    lastName: "Student",
    roles: ["Student"]
  },
  {
    email: "instructor@example.com",
    password: "password123",
    firstName: "Test",
    lastName: "Instructor",
    roles: ["Instructor"]
  }
];

// Function to simulate login
function simulateLogin(user) {
  console.log(`Simulating login for ${user.email} with role ${user.roles[0]}`);
  
  // Store user data in localStorage and cookies (as our auth action does)
  localStorage.setItem('token', 'test-token');
  localStorage.setItem('refreshToken', 'test-refresh-token');
  localStorage.setItem('user', JSON.stringify(user));
  
  document.cookie = `token=test-token; path=/; max-age=${60*60*24*7}`;
  document.cookie = `user=${JSON.stringify(user)}; path=/; max-age=${60*60*24*7}`;
  
  // Determine redirect path based on role
  let redirectPath = '/';
  if (user.roles.includes('Instructor')) {
    redirectPath = '/instructor-dashboard';
  } else if (user.roles.includes('Student')) {
    redirectPath = '/student-dashboard';
  }
  
  console.log(`User should be redirected to: ${redirectPath}`);
  return redirectPath;
}

// Function to simulate logout
function simulateLogout() {
  console.log('Simulating logout');
  
  // Clear localStorage and cookies
  localStorage.removeItem('token');
  localStorage.removeItem('refreshToken');
  localStorage.removeItem('user');
  
  document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
  document.cookie = 'user=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
  
  console.log('User data cleared');
}

// Function to check current auth state
function checkAuthState() {
  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user') || 'null');
  
  console.log('Current auth state:');
  console.log('- Token exists:', !!token);
  console.log('- User data:', user);
  
  if (user && user.roles) {
    console.log('- User roles:', user.roles);
    
    // Check access to different routes
    const instructorRoutes = ['/instructor-dashboard', '/instructor-profile'];
    const studentRoutes = ['/student-dashboard', '/student-profile'];
    
    console.log('\nRoute access:');
    instructorRoutes.forEach(route => {
      console.log(`- ${route}: ${user.roles.includes('Instructor') ? 'Allowed' : 'Denied'}`);
    });
    
    studentRoutes.forEach(route => {
      console.log(`- ${route}: ${user.roles.includes('Student') ? 'Allowed' : 'Denied'}`);
    });
  }
}

// Export functions for use in browser console
window.testAuth = {
  users: testUsers,
  login: simulateLogin,
  logout: simulateLogout,
  checkState: checkAuthState
};

console.log('Auth test utilities loaded. Use window.testAuth to access the test functions.');
console.log('Example usage:');
console.log('- window.testAuth.login(window.testAuth.users[0]) // Login as student');
console.log('- window.testAuth.login(window.testAuth.users[1]) // Login as instructor');
console.log('- window.testAuth.checkState() // Check current auth state');
console.log('- window.testAuth.logout() // Logout');
