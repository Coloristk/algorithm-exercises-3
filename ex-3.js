function sortByRating(shops) {
  // Start coding here
  for (let i = 0; i < shops.length; i++) {
    for (let j = 0; j < shops.length - 1; j++) {
      if (shops[j].rating < shops[j + 1].rating) {
        let temp = shops[j];
        shops[j] = shops[j + 1];
        shops[j + 1] = temp;
      }
    }
  }
  return shops;
}

/* 
  1. ควรใช้ Algorithm ใดในการแก้โจทย์นี้ 
  2. ให้เหตุผลประกอบว่าทำไมถึงเลือกใช้ Algorithm นี้
  3. ให้ระบุว่า Big O Notation ของ Function นี้คือเท่าไร เพราะอะไร
*/

/* 
Answer
  1. ควรใช้ Bubble Sort Algorithm
  2. เพราะ ข้อมูลมีการเรียงลำดับมาให้ จึงควรใช้ Bubble Sort Algorithm เพื่อเรียงลำดับค่าที่ต้องการ
  3. Big O Notation ของ Function นี้คือ O(n^2) เพราะ มีการวน loop ซ้อนกัน 2 ชั้น
*/

const shops = [
  {
    shopTitle: "ร้านอาหารส้มตำแซ่บ",
    rating: 4.5,
  },
  {
    shopTitle: "ร้านขนมไทยแม่จันทร์",
    rating: 4.8,
  },
  {
    shopTitle: "ร้านกาแฟหอมกรุ่น",
    rating: 4.2,
  },
  {
    shopTitle: "ร้านเบเกอรี่บ้านอบอุ่น",
    rating: 4.9,
  },
  {
    shopTitle: "ร้านก๋วยเตี๋ยวลูกชิ้นปลาเจ้าดัง",
    rating: 4.6,
  },
];

console.log(sortByRating(shops));
/*
[
  { shopTitle: 'ร้านเบเกอรี่บ้านอบอุ่น', rating: 4.9 },
  { shopTitle: 'ร้านขนมไทยแม่จันทร์', rating: 4.8 },
  { shopTitle: 'ร้านก๋วยเตี๋ยวลูกชิ้นปลาเจ้าดัง', rating: 4.6 },
  { shopTitle: 'ร้านอาหารส้มตำแซ่บ', rating: 4.5 },
  { shopTitle: 'ร้านกาแฟหอมกรุ่น', rating: 4.2 }
]
*/
