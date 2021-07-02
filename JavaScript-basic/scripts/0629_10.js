//Array Destructuring


function getScores() {
    return [70, 21, 100];
}

var [x, y, ...args] = getScores();
console.log(x);
console.log(y);
// console.log(z);
scores[0];
scores[1];
scores[2];


function getPerson() {
    return [
        "John",
        "Doe",
        ["Red", "Blue", "Yellow"]
    ];
} //배열형태로 리턴

var [firstName, lastName, [color1, color2, color3]] = getPerson();
console.log(color1);

//컬러를 한꺼번에 가져오려면
var [firstName, lastName, favoriteColors] = getPerson();
console.log(color1);








function getCoordinate() {
    return [12.2222, 45, 3333];
}
//[경도, 위도];
var coodinate = getCoordinates(); // 배열로 옴. [경도, 위도]
coodinates[0]; //경도
coodinates[1]; //위도

var [longititue, lattitude] = getCoordinates(); // 배열로 옴. [경도, 위도]
coodinates[0]; //경도
coodinates[1]; //위도