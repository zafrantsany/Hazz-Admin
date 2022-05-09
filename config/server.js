module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  // admin: {
  //   auth: {
  //     secret: env('ADMIN_JWT_SECRET', '0029f8909d59d17d398084d3486c2421'),
  //   },
  // },
});
