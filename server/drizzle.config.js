/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./configs/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://uber_owner:6pozGakxNC9j@ep-broad-queen-a120kg68.ap-southeast-1.aws.neon.tech/alumni%20connect?sslmode=require',
    }
  };