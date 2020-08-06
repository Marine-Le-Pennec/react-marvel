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
            <img
                src={
                    character.thumbnail.path +
                    `.${character.thumbnail.extension}`
                }
                alt=""
            />
            <h2>{character.name}</h2>
        </div>
    );
};

export default CharacterElement;
