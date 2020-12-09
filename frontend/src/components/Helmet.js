import React from "react";
import {Helmet} from "react-helmet";

const HelmetSection = ({ title, href }) => {
    const start = String(window.location.href)
    
    return(
    <div className="application">
        <Helmet>
            <meta charSet="utf-8" />
            <title>{title}</title>
            <link rel="canonical" href={`${start}/${href}`} />
        </Helmet>
    </div>
    );
}

export default HelmetSection;