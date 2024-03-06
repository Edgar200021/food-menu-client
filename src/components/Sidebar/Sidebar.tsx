import {cn} from "../../utils/cn.ts";
import {useUser} from "../../context/UserContext.tsx";
import {getRandomColor} from "../../utils/getRandomColor.ts";

import menuIcon from '../../assets/icons/menu.svg'
import cartIcon from '../../assets/icons/cart.svg'
import offIcon from '../../assets/icons/off.svg'
import {Link} from "react-router-dom";
import {Button} from "../ui/Button.tsx";
import {$http} from "../../api/base.ts";

interface Props {
	className?: string
}


export const Sidebar = ({className}: Props) => {
	const {user, setUser} = useUser()

	const logout = async() => {
		try {
			await $http.post("/auth/logout")
			setUser(null)
		} catch (e) {
			console.log(e)
		}
	}

	return <aside className={cn('max-w-[240px] h-full w-full pt-5 px-[30px] pb-[50px] flex flex-col gap-y-[46px] border-[1px] border-[#d4d6e0]', className)}>
		<div>
				<div style={{backgroundColor: getRandomColor()}}
		     className="w-20 h-20 text-white mb-5  flex items-center justify-center rounded-full">
				{user?.avatar ? <img className='w-full h-full object-cover' src={user.avatar} alt={user.name}/> :
					<span className='text-3xl'>{user?.name[0].toUpperCase()}</span>}
				</div>
				<span className='text-xl font-bold  block'>{user?.name}</span>
				<span className='text-[#9ea1b1] text-sm'>{user?.email}</span>
		</div>
		<nav className='flex flex-col justify-between h-full '>
			<ul className='flex flex-col gap-y-10'>
				<li>
					<Link className='flex w-fit items-center gap-x-4' to={"/menu"}>
						<img className='h-5 w-5' src={menuIcon} alt="menu"/>
						<span>Меню</span>
					</Link>
				</li>
				<li>
					<Link className='flex w-fit items-center gap-x-4' to={"/cart"}>
						<img className='h-5 w-5' src={cartIcon} alt="cart"/>
						<span>Корзина</span>
					</Link>
				</li>
			</ul>
			<Button onClick={logout} className='gap-x-3 py-3 max-w-[130px]'>
				<img src={offIcon} alt={"logout"}/>
				<span>Выйти</span>
			</Button>
		</nav>
	</aside>
}