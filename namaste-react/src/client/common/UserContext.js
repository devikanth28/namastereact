import { createContext } from "react";

const UserContext = createContext({
    loggedInUser : "Default User",
})

export const CartContext = createContext({})

export default UserContext