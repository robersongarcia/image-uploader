import { Box, Grid, Link, Paper, Typography} from '@mui/material'


export const UploadPage = () => {
  return (
      <Grid container width={'100vw'} height={'100vh'} sx={
        {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#FAFAFB',
        }
      }>
        <Paper elevation={4} sx={
          {
            width: {
              xs: '75%',
              sm: '50%',
            },
            height: {
              xs: '60%',
              sm: '45%',
            },
            maxWidth: '450px',
            maxHeight: '450px',
            borderRadius: '12px',            
            display: 'flex',
            flexDirection: 'column',
          }
        }>
        </Paper>
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
      </Grid>
  )
}
