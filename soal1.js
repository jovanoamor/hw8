const fs = require('fs')
const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'gayboys',
    password: 'Hajimetenoaku1',
    port: 5432
})


const seeding = fs.readFileSync('seeds.sql', {encoding: 'utf8'})
pool.query(seeding, (err, res) =>{
    console.log(err)

    pool.end()
})