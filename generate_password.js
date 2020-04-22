function generatePassword() {
	const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
	const upperCaseLetters = lowerCaseLetters.toUpperCase()
	const number = '1234567890'
	const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'

	const options = {
		length: 12,
		lowercase: 'on',
		uppercase: 'on',
		number: 'on',
		excludeCharacters: '40',
	}

	let collection = []

	if (options.lowercase === 'on') {
		collection.push(...lowerCaseLetters)
	}
	if (options.uppercase === 'on') {
		collection.push(...upperCaseLetters)
	}
	if (options.number === 'on') {
		collection.push(...number)
	}
	if (options.symbols === 'on') {
		collection.push(...symbols)
	}

	if (options.excludeCharacters) {
		collection = collection.filter(
			(char) => !options.excludeCharacters.includes(char)
		)
	}

	console.log(collection)

	console.log('This function will generate password')
}

generatePassword()
