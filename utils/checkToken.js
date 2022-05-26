import jwt from "jsonwebtoken";
import {
    http
} from "../service/callApi/api";
import {
    setToken
} from "./setToken";

export const checkToken = async() => {
    let Token = localStorage.getItem("SararAccessToken");
    const RefreshToken = localStorage.getItem("SararRefreshToken");

    if (Token) {
        const decodedToken = jwt.decode(Token, {
            complete: true,
        });
        const decodeRefesfh = jwt.decode(RefreshToken, {
            complete: true,
        });
        const dateNow = Date.now() / 1000;

        if (decodedToken.payload.exp < dateNow) {
            if (decodeRefesfh.payload.exp > dateNow) {
                const ans = await http.post(
                    "https://sarar-mansouri.fandogh.cloud/api/token/refresh/", {
                        refresh: RefreshToken,
                    }
                );
                if (ans.status === 200) {
                    setToken({
                        access: ans.data.access,
                        refresh: ans.data.refresh,
                    });
                    localStorage.setItem("SararAccessToken", Token);
                }
            }
        } else {
            // access Token is valid
        }
    }

    return Token;
};