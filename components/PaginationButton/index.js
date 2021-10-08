import { useEffect, useState } from 'react';
import btnStyles from '../../styles/Button.module.css';

export default function PaginationButton (props) {
    const {setStartingIndex, setCurrentPage, currentPage, pageNumber} = props;

    // function handlePaginationClick () {
    //     setStartingIndex((pageNumber-1)*20); setCurrentPage(pageNumber)
    // }

    return (
        <button className={`${currentPage === pageNumber && btnStyles.selectedBtn} ${btnStyles.btn} ${btnStyles.pageBtn}`} >{pageNumber}</button>
    )
};