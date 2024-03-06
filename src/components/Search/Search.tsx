import {Input} from "../ui/Input.tsx";
import {cn} from "../../utils/cn.ts";
import {ComponentProps, useEffect, useState} from "react";
import {useDebounce} from "../../hooks/useDebounce.ts";

import searchIcon from '../../assets/icons/search.svg'
import {useSearchParams} from "react-router-dom";

interface Props extends ComponentProps<"input"> {
	className?: string
	queryKey: string
}
export const Search = ({className, queryKey, ...otherProps}: Props) => {
	const [value, setValue] = useState("")
	const debouncedValue = useDebounce(value)
	const [searchParams, setSearchParams] = useSearchParams()

	useEffect(() => {
		if (debouncedValue == "") {
			searchParams.delete(queryKey)
			setSearchParams(searchParams)
		} else {
			searchParams.set(queryKey, debouncedValue)
			setSearchParams(searchParams)
		}
	}, [debouncedValue]);

	return <label className={cn('max-w-[256px] w-full cursor-pointer px-[18px] py-4 flex items-center gap-x-[14px] bg-[#fcfcfd] rounded-[10px] border-[1px] border-[#efefef]', className)}>
		<img src={searchIcon} alt="Search"/>
		<Input  variant='clear'  placeholder="Введите блюдо или состав" value={value} onChange={e => setValue(e.target.value)} {...otherProps}/>
	</label>
}