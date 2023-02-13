//Object
//Object ={key:value}; 의 집합체
const obj1 = {}; // 괄호를 이용해서 만드는거를 Object literal 문법(syntax)
const obj2 = new Object(); //new키워드를 이용해서 만드는것을
//object constructor 신택스 문법 라고 한다.

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const ellie = { name: "ellie", age: 4 };
console.log(ellie);

ellie.hasJob = true;
delete ellie.hasJob;
/*dynamic type langauge 동적으로 타입이 런타임때 결정되는 언어
그래서 뒤늦게 프로퍼티를 추가하거나 지울수가 있다. 다른언어에서는 흔치 않음
이렇게 동적으로 코딩하면 금방금방하기에는 좋지만, 유지보수가 힘들어지고 
생각지 못한 에러가 발생할 수 있기때문에 피해서 코딩.
*/

// computed properties (계산된 프로퍼티)
console.log(ellie.name);
console.log(ellie["name"]);
// 배열방식으로도 (프로퍼티는 스트링형식으로)접근이 가능하다.
//key를 스트링 타입으로 넣지 않으면 값이 안나온다.

ellie["hasJob"] = true; //프로퍼티 생성도 가능
console.log(ellie.hasJob);
/* 
 . 닷은 코딩하는 그 순간 키에 해당하는 값을 받아오고 싶을때 .을 사용
 
 computed properties를 쓸때는 우리가 정확하게 어떤 키가 필요한지 
 모를때 즉, 런타임에서 결정될때 computed properties를 쓰게 된다.
 실시간으로 원하는 키의 값을 받아오고 싶을때 사용 한다.

*/

function printValue(obj, key) {
  //console.log(obj.key); 오브젝트에 키라는 프로퍼티가 들어있는지? 물어보는거
  console.log(obj[key]);
}

printValue(ellie, "name"); //객체의 값을 전달할땐 ""
printValue(ellie, "age");
/* 나중에 동적으로 키의 관련된 value를 받아와야 할때 유용하게 사용*/

// Property value shorthand
const person1 = { name: "bob", age: 2 };
const person2 = { name: "steve", age: 3 };
const person3 = { name: "dave", age: 4 };

const person4 = new Person("elile", 30);
//추가될때마다 계속 작성해야되는 번거로움 -> 함수로 전환
console.log(person4);
// Constructor function
function Person(name, age) {
  //순수하게 object를 생성하는 함수는 보통 대문자로 시작하게 만듦.
  //this= {};
  this.name = name;
  this.age = age;
  //return this;
}

// in operator: property existence check (key in obj)
console.log("name" in ellie);
console.log("age" in ellie);
console.log("random" in ellie);
//키가 오브젝트 안에 있는지 확인

//for ..in vs for..of
//for (key in obj)
console.clear();
for (key in ellie) {
  //ellie 가 가지고 있는 key들이 key라는 지역변수에 할당이 됨
  console.log(key);
}
//모든 키들을 받아와서 처리하고싶을때 for in을 사용하면 좋다

//for (value of iterable)
const array = [1, 2, 4, 5];
for (value of array) {
  //of는 array에 있는 모든값들이 순차적으로 출력하거나 계산하면서 반복 수행됨
  console.log(value);
}
array.forEach((hi) => console.log(hi + 1)); //forEach로도 가능

//Fun cloning
//Object.assign(dest, obj1, obj2,) obj 복제
const user = { name: "ellie", age: 30 };
const user2 = user; // user의 값이 바뀜(당연)
console.clear();

const user4 = Object.assign({}, user);
console.log(user4);
