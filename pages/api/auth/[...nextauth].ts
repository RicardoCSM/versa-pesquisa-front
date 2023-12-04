import axios from "axios";
import NextAuth, { AuthOptions} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: { label: 'email', type: 'text' },
                password: { label: 'password', type: 'password' }
            },
            authorize(credentials) {
                return axios.post(`${process.env.API_BASE_URL}user/login`, credentials)
                        .then((response) => {
                            const user = response.data;
                            return user;
                        })
                        .catch((error) => {
                            throw new Error('Incorrect email or password.');
                        })              
            }
        })
    ],
    pages: {
        signIn: '/'
    },
    debug: process.env.NODE_ENV === 'development',
    session: {
        strategy: 'jwt'
    },
    callbacks: {
        async jwt({token, user}) {
            if (user) {
                token.accessToken = user.access_token;
            }
            return token;
        },
        async session({session, token}) {
            session.accessToken = token.accessToken;
            return session;
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);