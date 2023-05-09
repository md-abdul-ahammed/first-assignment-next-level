type Person = {
  name: string;
  age: number;
};

function filterAdults(persons: Person[]): Person[] {
  return persons.filter((person) => person.age >= 18);
}

const personArray: Person[] = [
  {
    name: "Rahim",
    age: 23,
  },
  {
    name: "Karim",
    age: 17,
  },
  {
    name: "Jamal",
    age: 25,
  },
];

console.log(filterAdults(personArray));
