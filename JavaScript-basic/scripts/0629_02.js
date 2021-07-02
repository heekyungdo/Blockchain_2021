//함수 선언식
function add() {


}

//함수 표현식
var add = function () {

};


var add = function (x1, x2) {
    return x1 + x2;
};

//Arrow Function - 화살표 함수 - 코드 수가 줄어들어

var add = (x1, x2) => {
    return x1 + x2
};
var add = (x1, x2) => x1 + x2; //한줄일땐 {}와 return 삭제 가능 (원래는 필요하나 한줄일때만 생략가능!)
// function 삭제 (파라미터) => {코드블록};
//function 삭제 (파라미터) => {}삭제, return글 삭제, return 값과 세미클론 적어




var add2 = function (x1, x2) {
    var sum = x1 + x2;
    return sum;
};
var add2 = (x1, x2) => {
    var sum = x1 + x2;
    return sum;
};
//function 삭제 (파라미터) => {};




function say(message) {

}
var say = message => {};




function myFunction() {

}
var myFuncion = () => {};