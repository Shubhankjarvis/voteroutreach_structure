import React , { createContext } from 'react'

const MobileContext = createContext()

const MobileProvider = ({ children }) => {

  return (
    <MobileContext.Provider value={{}}>
      {children}
    </MobileContext.Provider>
  )
}
export default MobileProvider