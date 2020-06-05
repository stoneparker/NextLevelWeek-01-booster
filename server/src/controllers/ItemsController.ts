import { Request, Response } from 'express';
import knex from '../database/connection';

class ItemsController {
   async index(request: Request, response: Response) {
      const items = await knex('items').select('*');
   
      // transforma os dados para um novo formato, mais acessível para o frontend (serialização)
      const serializedItems = items.map(item => {
         return {
            id: item.id,
            title: item.title,
            image_url: `http://192.168.0.100:3333/uploads/${item.image}`,
         };
      })
   
      return response.json(serializedItems)
   }

   async update(request: Request, response: Response) {
      const { id } = request.params;
      const {
         title,
         image
      } = request.body;

      await knex('items').update({title, image}).where({id});

      return response.json({ message: 'ihuuuu' })
   }
}

export default ItemsController;