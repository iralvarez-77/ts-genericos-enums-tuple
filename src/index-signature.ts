
interface Usuario<T>  {
  name: T,
  edad?: number
}

class Diccionario <T>{
  [ patito : string]: Usuario<T>
}

const diccionario = new Diccionario();
diccionario[123] = {name:'ira'}
diccionario['142'] = {name: 56, edad:18}
diccionario['·$%&'] = {name:'Alan', edad:2}
diccionario['chanchito'] = {name:'Alan', edad:2}
console.log(diccionario);
