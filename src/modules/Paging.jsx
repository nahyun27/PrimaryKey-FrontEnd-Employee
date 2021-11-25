import React, { useState } from "react";
import Pagination from "react-js-pagination";
import '../styles/Paging.css';

const Paging = ({postPerPage, totalPosts, paginate, currentPage}) => {
  const pageNumbers = [];

  for(let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }


  return ( 
    <Pagination 
      activePage={currentPage} 
      itemsCountPerPage={postPerPage} 
      totalItemsCount={totalPosts} 
      pageRangeDisplayed={5} 
      prevPageText={"◀"}
      firstPageText={"|◀"}
      lastPageText={"▶|"}
      nextPageText={"▶"} 
      onChange={paginate} 
    /> 
  ); 
}; 

export default Paging;