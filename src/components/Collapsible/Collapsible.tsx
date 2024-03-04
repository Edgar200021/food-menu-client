import {Dispatch, ReactElement, ReactNode, SetStateAction, useState} from "react";
import {cn} from "../../utils/cn.ts";

interface Props {
	className?: string
	renderTrigger?: (fn: Dispatch<SetStateAction<boolean>>, isCollapsed: boolean) => ReactElement
	children: ReactNode
	collapsed?: boolean
}


export const Collapsible = ({children, className, renderTrigger, collapsed}: Props) => {
	const [isCollapsed,setIsCollapsed] = useState(false)


	return <>
		{renderTrigger?.(setIsCollapsed, isCollapsed)}

		<div className={cn('overflow-hidden grid grid-rows-[0fr] transition-all duration-300 ease [&>*]:min-h-0', className, {
			'grid-rows-[1fr]': collapsed ?? isCollapsed
		})}>

			{children}
		</div>

	</>



}