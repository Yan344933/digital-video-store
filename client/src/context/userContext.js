import { createContext } from 'react'

const userContext = createContext({
    isLoggedIn: false
})

export default userContext