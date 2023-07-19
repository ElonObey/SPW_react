import { Box, Container, Typography } from '@mui/material'
import React from 'react'


const style = {
  bgcolor: "#292929",
  mt: 10,
  pl: 5,
  typography: {
    color: "#FFFFFF",
  }
}

function Containers() {
  return (
    <Container>
        <Box sx={style}>
          <Typography>Text</Typography>
        </Box>
    </Container>
  )
}

export default Containers