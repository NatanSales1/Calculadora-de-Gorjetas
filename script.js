function calcTip(event) {
  event.preventDefault()
  let cost = document.getElementById('cost').value
  let serviceQuality = document.getElementById('serviceQuality').value
  let numPeople = document.getElementById('inputPeople').value

  if ((numPeople == '') | (numPeople <= 1)) {
    numPeople = 1
    document.getElementById('each').style.display = 'none'
  } else {
    document.getElementById('each').style.display = 'block'
  }

  let total = (cost * serviceQuality) / numPeople
  total = total.toFixed(2)
  document.getElementById('tip').innerHTML = total
  document.getElementById('totalTip').style.display = 'block'
}

document.getElementById('totalTip').style.display = 'none'
document.getElementById('each').style.display = 'none'

document.getElementById('tipForm').addEventListener('submit', calcTip)
