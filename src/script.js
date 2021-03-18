const form2 = {
  year: generateArrayOfYears(),
  month: generateArrayOfMonths(),
  day: generateArrayOfDays(),
  gender: ['male', 'female'],
  course: ['java', 'javascript', 'ruby', 'php', 'c#'],
  cityAndState: [
    { lietuva: ['kaunas', 'vilnius', 'klaipeda'] },
    { latvija: ['vienas', 'du', 'trys'] },
    { estija: ['1', '2', '3', '4'] },
  ],
}

function getCities() {
  var cities = []
  for (let c of Object.keys(form2.cityAndState)) {
    var cityStateObject = form2.cityAndState[c]
    cities.push(Object.keys(cityStateObject))
  }
  return cities
}
const setData = (data, id) => {
  let select = document.getElementById(id)
  let option = document.createElement('option')
  console.log('id:' + id)
  select.name = 'option'
  let j
  select.innerHTML = ''
  for (j = 0; j < data.length; j++) {
    option.innerText = data[j]
    option.value = j
    select.append(option.cloneNode(true))
  }
}

export const initializeData = () => {
  for (const obj of Object.keys(form2)) {
    if (obj != 'cityAndState') {
      console.log(form2[obj], obj)
      setData(form2[obj], obj)
    } else {
      setData(getCities(), 'city')
    }
  }
}

function generateArrayOfDays(year = new Date().getFullYear(), month = 0) {
  var date = new Date(year, month, 1)
  var days = []
  var j = 1
  while (date.getMonth() === month) {
    days.push(j++)
    date.setDate(date.getDate() + 1)
  }
  return days
}

function generateArrayOfMonths() {
  const month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  return month
}

function generateArrayOfYears(length = 20) {
  var max = new Date().getFullYear()
  var min = max - length
  var years = []
  for (var i = max; i >= min; i--) {
    years.push(i)
  }
  return years
}
function validateEmail(email) {
  var re = /\S+@\S+\.\S+/
  if (!re.test(email)) {
    document.getElementById('email-error').innerHTML =
      'Enter a correct email (xxx@xxx.xxx)'

    document.getElementById('email').style.borderColor = 'red'
  } else {
    document.getElementById('email').style.borderColor = 'green'
    document.getElementById('email' + '-error').innerHTML = ''
  }

  return re.test(email)
}

function validatePhoneNumber(number, id) {
  {
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
    if (number.match(phoneno)) {
      document.getElementById(id).style.borderColor = 'green'
      document.getElementById(id + '-error').innerHTML = ''
      return true
    } else {
      document.getElementById(id + '-error').innerHTML =
        'Enter a correct number (000) 000-0000'

      document.getElementById(id).style.borderColor = 'red'
      return false
    }
  }
}

export function updateDays() {
  var month = document.getElementById('month')
  var years = document.getElementById('year')
  var yearsVal = years.options[years.selectedIndex].text
  form2.day = generateArrayOfDays(parseInt(yearsVal), parseInt(month.value))
  setData(form2.day, 'day')
}
export function updateStates() {
  var cities = document.getElementById('city')
  var citiesVal = cities.options[cities.selectedIndex].value
  let states = Object.values(form2.cityAndState[citiesVal])
  for (var s of states) {
    setData(s, 'state')
  }
}

function validateFormOnSubmit(contact) {
  console.log(contact)
}

console.log(document.getElementById('year'))
//initializeData()
export default initializeData
