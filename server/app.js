const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;
const swaggerUi = require("swagger-ui-express");
const swaggerDocs = require("./api-doc/swagger.json");
require("dotenv").config();

const doc = {
  info: {
    title: "API DOC",
    description: "this is documentation of api",
  },
  host: "localhost:3000",
};

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/images", express.static(path.join(__dirname, "image")));

const routes = require("./routes");
app.use(routes);

app.use(
  "/swagger",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocs, {
    explorer: true,
    customJs: [
      "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-bundle.min.js",
      "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-standalone-preset.min.js",
    ],
    customCssUrl: [
      "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.min.css",
      "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-standalone-preset.min.css",
      "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.css",
    ],
    swaggerOptions: {
      docExpansion: "none",
      persistAuthorization: true,
      urls: [
        {
          url: "/swagger/v1/swagger.json",
          name: "v1",
        },
      ],
    },
  })
);

app.listen(port, () => {
  console.log(`App is listen on ${port}`);
});
