// JavaScript strings
// A string is an immutable sequence of UTF-16 code units used to represent text.

// Creating strings
const single = 'Hello';
const double = "JavaScript";
const template = `Hello, ${double}!`; // Template literals support interpolation.
const converted = String(42); // Prefer String(value) over new String(value).
const escaped = 'Quote: \' and newline:\n';
const multiline = `First line
Second line`;

// Length, access, and iteration
const text = 'JavaScript';
console.log(text.length); // UTF-16 code units; not necessarily visible characters.
console.log(text[0], text.charAt(1), text.at(-1));
console.log(text.charCodeAt(0), text.codePointAt(0));// Strings are iterable, so we can use for..of to iterate over characters.
console.log([...text]); // Spread operator to convert string to array of characters.
for (const character of text) console.log(character);

// Search and test
console.log(text.includes('Script'));
console.log(text.startsWith('Java'), text.endsWith('Script'));
console.log(text.indexOf('a'), text.lastIndexOf('a'));
console.log(text.search(/script/i));
console.log(/Java/.test(text), text.match(/a/g));

// Extract portions
console.log(text.slice(0, 4)); // Also supports negative indexes.
console.log(text.substring(0, 4));
console.log(text.substr(4, 6)); // Legacy; use slice() in new code.

// Transform strings (these return new strings; strings are immutable)
const padded = '  hello  ';
console.log(padded.toUpperCase(), padded.toLowerCase());
console.log(padded.trim(), padded.trimStart(), padded.trimEnd());
console.log('7'.padStart(3, '0'), 'hi'.padEnd(5, '.'));
console.log('ha'.repeat(3));
console.log('red red'.replace('red', 'blue')); // Replaces first match.
console.log('red red'.replaceAll('red', 'blue'));
console.log('one,two'.replace(/,/g, ' | '));

// Split and combine
const fruits = 'apples,oranges,pears'.split(',');
console.log(fruits, fruits.join(' / '));

// Compare, normalize, and convert
console.log('apple' === 'apple'); // Value comparison
console.log('é'.normalize('NFC') === 'e\u0301'.normalize('NFC'));
console.log('a'.localeCompare('b'));
console.log(String(true), (123.45).toString());
console.log(JSON.stringify({ message: 'hello' }));
