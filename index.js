const createBtn = document.getElementById('create-btn')
const placConstructor = document.getElementById("Constructor")
const placResult = document.getElementById('Result')
const selection = document.getElementById("select-container")
const inputPlac = document.getElementById("inputPlac")
let dropEl = null;

selection.addEventListener('change', () => {
      if (selection.value === 'div' || selection.value === 'input') {
            inputPlac.style.display = 'none'
      } else {
            inputPlac.style.display = 'block'
      }

})

createBtn.addEventListener('click', () => {
      if (selection.value === 'div') {
            const div = document.createElement('div');
            placConstructor.appendChild(div)
            div.className = 'newDiv'
            div.innerText = '<Div>'
            div.addEventListener('click', dragElement)
      }

      if (selection.value === 'h1') {
            if (inputPlac.value === "") {
                  alert('Ups!!! Input No Text')
            } else {
                  const h1 = document.createElement('h1');
                  h1.className = 'newH1'
                  h1.innerText = inputPlac.value
                  placConstructor.appendChild(h1)
                  h1.draggable = 'true';
                  h1.addEventListener('click', dragElement)
            }
      }

      if (selection.value === 'span') {
            if (inputPlac.value === "") {
                  alert('Ups!!! Input No Text')
            } else {
                  const span = document.createElement('span');
                  span.className = 'newSpan'
                  span.innerText = inputPlac.value
                  placConstructor.appendChild(span)
                  span.innerText = 'span'
                  span.draggable = 'true';
                  span.addEventListener('click', dragElement)
            }
      }

      if (selection.value === 'input') {
            const input = document.createElement('input');
            input.className = 'newInput'
            placConstructor.appendChild(input)
            input.placeholder = 'Input tag'
            input.draggable = 'true';
            input.addEventListener('click', dragElement)
            input.addEventListener('click', () => {
                  alert('DIV can not appended to INPUT element')
            })
      }

      if (selection.value === 'p') {
            if (inputPlac.value === "") {
                  alert('Ups!!! Input No Text')
            } else {
                  const paragraf = document.createElement('p');
                  paragraf.className = 'newParagraf'
                  paragraf.innerText = inputPlac.value
                  placConstructor.appendChild(paragraf)
                  paragraf.innerText = 'p'
                  paragraf.draggable = 'true';
                  paragraf.addEventListener('click', dragElement)
            }
      }
})

function dragElement(event) {
      dragEl = event.target;
}

placResult.addEventListener('click', (event) => {
      event.target.appendChild(dragEl)
      dragEl.removeEventListener('click', dragElement)
      if (event.target.tagName === 'DIV') {
            event.target.appendChild(dragEl)
      } else {
            alert('error')
            dragEl.remove()
      }
})
