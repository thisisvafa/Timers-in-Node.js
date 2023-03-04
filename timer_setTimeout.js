// The above function myFunc() will execute as close to 1500 milliseconds (or 1.5 seconds) as possible due to the call of setTimeout().
function myFunc(arg) {
  console.log(`arg was => ${arg}`);
}

setTimeout(myFunc, 1500, 'funky');