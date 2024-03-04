import {cn} from "../../utils/cn.ts";
import {SignUpForm} from "../../components/forms/SignUpForm.tsx";


interface Props{
	className?: string
}
export const SignUpPage = ({className}: Props) => {


	return <section className={cn('', className)}>
		<h1 className='font-semibold text-4xl mb-[30px]'>Регистрация</h1>
		<SignUpForm/>
	</section>
}