import React, { useEffect, useState } from "react";
import axios from "axios";

import CharacterElement from "../components/CharacterElement";
import Pagination from "../components/Pagination";

const Main = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [data, setData] = useState([]);
    const [numberOfPage, setNumberOfPage] = useState();
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            let apiUrl = "http://localhost:4000/characters";
            if (page !== 1) {
                apiUrl += `?offset=${Number(page) * 100}`;
            }
            try {
                const response = await axios.get(apiUrl);
                setIsLoading(false);
                setData(response.data.results);
                setNumberOfPage(Math.ceil(response.data.total / 100));
            } catch (e) {
                alert("An error occurred");
            }
        };
        fetchData();
    }, [page]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        let apiUrl = `http://localhost:4000/characters?nameStartsWith=${search}`;
        try {
            const response = await axios.get(apiUrl);
            setIsLoading(false);
            setData(response.data.results);
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
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleSearch} value={search} />
                <button type="submit">Search</button>
            </form>
            {isLoading ? (
                <span>Loading</span>
            ) : (
                <>
                    <div className="character-section">
                        {data.map((e, index) => {
                            return (
                                <CharacterElement key={index} character={e} />
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
                    <span>{numberOfPage}</span>
                </>
            )}
        </section>
    );
};

export default Main;
