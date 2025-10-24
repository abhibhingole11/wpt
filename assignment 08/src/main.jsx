import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import BookInfo from './components/Book'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookInfo/>

  </StrictMode>,
)
