import {createBrowserRouter} from "react-router-dom"
import {AuthLayout} from "../layouts/AuthLayout.tsx";
import {SignUpPage} from "../pages/SignUp/SignUpPage.tsx";
import {SignInPage} from "../pages/SignIn/SignInPage.tsx";
import {AppLayout} from "../layouts/AppLayout.tsx";
import {Protected} from "../pages/Protected/Protected.tsx";
import {ProductsPage} from "../pages/Products/ProductsPage.tsx";
import {ProductInfoPage} from "../pages/ProductInfo/ProductInfo.tsx";

export const router = createBrowserRouter([
	{
		element: <AuthLayout/>,
		path: "/",
		children: [{
			element: <SignUpPage className='grow'/>,
			path: "/auth/sign-up",
		},
			{
				element: <SignInPage className='grow'/>,
				index: true
			},

		]
	},
	{
		element: <Protected>
			<AppLayout/>
		</Protected>,
		path: "/menu",
		children: [
				{
			element: <ProductsPage className='pl-80 pr-16 py-10'/>,
			index: true
		},
			{
				element: <ProductInfoPage className='pl-80 pr-16 py-10'/>,
				path: ":id"
			}
		]
	}
])