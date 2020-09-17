var users = [
  {
    id: 1,
    full_name: "Maria Jose Marra",
    type: "user",
  },
  {
    id: 2,
    full_name: "Marcus Lundstendt",
    type: "teacher",
  },
  {
    id: 3,
    full_name: "Agustin Rivero",
    type: "user",
  },
  {
    id: 4,
    full_name: "Andres Menchaca",
    type: "user",
  },
  {
    id: 5,
    full_name: "null",
    type: "user",
  },
  {
    id: 6,
    full_name: "Fernando Cuadro",
    type: "user",
  },
  {
    id: 7,
    full_name: "Gonzalo Molinea",
    type: "user",
  },
  {
    id: 8,
    full_name: "Guillermo Barboza",
    type: "user",
  },
  {
    id: 9,
    full_name: "Ignacio Alvade",
    type: "user",
  },
  {
    id: 10,
    full_name: "Maciel Galeano",
    type: "user",
  },
  {
    id: 11,
    full_name: "Martin Magnone",
    type: "user",
  },
  {
    id: 12,
    full_name: "Mikaela Regalado",
    type: "user",
  },
  {
    id: 13,
    full_name: "Soledad Sienra",
    type: "user",
  },
];

users.forEach((index, item) => {
  document.write("<a>" + index.id + "-" + index.full_name + "</a></br>");
});
