import React, { useState } from "react";

import Cookies from "js-cookie";

import { useHistory } from "react-router-dom";

const handleClick = (character) => {
    let cookieExist = Cookies.get("marvelFavoriteCharacters");
    if (!cookieExist) {
        const marvelFavoriteCharacters = `${character.id}&`;
        Cookies.set("marvelFavoriteCharacters", marvelFavoriteCharacters, {
            expires: 14,
        });
    } else {
        const cookiesIds = cookieExist.split("&");
        if (cookiesIds.indexOf(character.id.toString()) === -1) {
            Cookies.set(
                "marvelFavoriteCharacters",
                `${cookieExist}${character.id}&`
            );
        }
        if (cookiesIds.indexOf(character.id.toString()) !== -1) {
            const i = cookiesIds.indexOf(character.id.toString());
            cookiesIds.splice(i, 1);
            const marvelFavoriteCharacters = cookiesIds.join("&");
            Cookies.set("marvelFavoriteCharacters", marvelFavoriteCharacters, {
                expires: 14,
            });
        }
    }
};

const CharacterElement = ({ index, character, isFav }) => {
    const [fav, setFav] = useState(isFav);

    const history = useHistory();

    return (
        <div className="character-section-element" key={index}>
            <div>
                <div
                    className="favorite-container"
                    onClick={() => {
                        handleClick(character);
                        setFav(!fav);
                    }}
                >
                    <svg
                        className={fav ? "isfavorite" : "notfavorite"}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                    >
                        <path
                            fillRule="evenodd"
                            d="M12.672.668a.75.75 0 00-1.345 0L8.27 6.865l-6.838.994a.75.75 0 00-.416 1.279l4.948 4.823-1.168 6.811a.75.75 0 001.088.791L12 18.347l6.117 3.216a.75.75 0 001.088-.79l-1.168-6.812 4.948-4.823a.75.75 0 00-.416-1.28l-6.838-.993L12.672.668z"
                        ></path>
                    </svg>
                </div>
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
