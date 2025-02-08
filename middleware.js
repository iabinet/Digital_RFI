import { NextResponse } from 'next/server';

// Helper function to check if the path is public
function isPublicPath(path) {
  const publicPaths = ['/auth/login', '/auth/signup', '/auth/forgot-password'];
  return publicPaths.includes(path);
}

export function middleware(request) {
  const { pathname } = request.nextUrl;
  
  // Add your authentication logic here
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/auth/:path*',
  ],
}; 