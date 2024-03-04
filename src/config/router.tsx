import {createBrowserRouter} from "react-router-dom"
import {AuthLayout} from "../layouts/AuthLayout.tsx";
import {SignUpPage} from "../pages/SignUp/SignUpPage.tsx";
import {SignInPage} from "../pages/SignIn/SignInPage.tsx";

export const router = createBrowserRouter([
	{
		element: <AuthLayout/>,
		children: [{
			element: <SignUpPage className='grow'/>,
			path: "/auth/sign-up"
		},
			{
				element: <SignInPage className='grow'/>,
				path: "/auth/sign-in"
			},

		]
	}
])