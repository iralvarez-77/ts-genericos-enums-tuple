// Genéricos en clases
type Name = "Alan" | "Luciano" | "Alexia";

type Dato = {
  id:number,
  info: string
};

class Developer<T> {
  constructor( public cosa: T ) {};
};

const developer = new Developer<Dato>({id:2, info:'hola'});
const developer1 = new Developer<boolean>(false);
const developer2 = new Developer<Name>("Alexia");

console.log(developer);
console.log(developer1);
console.log(developer2);
