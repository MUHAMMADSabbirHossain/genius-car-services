import { useEffect, useState } from "react";

const useServices = () => {
    const [serivces, setServices] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/service")
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return [serivces, setServices];
}

export default useServices;