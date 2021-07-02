//Object Destructuring
//변수를 함수로 호출하면서 리턴값 받을 때 중괄호하고, 퍼스트 라스트네임 입력해주면 거기서
//퍼스트 라스트네임. 딱 필요한 것만 할당해줌
//진짜 많이 쓰임


function getPerson() {
    return {
        firstName: "John",
        lastName: "Doe",
        age: 37,
        email: "john@gmail.com",
        city: "Jeju-si",
        country: "Republic of Korea"
    };
}

var person = getPerson();
console.log(person.firstName);
console.log(person.lastName);


var {
    firstName,
    lastName
} = getPerson();
console.log(firstName);
console.log(lastName);