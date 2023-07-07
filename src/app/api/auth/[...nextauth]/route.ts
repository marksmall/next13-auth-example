import NextAuth, { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

if (
  !process.env.NEXTAUTH_SECRET ||
  !process.env.GITHUB_CLIENT_ID ||
  !process.env.GITHUB_CLIENT_SECRET ||
  !process.env.GOOGLE_CLIENT_ID ||
  !process.env.GOOGLE_CLIENT_SECRET
) {
  throw new Error('Necessary auth Environment variables not defined');
}

export const authOptions: AuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'text', placeholder: 'johnsmith' },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials) {
        // Check if credentials exist and throw error if either do not.
        if (!credentials?.email || !credentials.password) {
          throw new Error('Missing email or password for credentials');
        }

        // FIXME: In real app, get user from dbase or API.
        const existingUser = {
          id: '42',
          email: 'test@example.com',
          password: 'changeme',
        };

        if (
          credentials?.email === existingUser.email &&
          credentials?.password === existingUser.password
        ) {
          return existingUser;
        } else {
          return null;
        }
      },
    }),
  ],
  debug: process.env.NODE_ENV === 'development',
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
