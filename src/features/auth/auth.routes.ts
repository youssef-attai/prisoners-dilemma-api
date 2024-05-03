import { Router } from "express";

import loginHandler from "./logic/handlers/login.handler";
import registerHandler from "./logic/handlers/register.handler";

export default (router: Router) => {
  /*
   * Login
   */
  router.post(
    "/login",
    loginHandler, // TODO: wrap in asyncHandler
  );

  /*
   * Register
   */
  router.post(
    "/register",
    registerHandler, // TODO: wrap in asyncHandler
  );
};
