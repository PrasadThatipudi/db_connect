import { Client } from "https://deno.land/x/postgres@v0.17.0/mod.ts";

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
  user: "postgres",
  database: "dvd_rental",
  hostname: "localhost",
  port: 5432,
  password: "PottiSatya27@SQL",
};

connectToDatabase(credentials);
