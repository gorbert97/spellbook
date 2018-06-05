const form = document.querySelector('form')
function SpanName(spellName){
  const spanName = document.createElement('span')
  spanName.style.color = "blue"
  const name = document.createTextNode(spellName)
  spanName.appendChild(name)
  return spanName
}
function SpanLevel(spellLevel){
 // const level = document.createTextNode(" level " + spellLevel + " ")
  const spanLevel = document.createElement('span')
  spanLevel.style.color = "purple"
  const level = document.createTextNode(" level "+ spellLevel+ " ")
  spanLevel.appendChild(level)
  return spanLevel
}
function SpanDamage(spellDamage){
  const spanDamage = document.createElement('span');
spanDamage.style.color = "red";
const damage = document.createTextNode(spellDamage)
spanDamage.appendChild(damage);
return spanDamage
}
function ulist(spanName,level,spanDamage){
  const list = document.createElement("LI")
  list.appendChild(spanName) 
  list.appendChild(level) 
  list.appendChild(spanDamage) 
  document.querySelector("#spells").appendChild(list)
}
const changeHeading = function(ev) {
  ev.preventDefault()
  const f = ev.target
  const spellName = f.spellName.value
  const spellLevel = f.spellLevel.value
  const spellDamage = f.spellDamage.value
const name =SpanName(spellName)
const lvl =SpanLevel(spellLevel)
const dmg = SpanDamage(spellDamage)
ulist(name,lvl,dmg)
  f.reset()
}
form.addEventListener('submit', changeHeading)