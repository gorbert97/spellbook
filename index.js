const form = document.querySelector('form')

const changeHeading = function(ev) {
  ev.preventDefault()

  const f = ev.target
  const spellName = f.spellName.value
  const spellLevel = f.spellLevel.value
  const spellDamage = f.spellDamage.value

  const list = document.createElement("LI")
  
  const spanName = document.createElement('span');
  spanName.style.color = "blue";
const name = document.createTextNode(spellName)
const level = document.createTextNode(" level " + spellLevel + " ")
const damage = document.createTextNode(spellDamage)
const spanDamage = document.createElement('span');
spanDamage.style.color = "red";

spanName.appendChild(name);
spanDamage.appendChild(damage);
  list.appendChild(spanName) 
  list.appendChild(level) 
  list.appendChild(spanDamage) 
  document.querySelector("#spells").appendChild(list)
  f.reset()
}



form.addEventListener('submit', changeHeading)