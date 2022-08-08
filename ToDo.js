const formEl = document.querySelector('.form')
const inputEl = document.querySelector('.input')
formEl.addEventListener('submit',(event)=>{
  event.preventDefault();
  toDoList()
})

function toDoList(){
  let newTask = inputEl.value
  const li = document.createElement('li')
  const div= document.createElement('div')
  const check= document.createElement('i')
  check.className ='fa fa-check-square'
  const trashcan= document.createElement('i')
  trashcan.className ='fa fa-trash'
  li.innerHTML = newTask
  li.append(check)
  li.append(trashcan)
  document.querySelector('.list').appendChild(li)
  inputEl.value = ''
  check.addEventListener('click', ()=>{
    li.classList.toggle('checked')
  })
  trashcan.addEventListener('click', ()=>{
    li.classList.toggle('removed')
  })
}

/*let counter = 0
let array = []
document.querySelector('#save').addEventListener('click', listItem)
document.querySelector('#important').addEventListener('click', important)

function listItem(){
  counter++
  let item = document.querySelector('input').value
  array.push(item)
  let li = document.createElement('li')
  li.innerText = `${counter}. ${array[array.length-1]}`
  li.style.listStyle = 'none'
  document.querySelector('ul').append(li)
}
function important(){
  counter++
  li.innerText = ''
  array.unshift(item)
}*/