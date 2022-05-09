module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        // uri: env('DATABASE_URI' || 'mongodb+srv://hazzstudio:Indonesi@123@hazzstudio.oq7cn.mongodb.net/backend?retryWrites=true&w=majority'),
        // host: env("DATABASE_HOST", '127.0.0.1'),
        // srv: env.bool("DATABASE_SRV", false),
        // port: env.int("DATABASE_PORT", 27017),
        // database: env("DATABASE_NAME", 'backend'),
        // username: env("DATABASE_USERNAME", 'hazzstudio'),
        // password: env("DATABASE_PASSWORD", 'Indonesi@123'),
        uri: env("DATABASE_URI" || 'mongodb+srv://hazzstudio:Indonesi@123@hazzstudio.oq7cn.mongodb.net/backend?retryWrites=true&w=majority'),
        ssl: { rejectUnauthorized: false }
      },
      options: {
        // authenticationDatabase: env("AUTHENTICATION_DATABASE", null),
        // ssl: env.bool("DATABASE_SSL", false),
        ssl: false,
        authenticationDatabase: "",
        useUnifiedTopology: true,
        pool: {
          min: 0,
          max: 10,
          idleTimeoutMillis: 30000,
          createTimeoutMillis: 30000,
          acquireTimeoutMillis: 30000
        }
      },
    },
  },
});
