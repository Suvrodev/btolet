import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'
import AuthProvider from './Providers/AuthProvider.jsx'
import { HelmetProvider } from 'react-helmet-async'

ReactDOM.createRoot(document.getElementById('root')).render(
 <div className=' max-w-7xl mx-auto'>

   <AuthProvider>
      <HelmetProvider>
         <GoogleOAuthProvider clientId="596632056529-a0nbk62oc8bn501v5k6uvuoc6tpckli7.apps.googleusercontent.com">
            <React.StrictMode>
               <RouterProvider router={router} />
            </React.StrictMode>
         </GoogleOAuthProvider>
      </HelmetProvider>
   </AuthProvider>
  
 </div>
)
