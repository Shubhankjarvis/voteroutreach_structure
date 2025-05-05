import React from 'react'
import { Routes , Route , Navigate } from 'react-router-dom'
import { WebProvider } from '../../context'
// import Dummy from '../../components/web_components/pages/dummy'
// import Header from '../../components/web_components/pages/dummy'
import NavbarComponent from '../../components/web_components/pages/dummy'
import Table from '../../components/web_components/pages/table'
// import {lazy, Suspense} from 'react'

const AppWebRoutes = () => {
  return (
    <WebProvider>
    <Routes>
        <Route path="/" element={<NavbarComponent />} />
        <Route path="/table" element={<Table />} />
       
    </Routes>
    </WebProvider>
  )
}

export default AppWebRoutes