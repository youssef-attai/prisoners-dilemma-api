import { Router } from "express";

export function strategyManagementRoutes(router: Router) {
  /*
   * Upload strategy
   */
  router.post(
    "/upload",
    // uploadStrategyHandler, // TODO: wrap in asyncHandler
  );

  /*
   * Get strategies
   */
  router.get(
    "/",
    // getStrategiesHandler, // TODO: wrap in asyncHandler
  );

  /*
   * Update strategy by id
   */
  router.patch(
    "/:id",
    // updateStrategyByIdHandler, // TODO: wrap in asyncHandler
  );
}
