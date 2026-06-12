import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.status(200).send("Hello World! i'm jashwanth you are in acquisition");
});

export default app;