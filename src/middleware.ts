/// Without a defined matcher, this line applies next-auth to the whole project.
export { default } from 'next-auth/middleware';

// Apply next-auth only to matching routes
// i.e. https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const config = { matcher: ['/about', '/dashboard'] };
