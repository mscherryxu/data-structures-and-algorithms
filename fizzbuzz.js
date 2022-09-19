// function counts from 1 to num
// if number is divisible by 3, console log "Fizz"
// if number is divisible by 5, console log "Buzz"
// if number is divisible by 3 and 5, console log "FizzBuzz"

function fizzBuzz(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 15 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
