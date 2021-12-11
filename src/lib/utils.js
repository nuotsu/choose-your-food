export function getRandom(arr) {
	return arr[Math.floor(Math.random() * arr.length)]
}

export function getRandomDistance(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min
}
