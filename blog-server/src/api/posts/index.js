// const Router = require('koa-router');
// const postCtrl = require('./posts.ctrl');
import Router from 'koa-router';
import * as postCtrl from './posts.ctrl.js';
import checkLoggedIn from '../../lib/checkLoggedIn.js';

const posts = new Router();

posts.get('/', postCtrl.list);
posts.post('/', checkLoggedIn, postCtrl.write);
posts.get('/:id', postCtrl.getPostById, postCtrl.read);
posts.delete(
  '/:id',
  checkLoggedIn,
  postCtrl.checkOwnPost,
  postCtrl.getPostById,
  postCtrl.remove,
);
posts.patch(
  '/:id',
  checkLoggedIn,
  postCtrl.checkOwnPost,
  postCtrl.getPostById,
  postCtrl.update,
);

export default posts;
