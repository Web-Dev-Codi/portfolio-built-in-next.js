import 'dotenv/config';
import express from 'express';
import router from './routes/route.js';
import connectDB from './config/database.js';

const app = express();

const port = process.env.PORT || 5000;

connectDB();

app.use(express.json());

app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/success', (req, res) => res.render('success.html'));

app.use('/', router);

app.listen(port, (err) => {
    if (err) {
        console.log(`${err.message}`);
    } else {
        console.log(`Server is up and running on port ${port} brotha, Code Away and be patient`);
    }
});
