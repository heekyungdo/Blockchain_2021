/**
 * 
 * @param {*} users 
 * @param {*} keyAge 
 * @returns 
 */
function getAgeGroup(users, keyAge) {
    let userAgeGroup = {};

    // users => userList = [ {0}, {}, {}      ];

    for (var user of users) {

        // {0} 


        var ageGroup = "";


        // keyAge = age;
        // {0}[keyAge]  => {0}["age"]   .age // ["age"]

        // 나이는 = age  => {0}.age 
        // 나이는 = years => {0}.years

        // {0}[나이명칭] => {0}["age"]

        // console.log(user[keyAge]);
        // 25

        if (user[keyAge] < 10) {
            ageGroup = "0";

        } else if (user[keyAge] >= 100) {
            ageGroup = user[keyAge].toString().substr(0, 2) + "0";
        } else {

            // console.log("here")
            ageGroup = user[keyAge].toString().substr(0) + "0";


        }

        // number 25; => string 25

        // num {
        //     "toString": funtion () {

        //         return 문자가된 숫자
        //     }
        // }

        // str {

        //     "substr": function (num1 ,num2 ){
        //         return ...
        //     }
        // }
    }

    for (var user of userList) {
        var ageGroup = user.age.toString().charAt(0) + "0";
        if (userAgeGroup[ageGroup]) {
            userAgeGroup[ageGroup] = userAgeGroup[ageGroup] + 1);
    } else {
        userAgeGroup[ageGroup] = 1;
    }
}
return userAgeGroup;

/**
 * 최소값과 최대값을 파라미터로 받고 그 사이의 무작위(random) 정수 값을 반환하는 함수
 * @param {Number} min 
 * @param {Number} max 
 * @returns (Number) min과 max사이의 랜덤 정수 값 ->number값으로 return해라
 */
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}