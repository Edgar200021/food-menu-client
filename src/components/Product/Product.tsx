import {cn} from "../../utils/cn.ts";
import {Product as IProduct} from "../../types/product.ts";

import addToCartIcon from '../../assets/icons/addToCart.svg'
import {Button} from "../ui/Button.tsx";
import {Link} from "react-router-dom";
interface Props  extends IProduct {
	className?: string
}


export const Product = ({className,price,title,ingredients,image, id}: Props) => {



	return <article className={cn('grid  w-full grid-rows-[320px,min-content,min-content] cursor-pointer pb-5 rounded-[18px] shadow-product relative ', className)}>
		<Link className='absolute w-full h-full top-0 left-0 z-10' to={`/menu/${id}`}/>
		<div className='mb-5 rounded-[18px] overflow-hidden relative'>
			<img className='w-full h-full object-cover ' src={image} alt={title}/>
			<span className='absolute top-4 left-[30px] w-20 h-[31px] flex items-center gap-x-1 justify-center bg-white shadow-md rounded-[121px]'>
					{price}
				<span className='text-[#FE724C]'>₽</span>
			</span>

			<Button className='absolute top-[14px] rounded-full right-3 w-[34px] h-[34px] flex items-center justify-center bg-primary z-20' variant='clear'>
				<img className='w-4 h-4' src={addToCartIcon} alt="Add to cart"/>
			</Button>
		</div>
		<span className='text-2xl font-semibold block mb-[10px] pl-3'>{title}</span>
		<span className='text-[#5b5b5e] capitalize text-xl pl-3'>{ingredients.join(',')}</span>
	</article>
}