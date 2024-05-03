import { Router } from "express";

import loginHandler from "./logic/handlers/login.handler";
import registerHandler from "./logic/handlers/register.handler";

export default (router: Router) => {
  router.post(
    "/login",
    loginHandler,
  );

  router.post(
    "/register",
    registerHandler,
  );
};
