import express = require("express");
import { NextFunction, Request, Response, Router } from "express";

class Controller {
  router: Router;

  constructor() {
    this.router = express.Router();
    this.initRoutes();
  }
  private initRoutes() {
    this.router.get("/", this.home);
    this.router.get("/login", this.login);
    this.router.get("/register", this.register);
  }

  private home = (req: Request, res: Response, _next: NextFunction) => {
    res.render("index", {
      title: "Home",
      description: "",
      image: "img/logo/m.jpg",
      home: "home",
    });
  };

  private login = (req: Request, res: Response, _next: NextFunction) => {
    res.render("login");
  };

  private register = (req: Request, res: Response, _next: NextFunction) => {
    res.render("register");
  };

  public error404 = (req: Request, res: Response, _next: NextFunction) => {
    res.render("error404", {
      title: "404 Error",
      description: "",
      image: "images/error-404.PNG",
    });
  };

  public error = (req: Request, res: Response, _next: NextFunction) => {
    res.redirect("/page-not-found");
  };
}

export default Controller;
