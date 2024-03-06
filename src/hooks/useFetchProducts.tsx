import {useEffect, useState} from "react";
import {Product} from "../types/product.ts";
import {$http} from "../api/base.ts";

export const useFetchProducts = (title?: string) => {
	const [data, setData] = useState<Product[]>([])
	const [status, setStatus] = useState<"idle" | "error" | "loading">("idle")


	useEffect(() => {
		(async () => {
			try {
				setStatus("loading")
				const {data} = await $http.get<Product[]>(`/products${title ? `?title=${title}` : ""}`)
				setData(data)
				setStatus("idle")
			} catch (err) {
					setStatus("error")
			}
		})()

	}, [title]);

	return {data, status}

}