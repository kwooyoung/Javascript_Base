/* 
배열은 새로운 데이터를 자료구조에 '삽입'할때 얼마나 효율적으로 할 수 있는지
삭제, 정렬, 검색할때도 어떤 알고리즘을 써서 사용할 것인지가 중요
*/

const fruit = ["apple", "orange"];
fruit.forEach((fruit, index, array) => {
  console.log(fruit);
  console.log(index);
  console.log(array); //forEach에서는 보통 array를 받아오지 않는다 .
});

//splice : remove an item by index position
fruit.push("lemon", "mango");
console.log(fruit);

fruit.splice(1, 1, "melon", "kiwi");
//fruit[1]인덱스부터 1개 를 지우고 그 자리에 melon과 kiwi를 추가
console.log(fruit);

//combine two arrays
const fruits2 = ["딸기", "수박"];

const newFruits = fruit.concat(fruits2);
console.log(newFruits);

//Searching

console.clear();
console.log(fruit);
console.log(fruit.indexOf("mango"));
// indexOf 해당 값이 몇번째 인덱스에 있는지
console.log(fruit.includes("lemon"));
//배열에 레몬이 있는지 없는지를 검사하고 boolean으로 값을 리턴해줌 true,false
//해당하는 값이 없으면 -1 을 반환

//lastIndexOf
console.clear();
fruit.push("apple");
console.log(fruit); //뒤에 푸쉬 하여 하나 더 추가
console.log(fruit.indexOf("apple")); //0번째만 나오고 이 후 값은 출력이 안됨. 하나만 찾고 종료.

console.log(fruit.lastIndexOf("apple")); //해당값이 마지막에 있는 인덱스 자리가 나오고 출력되고 종료
