import { useEffect, useState } from 'react';
import btnStyles from '../../styles/Button.module.css';

export default function PaginationButton (props) {
    const {setStartingIndex, setCurrentPage, currentPage, pageNumber} = props;

    return (
        <button className={`${currentPage === pageNumber && btnStyles.selectedBtn} ${btnStyles.btn} ${btnStyles.pageBtn}`} onClick={()=>{setStartingIndex((pageNumber-1)*20); setCurrentPage(pageNumber)}}>{pageNumber}</button>
    )
};