/*
JSON (Javascript Object Notation)
브라우저 뿐만 아니라 moble에서 server와 date를 주고 받을때
또는 server와 통신을 하지 않아도 오브젝트를 파일 시스템에 저장할때도 
JSON date type을 이용한다.

- simplest date interchange format 
//데이터를 주고받을때 쓸 수 있는 가장 간단한 file format
-lightweight text-based structure
//텍스트를 기반으로하여 가볍다.
-easy to read 눈으로 읽기 편하고
- key-value pairs // key와 value로 이루어져있다 
-used for serialization and transmission of date between the network the
network connection 
//데이터를 보통은 서버와 주고 받을때 직렬화하고 데이터를 전송할때 쓰이고
-independent programming language and platform 
-----POINT 프로그래밍 언어나 플랫폼에 상관없이 사용이 가능하다 -----
C, C# ,java, python php ,go 언어나 플랫폼 상관 없이
JSON으로 serialization된 object 를 다시 그 언어의 특징에 맞게
object를 변환하고 object를 다시 json으로 serialization 하는것을 지원을 해주거나
아니면 많이 쓰여지고 있는 외부 라이브러리를 통해서 가능하게 된다.
JSON 공부 방법,
object를 어떻게 -> (serialize직렬화)해서  JSON으로 변환할지
다른 하나는 직렬화된 json을 ->(deserialize)해서 object로 변환할지 
*/

//1. Object to JSON
//stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(["apple", "banana"]);
console.log(json);

const rabbit = {
  name: "tori",
  color: "white",
  size: null,
  birthDate: new Date(),

  jump: () => {
    console.log(`${this.name} can jump`);
  },
};

//이것을 JSON으로 변환하면?

json = JSON.stringify(rabbit);
console.log(json);
/*jump라는 함수는 JSON에 포함되지 않는다. 함수는 object에 있는 데이터가 아니기 때문에 함수는 제외되고
그리고 자바스크립트에서 자체로 들어있는 symbol 같은 자바스크립트에만 있는 특별한 데이터도 
json에 포함되지 않는다.*/
//json에서 변환되는것을 조금더 통제하고 싶다면 콜백함수를 이용
json = JSON.stringify(rabbit, ["name"]);
//토끼 object에서 이름만 json으로 하고 싶다면 이렇게 하면 됨
json = JSON.stringify(rabbit, ["name", "color", "size"]);
//내가 원하는 property 만 골라서 정의를 하게 되면 해당하는 프로퍼티만 json으로 변환이 됨.

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key:${key} value:${value}`);
  return value;
});
console.log(json);
//json의 replacer는 key와 value를 전달 받는다

////////////////////////////////////////////////////////////////////////////////////////

console.clear();

//2. JSON to Object JSON을 Object로 변환
//parse(json)
json = JSON.stringify(rabbit);
console.log(json);

const obj = JSON.parse(json); //json에 있는 parse라는 API를 이용해서 변환하고 싶은 json을 전달해주면 끝
console.log(obj);
rabbit.jump();
//obj.jump(); error
//변환한 함수는 serialization가 된 즉, string으로 만들어진 JSON으로 부터 다시 object로 만들었기 때문에
//함수는 serialization가 될때 포함되지 않았으므로 다시 json으로부터 object 로 만든 곳에는 jump라는
//api가 없다 (당연)

console.log(rabbit.birthDate.getDate());
//console.log(obj.birthDate.getDate());
//console.log(obj.birthDate);
/* obj안의 birthDate는 string이기 때문에 error 발생 
json으로 만든 그 데이터 자체에 있는 string이 object에 할당이 되어서 에러 발생
*/
console.clear();
//parse에 있는 API정보를 보면 reviver?이라는 콜백함수를 전달할 수 있다.
const obj1 = JSON.parse(json, (key, value) => {
  return key === "birthDate" ? new Date(value) : value;
});
//key가 만약 birthDate면 birthDate를 새로운 object , Date라는 object를 만들꺼고 ,
//key가 birthDate가 아니면 기본 value를 사용한다. 좋네..
console.log(obj1);
console.log(obj1.birthDate.getDate());
