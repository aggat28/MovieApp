import React from "react";
import {Pagination, Container} from "react-bootstrap";

export default function PaginationPage({handlePrevPage, handleNextPage}){

  

  return (
    <Pagination>
      <Container className="d-flex justify-content-between" style={{width: '300px'}}>
        <Pagination.Prev onClick={handlePrevPage} style={{width: '50px', textAlign: 'center', fontSize: '1.5rem'}} />
        
        <Pagination.Next onClick={handleNextPage} style={{width: '50px', textAlign: 'center', fontSize: '1.5rem'}}/>
      </Container>
    </Pagination>
  )
}