import {useFetchProducts} from "../../hooks/useFetchProducts.tsx";
import {cn} from "../../utils/cn.ts";
import {Product} from "../Product/Product.tsx";

interface Props {
	className?: string
}


export const ProductList = ({className}: Props) => {
	const {data,  status} = useFetchProducts()


	if (status === "loading") return <h1>Loading...</h1>
	return <ul className={cn('grid grid-cols-productList gap-x-[45px] gap-y-[34px]', className)}>
		{data.map(product => <Product {...product} />)}
	</ul>
}