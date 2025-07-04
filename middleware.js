import { NextResponse } from 'next/server';

export function middleware(request) {
  // Get the pathname of the request
  const path = request.nextUrl.pathname;
  
  // Hesabım sayfasına giden istekleri instructor-dashboard'a yönlendir
  if (path.startsWith('/my-account')) {
    // Kullanıcı bilgilerini al
    const userDataCookie = request.cookies.get('user')?.value;
    
    if (userDataCookie) {
      try {
        const userData = JSON.parse(userDataCookie);
        const userRoles = Array.isArray(userData.roles) ? userData.roles : 
                         (userData.roles ? [userData.roles] : []);
        
        // Eğitmen rolü varsa instructor-dashboard'a, yoksa student-dashboard'a yönlendir
        if (userRoles.includes('Instructor')) {
          return NextResponse.redirect(new URL('/instructor-dashboard', request.url));
        } else if (userRoles.includes('Student')) {
          return NextResponse.redirect(new URL('/student-dashboard', request.url));
        }
      } catch (e) {
        console.error('Failed to parse user data from cookie:', e);
      }
    }
  }
  
  // Define protected routes and their required roles
  const instructorRoutes = [
    '/instructor-dashboard',
    '/instructor-profile',
    '/instructor-enrolled-course',
    '/instructor-wishlist',
    '/instructor-reviews',
    '/instructor-quiz-attempts',
    '/instructor-order-history',
    '/instructor-personal-courses',
    '/instructor-announcements',
    '/instructor-assignments',
    '/instructor-settings'
  ];
  
  const studentRoutes = [
    '/student-dashboard',
    '/student-profile',
    '/student-enrolled-course',
    '/student-wishlist',
    '/student-reviews',
    '/student-quiz-attempts',
    '/student-order-history'
  ];
  
  // Check if the path is a protected route
  const isInstructorRoute = instructorRoutes.some(route => path.startsWith(route));
  const isStudentRoute = studentRoutes.some(route => path.startsWith(route));
  
  // If not a protected route, allow the request
  if (!isInstructorRoute && !isStudentRoute) {
    return NextResponse.next();
  }
  
  // Get the token from cookies
  const token = request.cookies.get('token')?.value;
  
  // If no token, redirect to login
  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  
  try {
    // Get user data from cookies
    const userDataCookie = request.cookies.get('user')?.value;
    
    if (!userDataCookie) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
    
    // Parse the user data
    let userData;
    try {
      userData = JSON.parse(userDataCookie);
    } catch (e) {
      console.error('Failed to parse user data from cookie:', e);
      return NextResponse.redirect(new URL('/login', request.url));
    }
    
    // Get user roles, ensuring it's an array
    const userRoles = Array.isArray(userData.roles) ? userData.roles : 
                     (userData.roles ? [userData.roles] : []);
    
    // Check if user has the required role for the route
    if (isInstructorRoute && !userRoles.includes('Instructor')) {
      return NextResponse.redirect(new URL('/student-dashboard', request.url));
    }
    
    if (isStudentRoute && !userRoles.includes('Student')) {
      return NextResponse.redirect(new URL('/instructor-dashboard', request.url));
    }
    
    // Allow the request
    return NextResponse.next();
  } catch (error) {
    console.error('Error in middleware:', error);
    // If there's an error, redirect to login
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

// Configure the middleware to run on specific paths
export const config = {
  matcher: [
    '/my-account/:path*',
    '/instructor-dashboard/:path*',
    '/instructor-profile/:path*',
    '/instructor-enrolled-course/:path*',
    '/instructor-wishlist/:path*',
    '/instructor-reviews/:path*',
    '/instructor-quiz-attempts/:path*',
    '/instructor-order-history/:path*',
    '/instructor-personal-courses/:path*',
    '/instructor-announcements/:path*',
    '/instructor-assignments/:path*',
    '/instructor-settings/:path*',
    '/student-dashboard/:path*',
    '/student-profile/:path*',
    '/student-enrolled-course/:path*',
    '/student-wishlist/:path*',
    '/student-reviews/:path*',
    '/student-quiz-attempts/:path*',
    '/student-order-history/:path*',
  ],
};
