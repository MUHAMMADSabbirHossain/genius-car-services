import axios from "axios";

const { useEffect } = require("react");
const { useState } = require("react")

const useToken = user => {
    const [token, setToken] = useState("");
    useEffect(() => {
        const getToken = async () => {
            console.log(user);
            const email = user?.user?.email;
            if (email) {
                const { data } = await axios.post('http://localhost:5000/login', { email });
                setToken(data.accessToken);
                localStorage.setItem('accessToken', data.accessToken);
            }
        }
        getToken();
    }, [user]);
    return [token];
};

export default useToken;