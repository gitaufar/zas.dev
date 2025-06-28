import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { LandingPage } from './page/LandingPage.tsx'
import Navbar from './componen/LandingPageComp/Navbar.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar/>
    <LandingPage />
  </StrictMode>,
)
