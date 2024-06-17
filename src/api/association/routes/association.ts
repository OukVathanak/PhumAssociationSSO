/**
 * association router
 */

// import { factories } from '@strapi/strapi';

// export default factories.createCoreRouter('api::association.association');

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/associations",
      handler: "association.findPublicAssociation",
      config: {
        auth: false,
        middlewares: [],
      },
    },
  ],
};
