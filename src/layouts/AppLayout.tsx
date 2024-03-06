import {Sidebar} from "../components/Sidebar/Sidebar.tsx";
import {Outlet} from "react-router";
import {cn} from "../utils/cn.ts";


interface Props {
	className?: string
}

export const AppLayout = ({className}: Props) => {
	return <div className={cn('', className)}>
		<Sidebar className='fixed'/>
		<Outlet/>
	</div>

}