import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";

const InvalidURLReroute = () => {

    let navigate = useNavigate();

    useEffect(() => {
        navigate("/");
    },[]);

    return (
        <div>InvalidURLReroute</div>
    )
}

export default InvalidURLReroute