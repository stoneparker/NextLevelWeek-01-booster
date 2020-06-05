import knex from 'knex';
import path from 'path'; // para lidar com caminhos de diretórios!

const connection = knex({ // configurações do database
  client: 'sqlite3',
  connection: {
     filename: path.resolve(__dirname, 'database.sqlite'),
  }, 
  useNullAsDefault: true
})

export default connection;