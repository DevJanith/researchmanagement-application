import React from 'react'
import SinglePagePDFViewer from "./Pdf/single-page"
import samplePDF from "./Samples/sample.pdf"

import "./MarkingScheme.scss";

const MarkingScheme = () => {
    return (
        <>
            <h2 style={{ marginLeft: '20px'}}>MarkingScheme</h2>
            <SinglePagePDFViewer pdf={samplePDF} />
        </>

    )
}

export default MarkingScheme