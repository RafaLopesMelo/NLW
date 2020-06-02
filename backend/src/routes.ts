import express from 'express';
const Router = express.Router();

import PointsController from './controllers/points_controller';
import ItemsController from './controllers/items_controller';

const pointsController = new PointsController();
const itemsController = new ItemsController();

Router.get('/items', itemsController.index)

Router.post('/points', pointsController.create)
Router.get('/points', pointsController.index)
Router.get('/points/:id', pointsController.show)

export default Router;