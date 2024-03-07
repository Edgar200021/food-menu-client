import {cn} from "../../utils/cn.ts";

import starIcon from '../../assets/icons/star.svg'
interface Props {
	className?: string
	rating: number
}

export const Rating = ({className, rating}: Props) => {

	return <div className={cn('flex items-center justify-center gap-x-2 w-[50px] h-[30px] rounded-[136px] shadow-star', className)}>
			<span>{rating}</span>
			<img  width={10} height={10} src={starIcon} alt="Star"/>
		</div>
}