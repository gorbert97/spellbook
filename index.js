const form = document.querySelector('form')

const changeHeading = function(ev) {
  ev.preventDefault()

  const f = ev.target
  const spellName = f.spellName.value
  const spellLevel = f.spellLevel.value
  const spellDamage = f.spellDamage.value

const list = document.createElement("LI")
const text = document.createTextNode(spellName + " level " + spellLevel + " "  + spellDamage)
  list.appendChild(text)     
  document.querySelector("#spells").appendChild(list)
  f.reset()
}

form.addEventListener('submit', changeHeading)