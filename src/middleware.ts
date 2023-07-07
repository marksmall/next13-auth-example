/// Without a defined matcher, this line applies next-auth to the whole project.
// export { default } from 'next-auth/middleware';

// See https://next-auth.js.org/configuration/nextjs#advanced-usage
import { NextResponse } from 'next/server';
import { NextRequestWithAuth, withAuth } from 'next-auth/middleware';

export default withAuth(
  // `withAuth` augments your `request` with the user's token.
  function middleware(request: NextRequestWithAuth) {
    console.log('PATHNAME: ', request.nextUrl.pathname);
    console.log('TOKEN: ', request.nextauth.token);

    if (request.nextUrl.pathname.startsWith('/about') && request.nextauth.token?.role !== 'admin') {
      return NextResponse.rewrite(new URL('/denied', request.url));
    }

    if (
      request.nextUrl.pathname.startsWith('/client') &&
      request.nextauth.token?.role !== 'manager'
    ) {
      return NextResponse.rewrite(new URL('/denied', request.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  },
);

// Apply next-auth only to matching routes
// i.e. https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const config = { matcher: ['/about', '/client', '/dashboard'] };
