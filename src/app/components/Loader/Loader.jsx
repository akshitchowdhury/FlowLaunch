import React from 'react'
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
const Loader = () => {
  return (
    <div>
        <Stack spacing={1}>
      <Skeleton variant="text" sx={{ fontSize: '1rem',
       bgcolor: 'grey.900'  }}
      />

      <Skeleton  variant="circular"  width={40} height={40}  />
      <Skeleton variant="rectangular" width={210} height={60} />
      <Skeleton variant="rounded" width={210} height={60} />
    </Stack>      
    </div>
  )
}

export default Loader
