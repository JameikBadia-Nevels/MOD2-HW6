const React = require('react')

const myStyle = {
    color:'#355070'
}

class Index extends React.Component{
    render(){
        const {pokemon} = this.props
        return (
            <div>
            <h1 style = {myStyle}>See All The Pokemon!</h1>
            <nav>
                <a href = "/pokemon/new">Create Your Pokemon</a>
            </nav>
            <ul>
                {pokemon.map((pokemon,x) =>{
                    return(
                        <li key = {x}>
                            Summon {' '}
                            <a href = {`/pokemon/${pokemon.id}`}>
                                {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                                {pokemon[x]}
                            </a>
                        </li>
                    )
                })}
            </ul>
            </div>
        )
    }
}

module.exports= Index