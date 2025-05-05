import React , { createContext } from 'react'

const WebContext = createContext()

const WebProvider = ({ children }) => {

  return (
    <WebContext.Provider value={{}}>
      {children}
    </WebContext.Provider>
  )
}
export default WebProvider 