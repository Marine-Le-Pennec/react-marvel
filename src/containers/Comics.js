import React, { useEffect, useState } from "react";
import axios from "axios";

import ComicsElements from "../components/ComicsElement";
import Pagination from "../components/Pagination";

const Comics = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [data, setData] = useState([]);
    const [numberOfPage, setNumberOfPage] = useState();

    useEffect(() => {
        const fetchData = async () => {
            let apiUrl = "http://localhost:4000/comics";
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

    return (
        <section className="container main">
            {isLoading ? (
                <span>Loading</span>
            ) : (
                <>
                    <div className="character-section">
                        {data.map((e, index) => {
                            return <ComicsElements key={index} comics={e} />;
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

export default Comics;
