import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export async function getSession() {
    return await getServerSession(authOptions);
}

export default async function getAccessToken() {
    try {
        const session = await getSession();
        const accessToken = session?.accessToken;

        if (!accessToken) {
            return null;
        };

        return accessToken;
    } catch (error: any) {
        return null;
    }
}