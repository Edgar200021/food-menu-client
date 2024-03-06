import {ReactNode} from "react";
import {useUser} from "../../context/UserContext.tsx";
import {Navigate} from "react-router";

interface Props {
	children: ReactNode
}

export const Protected = ({children}: Props) => {
	const {user} = useUser()



	return user ? children : <Navigate to={"/"}/>
}