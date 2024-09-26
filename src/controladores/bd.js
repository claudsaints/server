// Importa o pacote pg e desestrutura a propriedade Pool
const {Pool} = require("pg");
const dotenv = require("dotenv");
dotenv.config();


const pool = new Pool({
  connectionString: process.env.BDURI,
  ssl:{
    rejectUnauthorized: false //ajuste necessário caso esteja utilizando ssl
  }
})

// Exporta a variável pool
module.exports = { pool };


