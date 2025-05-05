import React from 'react'
import { Routes , Route , Navigate } from 'react-router-dom'
import { WebProvider } from '../../context'
import Layout from '../../components/web_components/shared/layout/layout.jsx'

const AppWebRoutes = () => {
  return (
    <WebProvider>
        <Layout>
    <Routes>
        <Route path="/" element={ <div>hii</div>} />
        {/*<Route path="/table" element={<Table />} />*/}
    </Routes>
        </Layout>
    </WebProvider>
  )
}

export default AppWebRoutes