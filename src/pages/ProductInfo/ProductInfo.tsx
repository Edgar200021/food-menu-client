import {cn} from "../../utils/cn.ts";
import {useParams} from "react-router";
import {Button} from "../../components/ui/Button.tsx";
import {useFetchProduct} from "../../hooks/useFetchProduct.tsx";

import addToCartIcon from '../../assets/icons/addToCart.svg'
import {SingleProduct} from "../../components/SingleProduct/SingleProduct.tsx";
interface Props {
	className?: string
}


export const ProductInfoPage = ({className}: Props) => {
	const {id} = useParams()
	const {data, status} = useFetchProduct(Number(id))

	if (status === 'loading' || !data) return <h1>Loading...</h1>

	return <main className={cn('w-full', className)}>
			<div className='flex items-center justify-between mb-10'>
				<div className='flex items-center gap-x-9'>
					<Button className='w-[38px] h-[38px] text-2xl flex items-center justify-center bg-white shadow-md rounded-xl' variant='clear'>
						&#8249;
					</Button>
					<h1 className='font-semibold text-4xl'>{data?.title}</h1>
				</div>
				<Button className='gap-x-[14px]'>
					<img src={addToCartIcon} alt="Add to cart"/>
					<span>В корзину</span>
				</Button>
			</div>
			<SingleProduct {...data!} />
	</main>
}