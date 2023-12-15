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
                return axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}user/login`, credentials)
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
    session: {
        strategy: 'jwt'
    }
};

export default NextAuth(authOptions);