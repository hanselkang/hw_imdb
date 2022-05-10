import React from "react";

const Link = (index) => {
        return (
            <div key={index}>
                <a href=" https://www.imdb.com/calendar/?region=gb" target="_blank"><button className="button">View more upcoming releases &gt; &gt; </button></a>
            </div>
        )
    }

export default Link

