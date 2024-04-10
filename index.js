const btn = document.getElementById('button')
const btnDiv = document.getElementById('button-area')
const title = document.getElementById('title')

const direction = ['buttonUp', 'buttonDown', 'buttonLeft', 'buttonRight', 'buttonDiagonal', 'buttonDiagonal2', 'buttonDiagonal3', 'buttonDiagonal4']

btnDiv.addEventListener('mouseenter', (ev) => {
  move()
})

btnDiv.addEventListener('mousemove', (ev) => {
  move()
})

btnDiv.addEventListener('mouseleave', (ev) => {
  move()
})


btn.addEventListener('mouseenter', (ev) => {
  move()
})
btn.addEventListener('mouseleave', (ev) => {
  move()

})



btn.addEventListener('click', (ev) => {
  btn.innerText = 'Você me pegou :('
  btn.classList.remove('button')
  btn.classList.add('btnClicked')
  title.innerText = 'Você conseguiu!'
})

function move() {
  const randomIndex = Math.floor(Math.random() * direction.length);
  const move = direction[randomIndex]
  btn.classList.toggle(move)
  btnDiv.classList.toggle(move)
}

// function remove(){
//   btn.classList.remove(btn.classList)
//   btnDiv.classList.remove(btnDiv.classList)
// }