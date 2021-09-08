document.querySelector('[data-action="decrement"]').addEventListener('click', () => {
  let count = productCounter.decrement(1)
  document.getElementById('value').textContent = count
})

document.querySelector('[data-action="increment"]').addEventListener('click', () => {
  let count = productCounter.increment(1)
  document.getElementById('value').textContent = count
})

const productCounter = createCounter()
function createCounter() {
    let counterValue = 0
    
  function increment(value) {
    return (counterValue += value)
  }

  function decrement(value) {
   
    if (counterValue > 0) { return (counterValue -= value) }
      else {return counterValue = 0}
    }
 
  return { increment, decrement }
}