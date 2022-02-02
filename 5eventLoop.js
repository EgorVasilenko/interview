//очередность вызова

setTimeout(() => console.log('timeout'), 0);
process.nextTick(() => console.log('tick'));
console.log('code');
setImmediate(() => console.log('immediate'));
(new Promise((resolve) => { resolve() })).then(() => console.log('promise'));
console.log('2nd code');
