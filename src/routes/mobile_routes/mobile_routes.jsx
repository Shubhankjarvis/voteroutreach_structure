import React from 'react'
import { Routes , Route } from 'react-router-dom'
import { MobileProvider } from '../../context'
import { ElectionHomeComponent , RequestToDelete, VoterListComponent} from '../../components/mobile_components'
// import {lazy, Suspense} from 'react'

const AppMobRoutes = () => {
  return (
    <MobileProvider>
    <Routes>
        <Route path="/" element={<ElectionHomeComponent />} />
        <Route path="/voter-list" element={<VoterListComponent />} />
        <Route path="/request-to-delete" element={<RequestToDelete />} />
    </Routes>
    </MobileProvider>
  )
}

export default AppMobRoutes