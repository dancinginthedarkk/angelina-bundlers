import './style.css'
import Cat from './assests/cat.png'
import './hello.js'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Hello Vite!</h1>
    <img src="${Cat}" class="cat" alt="cat" />
  </div>
`
