const React = require('react')

const myStyle = {
    color:'#355070'
}

class Index extends React.Component{
    render(){
        const {pokemon} = this.props
        if(pokemon.name == "bulbasaur" || pokemon.name == "ivysaur" || pokemon.name == "venusaur" || pokemon.name == "charmander" || pokemon.name == "charizard" || pokemon.name == "squirtle" || pokemon.name == "wartortle"){
            return(
                <div>
                <h1 style = {myStyle}>Gotta Catch Em ALLLLLLL!</h1>
                <h2> {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)} I Choose You</h2>
                <br></br>
                <div>
                    <img src = {pokemon.img + ".jpg"} /> 
                </div>
                <a href = '/pokemon'> Back </a>
                </div>
            )
        }
        return (
            <div>
            <h1 style = {myStyle}>Gotta Catch Em ALLLLLLL!</h1>
            <h2> {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)} I Choose You</h2>
            <br></br>
            <div>
                <img src = {pokemon.img} /> 
            </div>
            <a href = '/pokemon'> Back </a>
            </div>
        )
    }
}

module.exports= Index

// {pokemon.map((pokemon,x) =>{
//     return(
//         <li>
//             Summoning {' '}
//             <a href = {`/pokemon/${x}`}>
//                 {pokemon.name}
//                 {pokemon[x]}
//             </a>
//         </li>
//     )
// })}