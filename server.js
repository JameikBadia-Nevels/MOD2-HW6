require ('dotenv').config()
const express = require('express')

const app = express()

const PORT = process.env.PORT || 3000

const mongoose = require('mongoose');

const Pokemon = require('./models/pokemon.js')

app.use(express.urlencoded({extended:true}))

//set up view engine
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.get('/', (req,res)=>{
    res.send('Welcome to the Pokemon App!')
})

app.get('/pokemon', (req,res) => {
    Pokemon.find({}, (error,allPokemon)=>{
        res.render('Index',{
            pokemon: allPokemon
            })
        }) //{fruits:fruits})
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

app.get('/pokemon/:id', (req,res) =>{
    Pokemon.findById(req.params.id, (err,foundPokemon)=>{
		res.render('Show', {
		pokemon: foundPokemon
		})
	})
    // res.render('Show', {
    //     pokemon: Pokemon[req.params.id]})
})

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
})

app.listen(PORT, () =>{
    console.log("Meh hear erryting ya say in port", PORT)
})