console.log('testing')
const button = document.querySelector('#button')
const buttonTextBox = document.querySelector('#f')

const content = function(){
    const heading2 =document.querySelector('#daily')
    heading2.textContent = 'spells learned today'

    const heading = document.querySelector('h1')
    heading.textContent = 'Obsidian\'s spellbook'
}

const content2 = function(){
    const heading =document.querySelector("h1")
    heading.textContent = head1.value
   
    const heading2 =document.querySelector("h2")
    heading2.textContent = head2.value
}

button.addEventListener('click',content)

buttonTextBox.addEventListener('click',content2)
buttonTextBox.addEventListener('ctrlKey',content2)
