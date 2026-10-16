// REGEX

/**
. = any character
[0-9] = verify has any char between 0 and 9
[a-Z] = verify has any char between a and Z (lowercase and uppercase) 
[abc] = any of a, b or c
[^abc] = not a, b or c

\d = any digit
\D = no digit

\w = any word
\W = no word

\s = any space
\S = no space

\b = boundary (for words)
\B = no boundary (for words)

^ = start with (just for entire line)
$ = end with (just for entire line)


* = 0 or more
+ = 1 or more
? = 0 or 1
a{2} = has 2 a

() = group


flags:
i = incase sensitive
g = global
m = multiline

 */

const text = `That is a string with text that i'll use for do some regex and see what will be returned
  - NOW - BEFORE - FUTURE - that is a phone number: 9948 1153"`;

const phone = /\d+\s*\d*/gim.exec(text)[0];

const phone2 = text.match(/\d+\s*\d*/gim)[0];

const hasNow = text.includes(" - NOW - ");
const beforeSearch = text.search(/before/gim);

const splited = text.split("\n");

const uppercases = text.match(/-\s*(\w+)\s*-/g);

console.log({
  phone,
  phone2,
  hasNow,
  beforeSearch,
  uppercases,
});
