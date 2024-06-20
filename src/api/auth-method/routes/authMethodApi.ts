export default {
  routes: [
    {
      method: "POST",
      path: "/auth/native/register",
      handler: "auth-method.nativeRegister",
      config: {
        auth: false,
        middlewares: [],
      },
    },
  ],
};
