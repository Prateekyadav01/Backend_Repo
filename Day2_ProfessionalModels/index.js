// Structure we made

import express from 'express';
import dbConnect from './config/database.js';
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});
dbConnect()
.then(()=>{
    app.listen(3000, () => {
        console.log('Example app listening on port 3000!');
    });
    console.log("db successfully connected");
}).catch(err => console.log(err));



/*/  cookie parser
The work of cookie parser is to server access the cookie of user browser and also set it in the user browser

/*/
app.use(cors({
    origin : process.env.CORS_ORIGIN,
    Credential:true,
}))
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true}));

