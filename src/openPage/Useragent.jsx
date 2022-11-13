import React from "react";
import { useEffect } from "react";

function Useragent(props) {
    var location = window;

    useEffect(() => {
        const ua = navigator.userAgent.toLowerCase();
        
        // location.href = "https://apps.apple.com/kr/app/id1639296945";
        location.href = ua.indexOf("android") > -1 ? "https://play.google.com/store/apps/details?id=xxx" : "https://apps.apple.com/kr/app/id1639296945";
        window.open(location.href);
        window.location.assign(location.href);

    }, []);


    return (
        <>
        </>
    );
}

export default Useragent;