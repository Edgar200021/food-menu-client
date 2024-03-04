import {ComponentProps} from "react";
import {cn} from "../../utils/cn.ts";
import {Link} from "react-router-dom";


const variants = {
	primary: 'flex max-w-[248px] w-full items-center justify-center px-[14px] py-5 rounded-[28px] bg-primary shadow-sm uppercase text-white tracking-[0.08em] hover:-translate-y-2 active:-translate-y-1 transition-transform duration-300 ease ',
	clear: 'bg-none border-none '
}

interface Props extends ComponentProps<'button'>{
	variant?: keyof typeof variants
	to?: string

}


export const Button = ({variant = 'primary', to, className,children, ...otherProps}: Props) => {

	if (to) return <Link to={to}  className={cn(variants[variant], className )}>{children}</Link>

	return <button className={cn(variants[variant], className )} {...otherProps}>
		{children}
	</button>
}