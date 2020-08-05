import React from "react";

import { useHistory } from "react-router-dom";

const CharacterElement = ({ index, character }) => {
    const history = useHistory();

    return (
        <div
            className="character-section-element"
            key={index}
            onClick={() => {
                history.push("/charactercomics", { character: character });
            }}
        >
            {character.thumbnail.path !==
                "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" && (
                <img src={character.thumbnail.path + `.jpg`} alt="" />
            )}
            <h2>{character.name}</h2>
        </div>
    );
};

export default CharacterElement;
