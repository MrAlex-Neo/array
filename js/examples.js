let name = prompt('Ваше имя:')
let age = +prompt('Укажите ваш возраст:')
let students = [
        ['Арслан', 21],
        ['Максим', 35],
        ['Артем', 33],
    ]
students.push([name, age])
console.log(students)
alert(`${name} ${age}`)
