"use strict";

//javascript is synchoronous. 자바스크립트는 동기적이다.
/*
Execute the code block by orger after hoisting. 
그 말은 호이스팅이 된 이후부터 내가 작성한 순서에 맞춰서 하나하나씩
동기적으로 실행된다는 말.
//hoisting : var, function declaration 
호이스팅은 var 또는 함수 선언들이 자동적으로 제일위로 올라가는 것을 호이스팅
이라고 함 . 
자바스크립트는 호이스팅이 된 이후부터 작성한 순서에 맞춰서 하나씩 동기적으로
실행된다.
*/
console.log("1");
//asynchoronous 비동기적으로 언제 코드가 실행될지 예측할 수 없는것을 말한다.
setTimeout(() => console.log("2"), 1000);
/*브라우저에서 제공하는 API로 지정한시간이 지나면 전달한 함수(콜백함수)를 호출
 */
//콜백함수 : 내가 전달해준 함수를 나중에 너가 불러주는걸 말한다.
console.log("3");

//그럼 콜백은 항상 비동기 일때만 사용될까??
//아니다 두가지의 경우가 있음
// Synchoronous callback
//즉각적으로 동기적으로 사용하는 씬크로노스 콜백

function printImmediately(print) {
  print();
}
//print 하는 콜백을 받아서 그 콜백을 바로 실행하는 함수
printImmediately(() => console.log("hello"));
//이 함수를 호출하면 print 라는 콜백함수를 전달받음.
/*자바스크립트는 type이 아니라서 어떤 타입의 콜백함수를 받는지는 
예측할 수 없지만 아무런 인자가 전달되지 않고 간단한 console만 출력
*/

// Asynchronous callback
//나중에 언제 실행될지 예측할 수 없는 에이씬크로노스 콜백
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
/*
print와 얼마정도 timeeout 을 하고 싶은지 밀리세컨드로 인자를 2개 받아옴
브라우저 api(timeout)을 이용해서 원하는 print라는 함수를 호출하고, 
timeout이라는 인자를 전달해서 
이 함수는 결국은 setTimeout감싸고 있는
랩핑하는 함수인데 전달받은 print와 timeout을 결국에는 setTimeout에 
요청하는거다.
이것을 호출하고 싶다면 printWithDelay를 원하는 기능을 동작하는 콜백함수를
전달해야한다. 
*/

printWithDelay(() => console.log("async callback"), 2000);

//Callback Hell example 콜백지옥의 체험

//사용자의 데이터를 서버에게서 데이터를 받아오는 class
class UserStorage {
  //UserStorage에는 2가지의 API가 있다고 가정,
  //첫번째는 로그인 , id와 패스워드를 받아와서 로그인이 정상적으로 이루어지면
  //onSuccess라는 콜백함수를 사용자의 데이터와 함께 호출해주고
  //만약 실패하면 onError 콜백함수 호출
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "ellie" && password === "dream") ||
        (id === "coder" && password === "academy")
      ) {
        onSuccess(id); //위 if가 true이면 전달받은 onSueccess라는 콜백을 부름
        //id를 전달해줌
      } else {
        onError(new Error("not found")); //포함되지 않는 경우라면 onError
        //콜백을 부르면서 error라는 object를 만들면서 notfound를 전달
      }
    }, 2000); //setTimeout으로 시간의 딜레이를 주면서 네트워크 통신을
    //하는것처럼 가정
  }
  getRoles(user, onSuccess, onError) {
    //onSuccess(id)를 이용해서 Roles 역활을 요청해서 받아옴
    setTimeout(() => {
      if (user === "ellie") {
        onSuccess({ name: "ellie", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  } //사용자의 데이터를 받아서 사용자마다 가지고 있는 admin,
  //ghest등 권한을 서버에 요청에 해서 다시 받아오는 API를 호출한다고 가정
}

const userStorage = new UserStorage(); //class니까 new키워드를 통해서 useStorage라는 클래스를 만듦
//class를 이용해서 backend와 통신
const id = prompt("enter your id");
const password = prompt("enter your password");
userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles(
      user,
      (userWithRole) => {
        alert(
          `Hello ${userWithRole.name},you have a ${userWithRole.role} role`
        );
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
); //userStorage를 이용해서 login,

/*콜백 체인의 문제점
콜백 함수 안에서 다른걸 호출하고 또다른걸 호출하고 또 다른걸 호출하는걸 콜백 지옥.
콜백지옥의 문제점
1. 가독성이 떨어짐( 읽기 거북함,어디서 어떤식으로 연결되어있는지 가늠하기 어려움 비지니스 로직을 한번에
    보는것도 어려움)
    2. 에러가 발생하거나 디버깅을 하는 경우에도 어렵다 . 만약에 문제가 생기면 
    어느 부분에서의 문제에서 생겼는지 체인이 길어지면 길어질수록 알아차리기가 어렵다
    3. 유지보수도 어렵다
*/
