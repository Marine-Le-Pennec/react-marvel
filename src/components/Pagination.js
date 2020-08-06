import React from "react";

import * as Scroll from "react-scroll";

const Pagination = ({
    isLoading,
    setIsLoading,
    numberOfPage,
    setPage,
    page,
}) => {
    let scroll = Scroll.animateScroll;
    const handleClick = (input) => {
        setPage(input);
    };
    return (
        <div className="pagination">
            {!isLoading &&
                [...Array(numberOfPage)].map((x, i) => (
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
                        {i + 1}
                    </button>
                ))}
        </div>
    );
};

export default Pagination;
