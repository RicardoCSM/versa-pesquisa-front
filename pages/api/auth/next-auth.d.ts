import { Session as NextAuthSession, User as NextAuthUser } from 'next-auth';
import { JWT } from 'next-auth/jwt';

declare module 'next-auth' {
  interface Session extends NextAuthSession {
    accessToken?: string;
  }

  interface User extends NextAuthUser {
    access_token?: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT extends NextAuthJWT {
    accessToken?: string;
  }
}