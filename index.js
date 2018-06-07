const spellArray = []
let buttons = document.querySelector(".delete")
const app = {
  init: function() {
     
    const form = document.querySelector('form')
   
    buttons.addEventListener('click',ev => {
     
      //console.log(spellArray.indexOf(button.value))
      var list = document.querySelector(".spell")
     list.parentNode.removeChild(list)
     
      console.log(spellArray)
      console.log(buttons.value)
      buttons.addEventListener('clicked', spellArray.splice(spellArray.indexOf(buttons.value),1,0))
      console.log(spellArray)
    })
    form.addEventListener('submit', ev => {
      this.handleSubmit(ev)
      
    })
    
 

  },
//level - #
//spellName - "fireball"
  renderProperty: function(name, value) {
    const el = document.createElement('span')
    el.textContent = value
    el.classList.add(name)
    return el
  },

  renderItem: function(spell) {
    // ['name', 'level']
    properties = Object.keys(spell)

    // collect an array of renderProperty's return values
    // (an array of <span> elements)
    const childElements = properties.map(property => {
      return this.renderProperty(property, spell[property])
    })
    const item = document.createElement('li')
    item.classList.add('spell')
    // append each <span> to the <li>
    childElements.forEach(el => {
      item.appendChild(el)
    })

    return item
  },

  handleSubmit: function(ev) {
    ev.preventDefault()

    const f = ev.target

    const spell = {
      name: f.spellName.value,
      level: f.level.value,

    }

    const item = this.renderItem(spell)
    

    const list = document.querySelector('#spells')

    const button = document.createElement("button")
    button.classList.add("delete")
    //button.type=node
    button.appendChild(document.createTextNode(f.spellName.value + " delete"))
    button.value= f.spellName.value
    buttons.value = button.value
    spellArray.push(button.value)
    
    
    list.appendChild(item) 
    list.appendChild(button)
   //console.log(spellArray) 
   console.log(spellArray.indexOf(button.value)) 
    f.reset()
  },
  
  
}


app.init()
