import * as express from 'express';

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.routes();
  }

  // Configure API endpoints.
  private routes(): void {
    let router = express.Router();

    router.get('/', (req, res, next) => {
      res.send('Hello World!');
    });

    this.app.use('/', router);
  }
}

export default new App().app;