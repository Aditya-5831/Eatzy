import express from 'express';

// Configuration
const app = express()

app.use(express.json())

app.listen(5000, () => console.log(`Server listening to the port 5000`))