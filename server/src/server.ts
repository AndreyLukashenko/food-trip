import * as Koa from 'koa';
import { routes } from './router';

const app = new Koa();

app.use(routes);

app.listen(3000);

console.log('Server running on port 3000');