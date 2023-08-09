import './Pokecard.css'
interface PokecardProps {
    id: number;
    name: string;
    type: string;
    exp: number;
}
var POKE_API ='https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
let padtothree=(number:number)=>(number<=999?`00${number}`.slice(-3):number);
function Pokecard(props:PokecardProps)
{
    let{id,name,type,exp}=props;
    var imgsrc=`${POKE_API}${padtothree(id)}.png`;
    return(
    <div className='Pokecard'>
    <h3 className='pokename'>{name}</h3>
   <div className='pokebomma'><img src={imgsrc} /></div> 
    <div className='data'>Type:{type}</div>
    <div className='data' >EXP:{exp}</div>
    
    </div>);
    
}

export default Pokecard