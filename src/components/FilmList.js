import React from "react";
import Film from "./Film";

const FilmList = ({ films, index }) => {
    const filmNodes = films.map(film => {
        return (
            <Film>
                <a href={film.url} target="_blank">{film.name}</a>
            </Film>
        )
    })

    return (
        <>
            <hr className="solid" />
            <ul key={index}>
                {filmNodes}
            </ul>
            <hr className="solid" />
        </>
    )
}

export default FilmList