"use strict";
//Object-oriendted programming
//class : template
//object : instance of a class
// ES6에 javascript class가 나옴
// 프로토타입 베이스의 기반에서 문법만 class가 추가.

//1. Class declarations
class Person {
  //constructor
  constructor(name, age) {
    //fields
    this.name = name;
    this.age = age;
    /* 사람이라는 클래스를 만들고 생성자를 이용해서 
오브젝트를 만들때 필요한 데이터를 전달.

 */
  }
  //methods
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const ellie = new Person("ellie", 20);
//새로운 object를 만들땐 new 키워드사용
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

// Getter and setters
/* 사용자가 정보를 잘못 입력해도 방어적인 자세로 만들어주는것이 게터와 세터
 사용자가 수정을 하지 못하게 프라이빗으로 만들어서 인캡슐레이션 한다.
 */
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  //get 이라는 키워드릴 이용해서 값을 리턴
  get age() {
    return this._age;
  }
  /* age란 getter를 정의하는 순간 User class에 있는 this.age는 
메모리에 올라가있는 데이터를 읽어오는 것이 아니라, getter를 호출하게됨  */
  //값을 설정하기 때문에 값을 받아와야됨.
  set age(value) {
    this._age = value < 0 ? 0 : value;
  }
  /*setter를 정의하는 순간 값을 할당할때 User class에서 바로 메모리로 할당
  하는 것이 아니라, setter를 호출하게 된다. 
  즉, setter안에서 전달된 값을 this.age에 할당할때 메모리의 값을 업데이트
  하는것이 아니라 setter를 호출하게 된다.
  무한루프로 콜스택이 닫히는걸 방지하기 위해 변수 이름을 조금 다르게 만들어
  줘야 한다.*/
}

/*          상속 &  다양성         */
const user1 = new User("Steve", "job", -1);
console.log(user1.age);
/* 필드는 기호가 들어간 age가 있지만 .age라고 호출할 수 있는것,
 그리고 .age에 값을 할당할 수 있는것은 
 내부적으로 getter와 setter를 이용하기 때문 */

class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }
  draw() {
    console.log(`drawing ${this.color} color of`);
  }
  getArea() {
    return this.width * this.height;
  }
}
//extends 키워드는 클레스를 다른 클레스의 자식으로 만들기 위해 선언
//extends 라는 클레스라는 클레스를 이용해서 Shape을 연장
//Shape에서 선언한 필드와 필드와 메소드가 자동적으로 렉탱글에 포함
class Reactangle extends Shape {}

class Triangle extends Shape {
  /* 필요한 함수만 재 정의하여 사용 가능 (오버라이딩) */
  getArea() {
    //getArea를 오버라이딩해서 재 정의,
    //삼각형의 넓이를 구하는 공식은 다르기 때문에
    return (this.width * this.height) / 2;
  }
  draw() {
    super.draw(); // 재 정의 한거 말고 부모의 draw도 사용하고 싶으면
    //앞에 super.
    console.log("▲"); // 오버라이딩
  }
}

const reactangle = new Reactangle(20, 20, "blue");
reactangle.draw();
console.log(reactangle.getArea());
const triangle = new Triangle(20, 20, "red");
console.log(triangle.getArea());
console.log(triangle.draw());

// Class checking instanceOf
//왼쪽에 있는 object가 오른쪽에 있는 class의 인스턴스인지 아닌지 check
//즉 , 왼쪽에 있는 object가 오른쪽에 해당 클레스로 만들어진 object가
//맞는지 확인한다. true 와 false를 return
console.log(reactangle instanceof Reactangle);
console.log(triangle instanceof Reactangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
