console.log('Hello world')


// git config --global user.name "kridthin"
// git config --global user.email "kridthin@gmail.com"

var ii = 0
var x = setInterval(function() {
    console.log('Hello')
    ii++
    if (ii === 3) {
        clearInterval(x)
    }
}, 1000)


var id = 3
var name = 'Kridthin'
var ok = true
var name2 = `somsak id=${id}` 

var student = {
    code: '001',
    name: 'somsak',
}
student.age = 25
student['age'] = 25
delete student.age
console.log(student.code)
console.log(student['code'])
console.log(student.age)

// console.log(student[code])


var oldArray = new Array()
var newArray = []

// var list = ['aaa', 'bbb', {id: 1}, ['code1']]
var list = ['a', 'b', 'c', 'd', 'e', 'f']
var len = list.length
console.log(len)
list.splice(2, 1, 'E')
console.log(list)

for (var i = 0 ; i < list.length ; i++) {
    console.log(i)
}


var text = JSON.stringify(student)
var student2 = JSON.parse(text)

console.log(text)
console.log(student2)

var student3 = student2
student3.id = 3
console.log(student3)
console.log(student2)
console.log(student)

var student4 = JSON.parse(JSON.stringify(student3))
student4.id = 4 
console.log(student4)
console.log(student3)
console.log(student2)
console.log(student)


/* 
<?php
    $name = 'Kridthin'
    $fullname = "Mr $name"   // can show variable 
    $fullname2 = 'Mr $name'  // cannot show variable 

    $student = Array(
        'code' => '001',
        'name' => 'Somsak',
    );

    $student['age'] = 25
    echo $student['code']
    unset $student['code']
?>

*/


