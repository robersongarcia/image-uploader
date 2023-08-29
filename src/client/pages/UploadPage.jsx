import { Box, Button, Grid, Paper, Typography} from '@mui/material'
import { CardImage, Footer, Uploading } from '../components/'
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'


export const UploadPage = ({status = 0, setStatus, setUrl }) => {

  const [imageFile, setImageFile] = useState(null)
  

  const handleDrop = (event) => {
    event.preventDefault();

    // Access the dropped files from the event
    const droppedFiles = event.dataTransfer.files;

    // Assuming only one file is dropped and it's an image
    if (droppedFiles.length === 1 && droppedFiles[0].type.startsWith('image/')) {
      setImageFile(droppedFiles[0]);
    }
  };

  const handleInputChange = (event) => {
    // Get the selected file from the input field
    const selectedFile = event.target.files[0];
    setImageFile(selectedFile);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // Use the imageFile as needed, e.g., upload to a server
    console.log('Uploading', imageFile);

    // Clear the imageFile state after handling
    setImageFile(null);
  };

  useEffect(() => {
    if (imageFile) {
      setStatus(1)

      const formData = new FormData()
      formData.append('file', imageFile)

      fetch('/api/uploader', {
        method: 'POST',
        body: formData,
      })
      .then(response => response.json())
      .then(data => {
        console.log(data)   
        //get url of the web
        const path = window.location.href

        setUrl(path + 'files/' + data.uuid + '.' + data.ext)
        
        setTimeout(() => {
          setStatus(2)
        }, 3000)
      })

    }
  }
  , [imageFile, setStatus, setUrl])

  return (
      status === 0?(<Grid container width={'100vw'} height={'100vh'} sx={
        {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#FAFAFB',
        }
      }
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
      >       
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
              color: '#4F4F4F',
              textAlign: 'center',                
              fontSize: '1.8rem',
              fontStyle: 'normal',
              fontWeight: '500',                                
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
              <form style={{display: 'none'}} onSubmit={handleSubmit}> 
                <input type='file' id='file' name='file' accept='image/*' style={{display: 'none'}} onChange={handleInputChange}/>
                <button id='file-submit-button' type='submit' style={{
                  display: 'none',
                }}></button>
              </form>
                <Button variant='contained' size='small' color='primary' onClick={() => {
                  document.getElementById('file').click()
                }} >Choose a file</Button>
            </Box>
          </Box>
        </Paper>
       <Footer />       
      </Grid>): (<Uploading />)
  )
}

UploadPage.propTypes = {
  status: PropTypes.number,
  setStatus: PropTypes.func,
  setUrl: PropTypes.func,
}