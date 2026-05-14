const personal = {name: "Kemi",age: 27};
const professional = {role: "Designer", company: "TechCorp"};
const merged = {...personal, ...professional};
console.log(merged);
