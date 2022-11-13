import React from "react";
import { useEffect } from "react";

function Useragent(props) {
    var location = window;

    useEffect(() => {
        const ua = navigator.userAgent.toLowerCase();

        if (window.confirm("스토어로 이동하시겠습니까?")) {
            location.href = ua.indexOf("android") > -1 ? "https://play.google.com/store/apps/details?id=xxx" : "https://apps.apple.com/kr/app/id1639296945";
            window.open(location.href);
        }
        
    }, []);


    return (
        <>
        </>
    );
}

export default Useragent;