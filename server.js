require ('dotenv').config()

const express = require('express')

const Pokemon = require('./models/pokemon.js')

const app = express()

const mongoose = require('mongoose');

const { findByIdAndRemove } = require('./models/pokemon.js');

const methodOverride = require('method-override')

const PORT = process.env.PORT || 3000

//MUST BE FIRST
app.use((req,res,next)=>{
    console.log('I run all da bloodclat routes')
    next()
})

app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))

//set up view engine
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.get('/pokemon/seed', (req, res)=>{
    Pokemon.create([
        {name: "bulbasaur", img: "http://img.pokemondb.net/artwork/bulbasaur"},
        {name: "ivysaur", img: "http://img.pokemondb.net/artwork/ivysaur"},
        {name: "venusaur", img: "http://img.pokemondb.net/artwork/venusaur"},
        {name: "charmander", img: "http://img.pokemondb.net/artwork/charmander"},
        {name: "charizard", img: "http://img.pokemondb.net/artwork/charizard"},
        {name: "squirtle", img: "http://img.pokemondb.net/artwork/squirtle"},
        {name: "wartortle", img: "http://img.pokemondb.net/artwork/wartortle"}
    ], (err, data)=>{
        res.redirect('/pokemon');
    })
});

app.get('/pokemon', (req,res) => {
    Pokemon.find({}, (error,allPokemon)=>{
        res.render('Index',{
            pokemon: allPokemon
            })
        }) 
     })
     
app.get('/', (req,res)=>{
     res.send('Welcome to the Pokemon App!')
})

//a page that will allow us to create a new fruit 
app.get('/pokemon/new', (req,res) =>{
    res.render('New')
})

//form POST
app.post('/pokemon/', (req,res) =>{
		Pokemon.create(req.body,(error, createdPokemon)=>{
		res.redirect('/pokemon')
		})
})
//Show page
app.get('/pokemon/:id', (req,res) =>{
    Pokemon.findById(req.params.id, (err,foundPokemon)=>{
		res.render('Show', {
		pokemon: foundPokemon
		})
	})
})

//DELETE Route
app.delete('/pokemon/:id', (req, res)=>{
        Pokemon.findByIdAndRemove(req.params.id, (err, data)=>{
        res.redirect('/pokemon')
    })
});

//Edit Route
app.get('/pokemon/:id/edit', (req, res)=>{
    Pokemon.findById(req.params.id, (err, foundPokemon)=>{ //find the Pokemon
      if(!err){
        res.render(
    		  'Edit',
    		{
    			pokemon: foundPokemon //pass in found Pokemon
    		}
    	);
    } else {
      res.send({ msg: err.message })
    }
    });
});

app.put('/pokemon/:id', (req,res) =>{
    Pokemon.findByIdAndUpdate(req.params.id, req.body, {new:true},(err, updatedModel) =>{
        res.redirect('/pokemon')
    })
})


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
})

app.listen(PORT, () =>{
    console.log("Meh hear erryting ya say in port", PORT)
})