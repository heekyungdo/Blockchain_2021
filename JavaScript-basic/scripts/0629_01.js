//Rest Parameter - 파라미터로 전달받은 데이터가 몇개인 지 모를 때


// function add(x1, x2) {
//     return x1 + x2;
// }

// function add(x1, x2, x3) {
//     return x1 + x2 + x3;
// } //계산기 사용할 땐 사용자가 몇개의 수를 입력할지 몰라



function add(...nums) { //배열로 나와 var add로 선언하는 값과 같게 나와. 첨부분

    var sum = 0;
    for (var n of nums) {
        sum += n;
    }
    return sum;
}

console.log(add(2, 5, 7, 6, 12));



//Node.js - 웹이라는 틀 밖에서 자바스크립트를 해석하고 실행할 수 있게 만든 것.
//node.js로 인해 자바스크립트로 앱, 웹, 키오스크 전부다 만들 수 있음