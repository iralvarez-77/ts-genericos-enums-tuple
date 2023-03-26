
// Genéricos en funciones
import { Data, fetchData } from "./functions";

(async () => {
  const result = await fetchData<Data>(
    "https://rickandmortyapi.com/api/character/?page=2"
  );
  // const result = await fetchData<Data>(
  //   "https://rickandmortyapi.com/api/character/2"
  // );

  console.log(result.map(x => x.species));


  // if (Array.isArray(result)){
  //   console.log(result.map(x => x.species));
  // } else{
  //   console.log(result.name);
  // } 
  
})();

