import React, { useState, useEffect } from "react";

import FavoritesCharactersElements from "../components/FavoritesCharactersElements";
import FavoritesComicsElements from "../components/FavoritesComicsElements";

import Cookies from "js-cookie";

const Favorites = () => {
    const [cookiesLoadup, setCookiesLoadup] = useState(true);
    const [cookiesCharacter, setCookiesCharacter] = useState("");
    const [cookiesComics, setCookiesComics] = useState("");

    useEffect(() => {
        let userCookiesCharacter = Cookies.get("marvelFavoriteCharacters");
        let userCookiesArrayCharacter;
        if (userCookiesCharacter) {
            userCookiesArrayCharacter = userCookiesCharacter.split("&");
        }
        setCookiesCharacter(userCookiesArrayCharacter);
        let userCookiesComics = Cookies.get("marvelFavoriteComics");
        let userCookiesArrayComics;
        if (userCookiesComics) {
            userCookiesArrayComics = userCookiesComics.split("&");
        }
        setCookiesComics(userCookiesArrayComics);
        setCookiesLoadup(false);
    }, []);

    return (
        !cookiesLoadup && (
            <div className="container">
                <div className="favorites-title">
                    <h2>Favorites characters</h2>
                    <button
                        onClick={() => {
                            Cookies.remove("marvelFavoriteComics");
                            Cookies.remove("marvelFavoriteCharacters");
                            setCookiesCharacter("");
                            setCookiesComics("");
                        }}
                    >
                        <h3>Remove all Favorites</h3>
                    </button>
                </div>
                <section className="favorites">
                    {cookiesCharacter &&
                        cookiesCharacter.map((e, index) => {
                            return (
                                <FavoritesCharactersElements
                                    key={index}
                                    index={index}
                                    id={e}
                                />
                            );
                        })}
                </section>
                <h2>Favorites comics</h2>
                <section className="favorites">
                    {cookiesComics &&
                        cookiesComics.map((e, index) => {
                            return (
                                <FavoritesComicsElements
                                    key={index}
                                    index={index}
                                    id={e}
                                />
                            );
                        })}
                </section>
            </div>
        )
    );
};

export default Favorites;
