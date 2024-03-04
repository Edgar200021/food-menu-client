import {cn} from "../../utils/cn.ts";
import {Input} from "../ui/Input.tsx";
import {Button} from "../ui/Button.tsx";
import {FormEvent, useState} from "react";
import axios from "axios";
import {SignUpRequest} from "../../types/SignUp.ts";
import {User} from "../../types/user.ts";
import {useUser} from "../../context/UserContext.tsx";

interface Props {
	className?: string
}



export const SignInForm = ({className}: Props) => {
	const [status, setStatus] = useState<'loading' | 'error' | 'idle'>('idle')
	const {setUser} = useUser()

	const onSubmit = async(e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const formData = new FormData(e.target as HTMLFormElement)


		try {
			setStatus('loading')
			const {data} = await axios.post<User>('http://localhost:4000/api/v1/auth/login', Object.fromEntries(formData), {withCredentials: true})
			setUser(data)
			console.log(data)
			setStatus('idle')
		} catch (e) {
			console.log(e)
			setStatus('error')
		}
	}


	return <form onSubmit={onSubmit} className={cn('max-w-80 w-full', className)}>
		<div className='mb-[30px]'>
			<span className="block text-[#c4c4c4] mb-[5px] text-[17px] capitalize">Ваш email</span>
			<Input className='mb-1' name='email' placeholder='Email'/>

		</div>
		<div className='mb-[30px]'>
			<span className="block text-[#c4c4c4] mb-[5px] text-[17px] capitalize">Ваш пароль</span>
			<Input className='mb-1' name='password' placeholder='Пароль'/>
		</div>

		<Button className='mx-auto mb-[30px]' >Вход</Button>
		<div className='flex flex-col items-center justify-center text-[#5b5b5e] font-semibold  text-sm'>
			<span>Нет акканута?</span>
			<Button to='/auth/sign-up' className='text-[#fe724c]' variant='clear'>{status === 'loading' ? 'Загрузка' : 'Зарегистрироваться'}</Button>
		</div>
	</form>
}