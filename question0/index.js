const num = window.prompt('入力してください。')
for (let n = 1; n <= num; n++) {
  if (n % 3 === 0) {
    console.log(`Fizz`)
  } else if (n % 5 === 0) {
    console.log(`Buzz`)
  } else {
    console.log(`${n}`)
  }
}