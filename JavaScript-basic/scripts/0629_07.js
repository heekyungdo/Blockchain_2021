  //정규식
  //regular expression




  var txt = "Hello World! World!";
  console.log(txt.replace("World", "Clara"));





  var txt = "Hello World! World!";
  var regexp = /World/g;
  //   g -> global
  console.log(txt.replace(regexp, "Clara"));



  var str = "123abc456kkk";
  var regexp1 = /[0-9]/g;
  var result = str.match(regexp1); //-> match는 정규식을 위한 함수
  console.log(result);



  var str2 = "re, green, red ,gree, gen, yellow, blue";
  var regexp2 = /(red|green)/g;
  var result2 = st2.match(regexp2);

  console.log(result2);



  //사용자가  원하는 전화번호가 우리가 원하는 값으로 도출하기 위함

  //   var tel = "010-7708-9614";
  //   //010숫자 - 4자리 숫자=-4자리
  //   var regexp3 = /^(010)-\d{4}-\d{4}/;
  //   console.log(regexp3.test(tel));





  //dhk0729@Shotmail.com
  //aaa234@abc.o.kr  
  // abd@addfdf
  //e
  var regexp4 = /'^'\w+@}\w+(\.\w{2,3})+$/;

  console.log(regexp4.test("dhk0729@gmail.com"));