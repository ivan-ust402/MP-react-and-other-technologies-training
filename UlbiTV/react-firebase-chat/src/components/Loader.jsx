import { Box } from '@mui/material';
import React from 'react';

export const Loader = () => {
  return (
    <Box display={'flex'} sx={{
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
    }}>
      <span className="loader"></span>
    </Box>
  );
}

export default Loader;
