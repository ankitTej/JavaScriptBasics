const word = "elephant";
const char1 = {};// Initialize an empty object to store character counts

for (const char of word) {
	// Read the current count; use 0 when this character is not yet in the object,
	// then add 1 and save the updated count for that character.
	char1[char] = (char1[char] || 0) + 1;
}

console.log(char1);

