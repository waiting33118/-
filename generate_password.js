function generateSingleNum(collection) {
	const index = Math.floor(Math.random() * collection.length)
	return collection[index]
}

function generatePassword(options) {
	const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
	const upperCaseLetters = lowerCaseLetters.toUpperCase()
	const numbers = '1234567890'
	const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'

	let collection = []
	if (options.lowercase === 'on') {
		collection.push(...lowerCaseLetters)
	}
	if (options.uppercase === 'on') {
		collection.push(...upperCaseLetters)
	}
	if (options.numbers === 'on') {
		collection.push(...numbers)
	}
	if (options.symbols === 'on') {
		collection.push(...symbols)
	}
	if (options.excludeCharacters) {
		collection = collection.filter(
			(char) => !options.excludeCharacters.includes(char)
		)
	}

	if (collection.length === 0) {
		return '請 1)勾選選項 2)檢查排除字元是否衝突'
	}

	//根據字串長度連續抽出
	let password = ''
	for (let i = 1; i <= options.length; i++) {
		password += generateSingleNum(collection)
	}
	return password
}

module.exports = generatePassword
