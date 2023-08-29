import { LinkPage, UploadPage } from './pages'
import { useState } from 'react'


function App() {

  const [status, setStatus] = useState(0) //0 intial status, 1 uploading, 2 uploaded
  const [url, setUrl] = useState('')

  return (
    <>
      {(status === 0 || status === 1) && <UploadPage setStatus={setStatus} status={status} setUrl={setUrl}/>}
      {status === 2 && <LinkPage url={url}/>}
    </>
  )
}

export default App
