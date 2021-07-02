//Object Literal Syntax Extension


//위에 정의한 내용은 값으로 할당된다

var firstName = "John";
var lastName = "Doe";
// 키값이 존으로 들어옴    ->person[firstname]
var person = {
    firstName: firstName, //:뒤 firstName는 값으로 할당된다.
    lastName: lastName
}


//할당된 이름을 키값으로 바꿔줘???

//person[fir]

var type = "student";
var score = {
    [type]: "John Doe",
    //student:"John Doe",
    score: 95
};


score.student
score["student"]
score[type]
// 세개다 같은 말