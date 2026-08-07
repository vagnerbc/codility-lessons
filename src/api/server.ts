import { app } from "./app";

app.listen(3000, (err) => {
  if (err) {
    console.log(`Error on starting server: ${err.message}`);
  } else {
    console.log("Server started succesfully");
  }
});
