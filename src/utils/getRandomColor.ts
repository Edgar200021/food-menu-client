export const getRandomNumber = (min: number = 0, max: number = 255)  :number => {
	return Math.random() * (max - min) + min
}



export const getRandomColor = (opacity: number = 1) => {
	return `rgba(${getRandomNumber(1)},${getRandomNumber(1)},${getRandomNumber(1)},${opacity})`
}