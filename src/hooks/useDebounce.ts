import {useEffect, useState} from "react";

export const useDebounce = <T>(value: T, delay: number = 1000) => {
		const [debouncedValue, setDebouncedValue] = useState<T>(value)

	useEffect(()=>{
		const timerId = setTimeout(() => setDebouncedValue(value),delay)

		return () => clearTimeout(timerId)
	}, [value]);

	return debouncedValue
}