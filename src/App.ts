import express = require('express');
import { Application } from 'express';
import bodyParser = require('body-parser');
import expressHandlebars = require('express-handlebars');
import { join } from 'path';
import Controller from './controllers/Controller';

class App {
    public expressApp: Application;
  
    constructor() {
      this.expressApp = express();
      const controller = new Controller();
      this.expressApp.use(bodyParser.urlencoded({ extended: false }));
      this.expressApp.use(bodyParser.json());
      this.expressApp.use(controller.router);
      this.prepareStatic();
      this.setViewEngine();
    }
    private prepareStatic(): void {
      this.expressApp.use(express.static(join(__dirname, '..', 'public/assets')));
    }
  
    private setViewEngine(): void {
      this.expressApp.engine(
        '.hbs',
        expressHandlebars({
          extname: 'hbs',
          defaultLayout: 'main',
          layoutsDir: join(__dirname, '..', '/public/views/layouts/'),
          partialsDir: join(__dirname, '..', '/public/views/templates/'),
        }),
      );
      this.expressApp.set('views', join(__dirname, '..', 'public/views'));
      this.expressApp.set('view engine', 'hbs');
    }
  }
  export default App;