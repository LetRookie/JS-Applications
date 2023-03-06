console.log('before');

setTimeout(callback, 2000);

console.log('after');

function callback() {

    console.log('inside callback');
}