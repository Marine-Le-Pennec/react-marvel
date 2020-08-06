import React from "react";

import { useLocation } from "react-router-dom";

const CharacterComics = () => {
    const location = useLocation();
    const { character } = location.state;
    return (
        <section className="container main">
            <h2>{character.name} comics list :</h2>
            <ul>
                {character.comics.items.map((e, index) => {
                    return <li key={index}>{e.name}</li>;
                })}
            </ul>
        </section>
    );
};

export default CharacterComics;
