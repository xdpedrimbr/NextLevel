import knex from 'knex';
import path from 'path'

const connection = knex({
    client: 'sqlite3',
    connection: {   //dirname retorna o caminho do diretorio database
        filename: path.resolve(__dirname, 'database.sqlite'), //une os caminhos/ padroniza o caminho do arquivo
    },
    useNullAsDefault: true
})

export default connection;

