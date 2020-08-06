import React from "react";

import Favorite from "./svg/Favorite";

import Cookies from "js-cookie";

import { useHistory } from "react-router-dom";

const handleClick = (character) => {
    let cookieExist = Cookies.get("marvelFavoriteCharacters");
    if (!cookieExist) {
        const marvelFavoriteCharacters = [character];
        Cookies.set("marvelFavoriteCharacters", marvelFavoriteCharacters, {
            expires: 14,
        });
    }
};

const CharacterElement = ({ index, character }) => {
    const history = useHistory();

    return (
        <div className="character-section-element" key={index}>
            <div
                onClick={() => {
                    handleClick(character);
                }}
            >
                <Favorite />
            </div>
            <img
                src={
                    character.thumbnail.path +
                    `.${character.thumbnail.extension}`
                }
                alt=""
            />
            <h2
                onClick={() => {
                    history.push("/charactercomics", { character: character });
                }}
            >
                {character.name}
            </h2>
        </div>
    );
};

export default CharacterElement;
