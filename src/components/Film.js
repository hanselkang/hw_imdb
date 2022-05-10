import React from "react";

const Film = ({ children, index }) => {
    return (
        <>
            <li key={index}>{children}</li>
        </>
    )
}

export default Film