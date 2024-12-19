function findStudentIndex(students, searchStudent) {
  // Start coding here
  for (let i = 0; i < students.length; i++) {
    if (students[i] === searchStudent) {
      return (i += 1);
    }
  }
  return -1;
}

/* 
  1. ควรใช้ Search Algorithm ใดในการแก้โจทย์นี้ 
  2. ให้เหตุผลประกอบว่าทำไมถึงเลือกใช้ Search Algorithm นี้
  3. ให้ระบุว่า Big O Notation ของ Function นี้คือเท่าไร เพราะอะไร
*/

/* 
Answer
  1. ควรใช้ linear search algorithm 
  2. เพราะ ข้อมูลไม่ได้มีการเรียงลำดับมาให้ จึงควรใช้ linear search algorithm เพื่อหาค่าที่ต้องการ
  3. Big O Notation ของ Function นี้คือ O(n) เพราะ มีต้องวน loop ผ่านสมาชิกทุกตัวใน array 
*/

const students = [
  "Bobby",
  "Diana",
  "Hannah",
  "Andrew",
  "Jasmine",
  "Isaac",
  "John",
];

console.log(findStudentIndex(students, "John")); // 7
console.log(findStudentIndex(students, "Anna")); // -1
