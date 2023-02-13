// Q1. make a string out of an array
{
  const fruits = ["apple", "banana", "orange"];
  const result = fruits.join();
  const result0 = fruits.join("ㅣ");

  //join 배열을 "apple", "banana", "orange" 스트링으로 변환
  console.log(result);
  console.log(result0);
}

// Q2. make an array out of a string
{
  const fruits = "🍎, 🥝, 🍌, 🍒";
  const result = fruits.split(",", 2); //첫번째 두개의 배열만 전달받고 싶을떄
  const result1 = fruits.split(","); //스트링을 배열로 변환
  console.log(result);
  console.log(result1);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse(); //array 배열 자체도 순서가 바뀌니 주의
  console.log(result);
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const result = array.slice(2, 5);
  //배열을 변경하지 않고 값을 추출
  //시작 index[2]부터 index[5]까지 추출
  //마지막 index는 제외
  const result1 = array.splice(0, 2);
  //배열자체에서 배열을 삭제하고 삭제된 부분은 result1에 담는다.
  //splice array 배열 자체를 변환 index 0 부터 2개를 제거
  console.log(result);
  console.log(result1);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

// Q5. find a student with the score 90
{
  const result = students.find((student) => {
    return student.score === 90;
  });
  console.log(result);
  //find는 조건이 true면 해당하는 그 배열의 요소를 리턴해주는 API
}

// Q6. make an array of enrolled students
{
  const result = students.filter((student) => student.enrolled);
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const result = students.map((student) => student.score);
  console.log(result);
  //map은 배열안에 들어있는 모든 요소들을 콜백함수를 호출하면서
  //가공되어진(return 되어진) 값들로 대체한다.
}

// Q8. check if there is a student with the score lower than 50
{
  console.clear();
  const result = students.some((student) => student.score < 50);
  console.log(result);
  //누군가라도 점수가 50점 보다 낮은 값이 있는지 없는지 확인할땐 some
  //some(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean;
  //콜백함수 중에서 배열의 요소중에서 콜백함수가 리턴이 true 가 되는 값이 있는지 없는지를 확인.
  const result1 = students.every((student) => student.score < 50);
  console.log(result1);
  //every 모든 조건이 충족되야지만 true를 리턴
}

// Q9. compute students' average score
{
  console.clear();
  const result = students.reduce((prev, curr) => prev + curr.score, 0);
  //초기 prev값을 0으로 설정
  console.log(result / students.length);

  //reduceRight => 배열의 제일 뒤에서 시작한다
  //reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U;
  //
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students.map((student) => student.score);
  //students의 score를 맵핑을해서 score 값만 들어있는 새로운 배열을 만듦
  console.log(result.join()); //그 값의 조인을 하면 스트링으로 변경이 가능
  //const result = students.map((student) => student.score).join();
  /*
  const result = students.map((student)=>student.score)
  .filter((score)=>score>=50)
  .join();
  */
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students.map((student) => student.score).sort();
  console.log(result);
}
