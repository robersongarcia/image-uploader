import { Box, Button, Grid, Paper, Typography} from '@mui/material'
import { Footer } from '../components/'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


export const LinkPage = () => {
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
            height: 'auto',
            maxWidth: '450px',
            borderRadius: '12px',            
            display: 'flex',
            flexDirection: 'column',
          }
        }>
          <Box sx={
            {
              display: 'flex',
              alignItems: 'center',
              height: '100%',
              width: '100%',
              flexDirection: 'column',
            }
          }>
            
            <CheckCircleIcon sx={
              {
                fontSize: '3rem',
                color: '#219653',
                marginBottom: '1rem',
                marginTop: '1rem',
              }
            }/>

            <Typography sx={
              {
                color: '#4F4F4F',
                textAlign: 'center',                
                fontSize: '1.8rem',
                fontStyle: 'normal',
                fontWeight: '500',                                
              }
            }>
              Uploaded Successfully!
            </Typography>

            <Box sx={
              {
                display: 'flex',
                flexDirection: 'column',
                width: '90%',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '1rem',
                borderRadius: '12px',
              }
            }>
              <img 
                style={{
                  width: '100%',                  
                  objectFit: 'cover',                  
                  borderRadius: '12px',
                  maxHeight: '400px',                 
                }}                
                src="https://placehold.co/800" alt="" />
                
                <Box sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  borderRadius: '8px',
                  alignItems: 'center',
                  backgroundColor: '#F6F8FB',
                  width: '100%',
                  border: '1px solid #E0E0E0',
                  marginTop: '1rem',
                  marginBottom: '1rem',
                  height: '34px'
                }}>
                  <Typography sx={
                    {
                      fontSize: '1rem',
                      textAlign: 'center',
                      color: '#828282',
                      marginLeft: '10px',
                      marginRight: '10px',
                      width: '80%',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }
                  }>
                    https:// Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero repudiandae optio porro expedita molestiae earum atque sint modi neque placeat eligendi vel ullam nesciunt laudantium, aspernatur quo corporis deserunt. Numquam.
                  </Typography>  
                  <Button 
                    sx={
                      {
                        width: '20%',
                        height: '95%',
                        borderRadius: '8px',
                        backgroundColor: '#2F80ED',
                        color: '#FFFFFF',
                        fontSize: '0.8rem',
                        fontWeight: '500',
                        textTransform: 'none',
                        '&:hover': {
                          backgroundColor: '#2D74DA',
                        }
                      }
                    }
                  >Copy</Button>                
                </Box>

            </Box>
              
          </Box>

            
        </Paper>
       <Footer />
      </Grid>
  )
}
