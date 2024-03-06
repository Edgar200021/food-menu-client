import {cn} from "../../utils/cn.ts";
import {Input} from "../ui/Input.tsx";
import {Button} from "../ui/Button.tsx";
import {FormEvent, useState} from "react";
import { SignUpRequest} from "../../types/SignUp.ts";
import axios from "axios";
import {Collapsible} from "../Collapsible/Collapsible.tsx";
import {useNavigate} from "react-router";

interface Props {
	className?: string
}



export const SignUpForm = ({className}: Props) => {
	const [errors, setErrors] = useState<SignUpRequest>({email: '', name:' ', password: ''})
	const [status, setStatus] = useState<'loading' | 'error' | 'idle'>('idle')
	const onSubmit = async(e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const formData = new FormData(e.target as HTMLFormElement)

		setErrors({email: '', name:' ', password: ''})
		if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(formData!.get("email") as string)) {
			setErrors(prev => ({...prev, email: "Введите корректный email аддресс"}))
			return
		}

		if ((formData.get("password") as string).length < 8) {
			setErrors(prev => ({...prev,  password: "Минимальная длина пароля 8 символов"}))
			return
		}

		try {
			setStatus('loading')
			await axios.post('http://localhost:4000/api/v1/auth/sign-up', Object.fromEntries(formData))
			setStatus('idle')
		} catch (e) {
			console.log(e)
			setStatus('error')
		}
	}


	return <form onSubmit={onSubmit} className={cn('max-w-80 w-full', className)}>
		<fieldset className='border-0 m-0 p-0 ' disabled={status === 'loading'}>
		<div className='mb-[30px]'>
			<span className="block text-[#c4c4c4] mb-[5px] text-[17px] capitalize">Ваш email</span>
			<Input className='mb-1' name='email' placeholder='Email'/>
			<Collapsible collapsed={!!errors.email}>
				<span className='text-red-500'>{errors.email}</span>
			</Collapsible>
		</div>
		<div className='mb-[30px]'>
			<span className="block text-[#c4c4c4] mb-[5px] text-[17px] capitalize">Ваш пароль</span>
			<Input type="password" className='mb-1' name='password' placeholder='Пароль'/>
			<Collapsible collapsed={!!errors.password}>
				<span className='text-red-500'>{errors.password}</span>
			</Collapsible>
		</div>
		<div className='mb-[50px]'>
			<span className="block text-[#c4c4c4] mb-[5px] text-[17px] capitalize">Ваше имя</span>
			<Input className='mb-1' name='name' placeholder='Имя'/>
			<Collapsible collapsed={!!errors.name}>
				<span className='text-red-500'>{errors.name}</span>
			</Collapsible>
		</div>
		<Button  className='mx-auto mb-[30px]' >{status === 'loading' ? "Загрузка"  : "Зарегистрироваться"}</Button>
		<div className='flex flex-col items-center justify-center text-[#5b5b5e] font-semibold  text-sm'>
			<span>Есть акканут?</span>
			<Button disabled={status === 'loading'} to='/' className='text-[#fe724c]' variant='clear'>Войти</Button>
		</div>
		</fieldset>

	</form>
}