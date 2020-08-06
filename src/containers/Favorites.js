import React, { useState, useEffect } from "react";

import FavoritesCharactersElements from "../components/FavoritesCharactersElements";

import Cookies from "js-cookie";

const Favorites = () => {
    const [cookiesLoadup, setCookiesLoadup] = useState(true);
    const [cookies, setCookies] = useState("");

    useEffect(() => {
        let userCookiesCharacter = Cookies.get("marvelFavoriteCharacters");
        let userCookiesArrayCharacter;
        if (userCookiesCharacter) {
            userCookiesArrayCharacter = userCookiesCharacter.split("&");
        }
        setCookies(userCookiesArrayCharacter);
        setCookiesLoadup(false);
    }, []);

    return (
        !cookiesLoadup && (
            <div className="container">
                <h2>Favorites characters</h2>
                <section className="favorites">
                    {cookies &&
                        cookies.map((e, index) => {
                            return (
                                <FavoritesCharactersElements
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
