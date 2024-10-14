import express from "express";
import routes from "./routes/index.mjs"

const app =express();

app.use(express.json());
app.use(routes);

const PORT =process.env.PORT || 3000;


app.get("/", 
    (request, response, next)=>{
        console.log("Base URL");
        next();
    },
    (request, response) => {
        response.status(201).send({ msg: "Hello"});
});

app.listen(PORT, ()=> {
    console.log(`Running on Port ${PORT}`);
});
