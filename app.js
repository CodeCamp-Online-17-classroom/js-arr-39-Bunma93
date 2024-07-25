// write code here
const array1 = ['Elephant', 'Ant', 'Cat', 'Eagle', 'Zebra'];
// ค่าที่ขึ้นต้นด้วยตัว E

const array2 = ['APPLE', 'oRanGE', 'PEACH', 'PaPAYA'];
// ค่าที่เป็นตัวพิมพ์ใหญ่ทั้งหมด

const array3 = ['Krabi', 'Chonburi', 'Buriram', 'Saraburi','Phrae'];
// ค่าที่มีคำว่า buri เป็นส่วนประกอบโดยไม่สนใจตัวพิมพ์เล็กหรือตัวพิมพ์ใหญ่

let result1 = array1.filter(x => x.startsWith("E"));
let result2 = array2.filter(x => x === x.toUpperCase());
let result3 = array3.filter(x => x.toUpperCase().includes("BURI"));

console.log(result1);
console.log(result2);
console.log(result3);