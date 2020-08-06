import React, { useState } from "react";

import Cookies from "js-cookie";

const handleClick = (comics) => {
    let cookieExist = Cookies.get("marvelFavoriteComics");
    if (!cookieExist) {
        const marvelFavoriteComics = `${comics.id}&`;
        Cookies.set("marvelFavoriteComics", marvelFavoriteComics, {
            expires: 14,
        });
    } else {
        const cookiesIds = cookieExist.split("&");
        if (cookiesIds.indexOf(comics.id.toString()) === -1) {
            Cookies.set("marvelFavoriteComics", `${cookieExist}${comics.id}&`);
        }
        if (cookiesIds.indexOf(comics.id.toString()) !== -1) {
            const i = cookiesIds.indexOf(comics.id.toString());
            cookiesIds.splice(i, 1);
            const marvelFavoriteComics = cookiesIds.join("&");
            Cookies.set("marvelFavoriteComics", marvelFavoriteComics, {
                expires: 14,
            });
        }
    }
};

const ComicsElements = ({ index, comics, isFav }) => {
    const [fav, setFav] = useState(isFav);

    return (
        <div className="comics-section-element" key={index}>
            <div>
                <div
                    className="favorite-container"
                    onClick={() => {
                        handleClick(comics);
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
            {comics.thumbnail.path !==
                "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" && (
                <img
                    src={
                        comics.thumbnail.path + `.${comics.thumbnail.extension}`
                    }
                    alt=""
                />
            )}
            <div>
                <h2>{comics.title}</h2>
                {comics.description && <p>{comics.description}</p>}
            </div>
        </div>
    );
};

export default ComicsElements;
