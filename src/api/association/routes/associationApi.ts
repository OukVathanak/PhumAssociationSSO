export default {
  routes: [
    {
      method: "GET",
      path: "/association",
      handler: "association.findPublicAssociation",
      config: {
        auth: false,
        middlewares: [],
      },
    },
  ],
};
