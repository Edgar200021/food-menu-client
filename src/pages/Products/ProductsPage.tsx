import {cn} from "../../utils/cn.ts";
import {Search} from "../../components/Search/Search.tsx";
import {ProductList} from "../../components/ProductList/ProductList.tsx";

interface Props {
	className?: string
}


export const ProductsPage = ({className}: Props) => {

	return <main className={cn('', className)}>
		<div className="flex items-center justify-between gap-x-4 mb-[30px]">
			<h1 className='font-semibold text-4xl '>Меню</h1>
			<Search queryKey={"title"}/>
		</div>
		<ProductList/>

	</main>
}