import * as express from 'express';

import ContentCtrl from './controllers/content';
import Content from './models/content';

import UserCtrl from './controllers/user';
import User from './models/user';

export default function setRoutes(app) {

  const router = express.Router();


  const contentCtrl = new ContentCtrl();
  const userCtrl = new UserCtrl();

  // Cats
  router.route('/contents').get(contentCtrl.getAll);
  router.route('/contents/count').get(contentCtrl.count);
  router.route('/content').post(contentCtrl.insert);
  router.route('/content/:id').get(contentCtrl.get);
  router.route('/content/:id').put(contentCtrl.update);
  router.route('/content/:id').delete(contentCtrl.delete);
  router.route('/content-by-url').get(contentCtrl.getByUrl);

  // Users
  router.route('/login').post(userCtrl.login);
  router.route('/users').get(userCtrl.getAll);
  router.route('/users/count').get(userCtrl.count);
  router.route('/user').post(userCtrl.insert);
  router.route('/user/:id').get(userCtrl.get);
  router.route('/user/:id').put(userCtrl.update);
  router.route('/user/:id').delete(userCtrl.delete);

  // Apply the routes to our application with the prefix /api
  app.use('/api', router);

}
