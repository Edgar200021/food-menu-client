import {Outlet} from "react-router";
import {cn} from "../utils/cn.ts";
import authBg from '../assets/image/auth-bg.png'
interface Props {
	className?: string
}



export const AuthLayout = ({className}: Props) => {
	return <main className={cn('px-32 flex gap-x-20  items-center h-full ', className)}>
		<div className='w-[45%] flex items-center justify-center'>
			<img className='max-w-[400px] h-[270px] w-full' src={authBg} alt="Auth bg"/>
		</div>
		<div className='h-full w-[2px] bg-[#D4D6E0]'></div>
		<Outlet/>
	</main>
}