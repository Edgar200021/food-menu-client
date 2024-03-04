import {createContext, Dispatch, ReactNode, SetStateAction, useContext, useState} from "react";
import {User} from "../types/user.ts";


const UserContext = createContext<{user: User | null, setUser:Dispatch<SetStateAction<User | null>> }>({
	user: null,
	setUser: () => {}
})



export const UserContextProvider = ({children}: {children: ReactNode}) => {
	const [user, setUser] = useState<User | null>(null)

	return <UserContext.Provider value={{
		user,
		setUser
	}}>
		{children}
	</UserContext.Provider>
}


export const useUser = () => {
	const context = useContext(UserContext)
	if (!context) throw new Error("")

	return context
}