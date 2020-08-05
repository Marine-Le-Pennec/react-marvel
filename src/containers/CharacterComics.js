import React from "react";

import { useLocation } from "react-router-dom";

const CharacterComics = () => {
    const location = useLocation();
    const { character } = location.state;
    return (
        <ul>
            {character.comics.items.map((e, index) => {
                return <li key={index}>{e.name}</li>;
            })}
        </ul>
    );
};

export default CharacterComics;
