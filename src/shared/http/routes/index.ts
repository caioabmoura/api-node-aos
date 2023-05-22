import { Router } from 'express';
import productsRouter from '@modules/products/routes/products.routes';
import usersRouter from '@modules/users/routes/users.routes';
import customersRouter from '@modules/costumers/routes/customers.routes';
import OrdersController from '@modules/orders/routes/orders.routes'
const routes = Router();

routes.use('/products', productsRouter);
routes.use('/users', usersRouter);
routes.use('/customers', customersRouter)
routes.use('/orders',OrdersController)

export default routes;