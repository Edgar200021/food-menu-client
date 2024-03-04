import {cn} from "../../utils/cn.ts";
import {SignUpForm} from "../../components/forms/SignUpForm.tsx";
import {SignInForm} from "../../components/forms/SignInForm.tsx";


interface Props{
	className?: string
}
export const SignInPage = ({className}: Props) => {

	return <section className={cn('', className)}>
		<h1 className='font-semibold text-4xl mb-[30px]'>Вход</h1>
		<SignInForm/>
	</section>
}