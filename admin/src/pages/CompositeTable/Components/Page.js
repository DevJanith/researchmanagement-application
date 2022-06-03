import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import Sidebar from '../../../components/sidebar/Sidebar';
import Navbar from '../../../components/navbar/Navbar';
import "./Page.scss"
import { Helmet } from 'react-helmet-async';

const Page = forwardRef(({ children, title = '', meta, ...other }, ref) => (
  <>
    {/* <Helmet>
      <title>{`${title} | RMA`}</title>
      {meta}
    </Helmet> */}

    <Box ref={ref} {...other}>
      <div className="page">
        <Sidebar />
        <div className="page-container">
          <Navbar />
          <div className='page-body'>
            {children}
          </div>
        </div>
      </div>

    </Box>
  </>
));

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  meta: PropTypes.node,
};

export default Page;
