import React, { useRef } from 'react'
import SinglePagePDFViewer from "./Pdf/single-page"
import samplePDF from "./Samples/sample.pdf"
import Stack from '@mui/material/Stack';
import Fab from '@mui/material/Fab';
import PrintIcon from '@mui/icons-material/Print';
import { useReactToPrint } from "react-to-print";

import "./MarkingScheme.scss";

const MarkingScheme = () => {

    const componentRef = useRef();
    const handlePrint = useReactToPrint ({
        content: () => componentRef.current,
    });

    return (
        <>
            <Stack direction="row" spacing={110}>
                <h2 style={{ marginLeft: '20px'}}>MarkingScheme</h2>

                <Fab variant="extended" onClick={handlePrint}>
                    <PrintIcon sx={{ mr: 1 }} />
                    Print
                </Fab>

            </Stack>
            {/* <h2 style={{ marginLeft: '20px'}}>MarkingScheme</h2> */}
            {/* onClick={() => { console.log('onClick'); } */}

            {/* PDF Prieviwer from here */}
            <div ref={componentRef}>
                <SinglePagePDFViewer pdf={samplePDF} />
            </div>
            
        </>

    )
}


export default MarkingScheme