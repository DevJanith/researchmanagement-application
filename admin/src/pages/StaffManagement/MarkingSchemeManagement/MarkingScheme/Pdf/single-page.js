import React, { useState } from "react";
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Document, Page } from "react-pdf";

export default function SinglePage(props) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1); //setting 1 to show fisrt page

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  const { pdf } = props;

  return (
    <>
      <Document
        file={pdf}
        options={{ workerSrc: "/pdf.worker.js" }}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <div style={{ marginLeft: '480px'}}>
        <h4 style={{ marginLeft: '80px', marginBottom: '15px'}}>
          Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
        </h4>
        <Button 
          variant="contained" 
          type="button" 
          startIcon={<ArrowBackIosIcon />}
          style={{ marginRight: '20px'}}
          disabled={pageNumber <= 1} 
          onClick={previousPage}>
          Previous
        </Button>
        
        <Button
          variant="contained"
          type="button"
          endIcon={<ArrowForwardIosIcon />}
          disabled={pageNumber >= numPages}
          onClick={nextPage}>
          Next
        </Button>
      </div>
    </>
  );
}
