import axios from "axios"


export const $http = axios.create({
		withCredentials: true
});

$http.interceptors.response.use(config => config, async (error) => {
	const originalRequest = error.config
	if (error.response.status === 401 && error.config && !error.config._isRetry) {
		originalRequest._isRetry = true
		try {
			 await axios.post('api/v1/auth/refresh', {}, {withCredentials: true})
			return $http.request(originalRequest)
		} catch(e) {
			window.location.replace('/auth/login')
		}
	} else {
		throw error
	}
})