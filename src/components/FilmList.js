import React from "react";
import Film from "./Film";

const FilmList = ({ films }) => {
    const filmNodes = films.map(film => {
        return (
            <Film key={film.id}>
                <a href={film.url} target="_blank">{film.name}</a>
            </Film>
        )
    })

    return (
        <>
            <hr className="solid" />
            <ul>
                {filmNodes}
            </ul>
            <hr className="solid" />
        </>
    )
}

export default FilmList