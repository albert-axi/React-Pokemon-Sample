import {createContext, useState} from 'react'

export const UserContext = createContext(null) // created a new context

export const UserContextProvider = props => {

  const [user, setUser] = useState(null)

  return (
    <UserContext.Provider value={[user, setUser]}>
      {props.children}
    </UserContext.Provider>
  )
}
