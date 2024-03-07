import {cn} from "../../utils/cn.ts";
import {Product} from '../../types/product.ts'
import {Rating} from "../ui/Rating.tsx";
interface Props extends Product {
	className?: string
}

export const SingleProduct = ({className, price,title,ingredients,image}: Props) => {
	return  <div className={cn('max-w-[800px] flex gap-x-12 w-full', className)}>
		<div className='max-w-[450px] w-full rounded-[18px] overflow-hidden flex-grow'>
			<img src={"/" + image} alt={title} className="w-full h-full object-cover"/>
		</div>
		<div className=' max-w-52 w-full '>
			<div className="flex items-center justify-between gap-x-5 mb-4 pb-4 border-b-[#f1f2f3] border-b-[1px]">
				<span>Цена</span>
				<span className='flex items-center gap-x-1'>{price} <span className='text-[#9796a1] text-sm'>₽</span></span>
			</div>
			<div className="flex items-center justify-between gap-x-5 mb-[22px]">
				<span>Рейтинг</span>
				<Rating rating={4.5}/>
			</div>

			<span className="block font-semibold text-[#5b5b5e] text-sm mb-5">Состав:</span>
			<ul className='space-y-1 text-[#5b5b5e]'>
				{ingredients.map(i => <li className='pl-2 relative before:w-1 before:h-1 before:rounded-full before:bg-[#5b5b5e] before:absolute before:left-0 before:top-[50%] before:translate-y-[-50%]' key={i}>{i}</li>)}
			</ul>
		</div>
	</div>
}
