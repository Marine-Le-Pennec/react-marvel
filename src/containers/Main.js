import React, { useEffect, useState } from "react";
import axios from "axios";

import CharacterElement from "../components/CharacterElement";
import Pagination from "../components/Pagination";
import Loading from "../components/svg/Loading";

const Main = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [data, setData] = useState([]);
    const [numberOfPage, setNumberOfPage] = useState();
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            let apiUrl = `http://localhost:4000/characters?nameStartsWith=${search}`;
            if (page !== 1) {
                apiUrl += `&offset=${Number(page) * 100}`;
            }
            try {
                const response = await axios.get(apiUrl);
                setIsLoading(false);
                setData(response.data.results);
                setNumberOfPage(Math.ceil(response.data.total / 100));
                console.log(response.data.results);
            } catch (e) {
                alert("An error occurred");
            }
        };
        fetchData();
    }, [page, search]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        let apiUrl = `http://localhost:4000/charactersSearch?nameStartsWith=${search}`;
        try {
            const response = await axios.get(apiUrl);
            setIsLoading(false);
            setData(response.data.results);
            console.log(response.data.results);
            setNumberOfPage(Math.ceil(response.data.total / 100));
        } catch (e) {
            alert("An error occurred");
        }
    };

    const handleSearch = (event) => {
        const value = event.target.value;
        setSearch(value);
    };

    return (
        <section className="container main">
            <form onSubmit={handleSubmit} className="search-bar">
                <input type="text" onChange={handleSearch} value={search} />
                <button type="submit">Search</button>
            </form>
            {isLoading ? (
                <Loading />
            ) : (
                <>
                    <div className="character-section">
                        {data.map((e, index) => {
                            return (
                                e.thumbnail.path !==
                                    "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" && (
                                    <CharacterElement
                                        key={index}
                                        character={e}
                                    />
                                )
                            );
                        })}
                    </div>
                    <Pagination
                        isLoading={isLoading}
                        setIsLoading={setIsLoading}
                        numberOfPage={numberOfPage}
                        setPage={setPage}
                        page={page}
                    />
                </>
            )}
        </section>
    );
};

export default Main;
