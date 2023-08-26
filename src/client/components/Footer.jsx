import { Box, Link } from "@mui/material"

export const Footer = () => {
  return (
    <Box sx={
        {
          position: 'absolute',
          bottom: '0',
          right: '0',
          padding: '1rem',
          color: '#BDBDBD',
          fontStyle: 'normal',
          textDecoration: 'none',
          textAlign: 'center',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }
      }>
        <Link
          href='https://github.com/robersongarcia'
          sx={
            {
              color: '#A9A9A9',
              fontStyle: 'normal',
              textDecoration: 'none',
              textAlign: 'center',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }
          }
        >
          <span style={{marginRight: 10}}>created by @robersongarcia</span>
          <img src='https://img.shields.io/badge/-GitHub-grey?style=flat&logo=github'/>
        </Link>
      </Box>
  )
}
