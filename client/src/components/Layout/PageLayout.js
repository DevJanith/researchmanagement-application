import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import Sidebar from '../sidebar/Sidebar';
import Navbar from '../navbar/Navbar';
import "./pageLayout.scss"

const PageLayout = forwardRef(({ children, title = '', meta, ...other }, ref) => (
    <>
        <Box ref={ref} {...other}>
            <div className="page-layout">
                <Sidebar />
                <div className="page-layout-container">
                    <Navbar />
                    <div className='page-layout-body'>
                        {children}
                    </div>
                </div>
            </div>

        </Box>
    </>
));

PageLayout.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string,
    meta: PropTypes.node,
};

export default PageLayout;
