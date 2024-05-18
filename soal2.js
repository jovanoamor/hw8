const express = require('express');
const app = express();
const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'gayboys',
    password: 'Hajimetenoaku1',
    port: 5432
})

app.get('/', async (req, res) => { 
    try{ res.send("rute :<br/>/film <br/> /film/:id_film <br/> /category <br/> /film/category/:film_category <br/> <br/> notes ':' artinya input")
    }
catch(fuck){
    console.log(fuck)
}
});

app.get('/film', async (req, res) => { 
    try{
  const film = await pool.query("SELECT * FROM film");
  res.json(film);
  console.log('film');
    }
catch(fuck){
    console.log(fuck)
}
});

app.get('/film/:id', async (req, res) => { 
    try{
  const film = await pool.query("SELECT * FROM film WHERE film_id = "+ req.params.id);
  res.json(film);
  console.log('film');
    }
catch(fuck){
    console.log(fuck)
}
});

app.get('/category', async (req, res) => { 
    try{
  const category = await pool.query("SELECT * FROM category");
  res.json(category);
  console.log('category');
    }
catch(fuck){
    console.log(fuck)
}
});

app.get('/film/category/:film_category', async (req, res) => { 
    try{
        let goals = "SELECT film.film_id,film.title FROM film "+
        "JOIN film_category ON film.film_id = film_category.film_id " +
        "JOIN category ON film_category.category_id = category.category_id WHERE category.name = '" + req.params.film_category + "'"
  const filmCat = await pool.query(goals);
  res.json(filmCat);
  console.log('filmCat');
    }
catch(fuck){
    console.log(fuck)
}
});

const PORT = process.env.PORT || 3000;
app.listen(3000, () => {
  console.log('buka');
});