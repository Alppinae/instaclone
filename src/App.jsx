import {Box, Container,} from '@mui/material'
import './App.css'
import {InstagramWrapper} from './companents/instagramWrapper'

function App() {

  return (
    <Container maxWidth="lg" width="100%" height="100%">
      <Box>
        <InstagramWrapper/>
      </Box>
    </Container>
  )
}

export default App
