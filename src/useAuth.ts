import { useEffect, useState } from "react";
import { Dispatch } from "react";
import axios from "axios"

export default function useAuth(code : string) {
    const [accessToken, setAccessToken] = useState("");
    const [refreshToken, setRefreshToken] = useState("");
    const [expriesIn, setExpiresIn] = useState(0);

    const dispatch = useDispatch();
    useEffect(() => {
        axios
        .post("http://localhost:3001/login", {
            code,
        })
        .then((res) => {
            setAccessToken(res.data.accessToken);
            setRefreshToken(res.data.refreshToken);
            setExpiresIn(res.data.expriesIn);

            window.history.pushState({}, "", "/");
        })
        .catch(() => {
            dispatch({
                type: Actions.SET_API_ENTRACE_CODE,
                payload: { apiEntraceCode: "" },
            });
            window.location.href = "/";
        })
    }, [code]);

    useEffect(() => {
        if (!refreshToken || !expriesIn) return;
        const interval = setInterval(() => {
            axios
            .post("http://localhost:3001/refresh", {
                refreshToken,
              })
              .then((res) => {
                setAccessToken(res.data.accessToken);
                setExpiresIn(res.data.expiresIn);

                window.history.pushState({}, "", "/");
              })
              .catch(() => {
                  window.location.href = "/";
              });
        }, (expriesIn - 60) * 1000);
        return ( ) => clearInterval(interval);
    }, [refreshToken, expriesIn]);
    return accessToken;

}