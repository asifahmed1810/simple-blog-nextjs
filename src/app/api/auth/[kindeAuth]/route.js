import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";
export const GET = handleAuth({
    postLoginRedirectUri: process.env.KINDE_POST_LOGIN_REDIRECT_URL,
    postLogoutRedirectUri: process.env.KINDE_POST_LOGOUT_REDIRECT_URL,
});