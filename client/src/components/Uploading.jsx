import { Box, Grid, LinearProgress, Paper, Typography } from "@mui/material"
import { Footer } from "./Footer"

export const Uploading = () => {
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
                borderRadius: '12px',            
                display: 'flex',
                flexDirection: 'column',
                paddingTop: '2rem',
                paddingBottom: '2rem',
                width: {
                    xs: '50%',
                    sm: '30%',                
                }
                }
            }>
            <Typography sx={
                {
                    fontSize: '1.5rem',
                    textAlign: 'left',  
                    marginBottom: '1rem',
                    marginLeft: '5%',
                }
            }>
                Uploading...
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
                    }}>
                    <LinearProgress variant="determinate" value={5} />
                </Box>                
            </Box>
            <Footer />
        </Paper>
    </Grid>
    
  )
}
