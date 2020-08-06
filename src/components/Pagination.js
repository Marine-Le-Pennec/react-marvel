import React, { useState } from "react";

import * as Scroll from "react-scroll";

const Pagination = ({
    isLoading,
    setIsLoading,
    numberOfPage,
    setPage,
    page,
}) => {
    let scroll = Scroll.animateScroll;

    const [pageInput, setPageInput] = useState("");

    const handlePageInput = (event) => {
        const value = event.target.value;
        setPageInput(value);
    };

    const handleClick = (input) => {
        setPage(input);
    };

    return (
        !isLoading && (
            <div className="pagination">
                {numberOfPage > 0 && (
                    <>
                        <button
                            onClick={() => {
                                handleClick(page !== 1 && Number(page - 1));
                                scroll.scrollToTop();
                                setIsLoading(true);
                            }}
                            className="pagination-button"
                        >
                            &lt;
                        </button>
                        {[...Array(numberOfPage)].map(
                            (x, i) =>
                                i <= 5 && (
                                    <button
                                        className={
                                            page === i + 1
                                                ? "pagination-button selected"
                                                : "pagination-button"
                                        }
                                        onClick={() => {
                                            handleClick(Number(i + 1));
                                            scroll.scrollToTop();
                                            setIsLoading(true);
                                        }}
                                        key={i}
                                    >
                                        <span>{i + 1}</span>
                                    </button>
                                )
                        )}
                        <input
                            className="pagination-button pagination-input"
                            type="page"
                            placeholder="Enter page"
                            value={pageInput}
                            onChange={handlePageInput}
                            onKeyPress={(ev) => {
                                console.log(`Pressed keyCode ${ev.key}`);
                                if (ev.key === "Enter") {
                                    ev.preventDefault();
                                    if (typeof pageInput === "number") {
                                        handleClick(pageInput);
                                    } else {
                                        setPageInput("");
                                    }
                                }
                            }}
                        />
                        {[...Array(numberOfPage)].map(
                            (x, i) =>
                                numberOfPage - 6 <= i && (
                                    <button
                                        className={
                                            page === i + 1
                                                ? "pagination-button selected"
                                                : "pagination-button"
                                        }
                                        onClick={() => {
                                            handleClick(Number(i + 1));
                                            scroll.scrollToTop();
                                            setIsLoading(true);
                                        }}
                                        key={i}
                                    >
                                        <span>{i + 1}</span>
                                    </button>
                                )
                        )}
                        <button
                            onClick={() => {
                                handleClick(Number(page + 1));
                                scroll.scrollToTop();
                                setIsLoading(true);
                            }}
                            className="pagination-button"
                        >
                            &gt;
                        </button>
                    </>
                )}
            </div>
        )
    );
};

export default Pagination;
