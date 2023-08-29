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
                    color: '#4F4F4F',
                    textAlign: 'center',                
                    fontSize: '1.8rem',
                    fontStyle: 'normal',
                    fontWeight: '500',                                
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
                    <LinearProgress variant="indeterminate" />
                </Box>                
            </Box>
            <Footer />
        </Paper>
    </Grid>
    
  )
}
