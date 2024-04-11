// Structure we made

import express from 'express';
import dbConnect from './config/database.js';
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});
dbConnect()
.then(()=>{
    console.log("db successfully connected");
}).catch(err => console.log(err));

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});

