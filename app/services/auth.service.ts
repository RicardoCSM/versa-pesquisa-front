import { signIn, signOut } from "next-auth/react";
import httpClient from "./http.service";

interface loginData {
    email: string,
    password: string
}

interface registerData {
    name: string,
    lastname: string,
    email: string,
    password: string,
    password_repeat: string
}

const authService = {
    currentUser: null,
    isLoggedIn() {
        return !!localStorage.getItem('ACCESS_TOKEN')
    },
    getToken() {
        return localStorage.getItem('ACCESS_TOKEN')
    },
    async login(loginData: loginData) {
        try {
            const response = await signIn('credentials', { redirect: false, ...loginData });
            const { status, data } = await httpClient.post('user/login', loginData);
            if (status === 200 && response?.ok) {
                localStorage.setItem('ACCESS_TOKEN', data.access_token)
            }
            return {
                success: true
            }
        } catch (e: any) {
            return {
                success: false,
                errors: e.response.data.errors
            }
        }
    },
    async register(registerData: registerData) {
        try {
            const { status, data } = await httpClient.post('user/signup', registerData);
            if (status === 200) {
                localStorage.setItem('ACCESS_TOKEN', data.access_token)
            }
            return {
                success: true
            }
        } catch (e: any) {
            console.log("Unexpected error:", e);
            return {
                success: false,
                errors: e.response.data.errors
            }
        }
    },
    logout() {
        localStorage.removeItem('ACCESS_TOKEN');
        signOut({ redirect: true, callbackUrl: '/' });
    },
    async getUser() {
        try {
            if (!this.currentUser) {
                const { status, data } = await httpClient.get('/user/data');
                if (status === 200) {
                    this.currentUser = data;
                }
            }

        } catch (e) {
            return null;
        }

        return this.currentUser;
    }
};

export default authService;