


import {ComponentProps} from "react";
import {cn} from "../../utils/cn.ts";


const variants = {
	primary: 'w-full px-5 py-[22px] rounded-[10px] border-[1px] border-[#eee]  placeholder:text-[#c4c4c4] placeholder:capitalize',
	clear: 'bg-none border-none placeholder:text-[#9aa0b4] placeholder:text-sm w-full'
}

interface Props extends ComponentProps<'input'>{
	variant?: keyof typeof variants
}


export const Input = ({variant = 'primary', className,children, ...otherProps}: Props) => {
	return <input className={cn(variants[variant], className )} {...otherProps}>
		{children}
	</input>
}
