import "jsr:@std/dotenv/load";
import { Client } from "https://deno.land/x/postgres@v0.17.0/mod.ts";

const debug = function (arg) {
  console.log(arg);
  return arg;
};

const displayConnectionSuccessMessage = (credentials) => {
  return console.log(
    `You successfully connected to database '${credentials.database}' with user '${credentials.user}'`
  );
};

const displayErrorMessage = (error) => {
  return console.log(`Error occurred:${error.message}`);
};

const connectToDatabase = (credentials) => {
  const client = new Client(credentials);

  client
    .connect()
    .then(() => displayConnectionSuccessMessage(credentials))
    .catch(displayErrorMessage)
    .finally(() => client.end());
};

const credentials = {
  user: Deno.env.get("USER_NAME"),
  database: Deno.env.get("DATABASE"),
  hostname: Deno.env.get("HOST"),
  port: Deno.env.get("PORT"),
  password: Deno.env.get("PASSWORD"),
};

connectToDatabase(credentials);
