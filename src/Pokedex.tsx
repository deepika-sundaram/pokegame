import Pokecard from'./Pokecard'
import './Pokedex.css'
interface Pokemon {
    id: number;
    name: string;
    type: string;
    base_experience: number;
  }
  

function Pokedex(props:any) {
  var {pokemon,exp,iswinner} =props;
  let title;
  if(iswinner)
  {
    title=<h1 className='winner'> Winning Hand</h1>;
  }
  else{
    title=<h1 className='losing'> Losing Hand</h1>;
  }

  
  
  return (<div>


     {title}
    <h3>Total experience {exp}</h3>

    <div className='Pokedex'>
    
    {pokemon.map((p:Pokemon) => ( 
      <Pokecard
     // Don't forget to provide a key when rendering in a loop
        id={p.id}
        name={p.name}
        type={p.type}
        exp={p.base_experience}
      />
    ))}
  </div></div>
);
}


export default Pokedex;
