import {Request, Response} from 'express'
import knex from '../database/connection'

class itemsController{
    async index(request: Request, response: Response) { //cria a primeira rota app.get o users é o que quer acessar
        const items = await knex('items').select('*')
        //o await espera a queue terminar para pegar os resultados 
        //quando tem o await tem quer ter o async dentro da rota
        //SELECT * FROM items

        const serializedItems = items.map(item =>{
            return {
                id: item.id,
                title: item.title,
                image_url: `http://localhost:3333/uploads/${item.image}`
            }
        })

        return response.json(serializedItems)
    }
}

export default itemsController