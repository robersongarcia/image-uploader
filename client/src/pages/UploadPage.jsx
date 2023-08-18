import { Box, Button, Grid, Link, Paper, Typography} from '@mui/material'
import { CardImage } from '../components/CardImage'


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
          <Typography sx={
            {
              fontSize: '1.5rem',
              textAlign: 'center',
              marginTop: '1.8rem',
              marginBottom: '1rem',
            }
          }>
            Upload your image
          </Typography>
          <Typography sx={
            {
              fontSize: '0.9rem',
              textAlign: 'center',
              marginBottom: '1.5rem',
              color: '#828282',
            }
          }>
            File should be jpeg, png...
          </Typography>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '90%',
              justifyContent: 'center',
              alignItems: 'center',
              border: '2px dashed #97BEF4',
              borderRadius: '12px',
              padding: '2rem',   
              backgroundColor: '#F5F5F5',                      
            }}>
              <input type='file' id='file' name='file' accept='image/*' style={{display: 'none'}}/>
              <CardImage />
              <Typography color={'#BDBDBD'} mt={3}>Drag & Drop your image</Typography>
            </Box>

            <Box>
              <Typography color={'#A9A9A9'}>Or</Typography>
            </Box>

            <Box sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <Button variant='contained' size='small' color='primary' sx={
                {

                }
              }>Choose a file</Button>
            </Box>
          </Box>
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
