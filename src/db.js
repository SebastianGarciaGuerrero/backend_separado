import pg from "pg";

export const pool = new pg.Pool({
  port: 5432,
  host: "localhost",
  user: "postgres",
  password: "1503segg",
  database: "taskdb",
});

pool.on("connect", () => {
  console.log("Database connected");
});
