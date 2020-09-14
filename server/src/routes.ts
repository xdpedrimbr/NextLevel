import express from 'express';

import pointsController from './controllers/pointsController'
import itemsController from './controllers/itemsController'

const routes = express.Router()
const pointscontroller = new pointsController()
const itemscontroller = new itemsController()

routes.get('/items', itemscontroller.index)
routes.post('/points', pointscontroller.create)
routes.get('/points', pointscontroller.index)
routes.get('/points/:id', pointscontroller.show)//o show lista so um

export default routes;