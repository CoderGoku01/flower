const submitBtn = document.getElementById('submitBtn')
const input = document.querySelectorAll('input')

console.log(input)

submitBtn.addEventListener("click", () => {
  input.forEach(item => {
    console.log(item.value)
  })
  // if (4) {
  //   //alert("fill the form completly...")
  // }
  alert("Thanks for your message...")
})