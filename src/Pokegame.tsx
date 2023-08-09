import Pokedex from './Pokedex';
// interface Pokemon {
//     id: number;
//     name: string;
//     type: string;
//     base_experience: number;
//   }
  

function Pokegame() {
  var  defaultprops={
    pokemon:
        [
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
            {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
            {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
            {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
            {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
            {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
          ]
    
  }

  var {pokemon} =defaultprops;
    let hand1=[];
    let hand2=[...pokemon];
    while(hand1.length<hand2.length)
    {
let radix=Math.floor(Math.random()*hand2.length);
//console.log(radix);
let randPokemon=hand2.splice(radix,1)[0];
console.log(randPokemon);
hand1.push(randPokemon);

     }
 console.log(hand1);
 console.log(hand2);
 let exp1=hand1.reduce((exp,pokemon)=>exp+pokemon.base_experience,0);
 let exp2=hand2.reduce((exp,pokemon)=>exp+pokemon.base_experience,0);
 return (
    <div><Pokedex pokemon={hand1} exp={exp1} iswinner={exp1>exp2}/>
       <Pokedex pokemon={hand2} exp={exp2} iswinner={exp2>exp1} /></div>
    
 )

}
  export default Pokegame;