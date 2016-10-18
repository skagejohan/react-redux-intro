const messageParts = ['Hello', 'world'];
const message = messageParts.reduce((prev, curr) => `${prev} ${curr}`, '');

console.log(message);
