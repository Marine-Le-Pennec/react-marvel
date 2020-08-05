import React from "react";

import { useHistory } from "react-router-dom";

const Header = () => {
    const history = useHistory();

    return (
        <header>
            <div
                className="container"
                onClick={() => {
                    history.push("/");
                }}
            >
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/0/04/MarvelLogo.svg"
                    alt="marvel-logo"
                />
            </div>
        </header>
    );
};

export default Header;
