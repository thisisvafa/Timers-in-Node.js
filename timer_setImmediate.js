// setImmediate() returns an Immediate object, which can be used to cancel the scheduled immediate (see clearImmediate() below).
console.log('before immediate');

setImmediate((arg) => {
  console.log(`executing immediate: ${arg}`);
}, 'so immediate');

console.log('after immediate');