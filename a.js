const aaa = [
  {
    id: 1,
    name: "papu",
    description: "aaaaaaaa",
    weight: 33,
    c_id: 4,
    category: "axxxxsxx",
    priority: 5,
  },
  {
    id: 2,
    name: "papu2",
    description: "aaaaaaaa",
    weight: 33,
    c_id: 4,
    category: "axxxxsxx",
    priority: 5,
  },
  {
    id: 3,
    name: "papu3",
    description: "aaaaaaaa",
    weight: 33,
    c_id: 4,
    category: "axxxxsxx",
    priority: 5,
  },
];

const b = aaa.findIndex((element) => element.id == 2);
const d = {
  id: 10,
  name: "papu3asddsa",
  description: "aaaaaaaa",
  weight: 33,
  c_id: 4,
  category: "axxxxsxx",
  priority: 5,
};

aaa[b] = d;
console.log(aaa);
