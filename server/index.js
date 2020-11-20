import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

// J'importe le router pour les routes POST
import postRoutes from './routes/posts.js';

// J'initialise l'application
const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// J'utilise le mv d'express pour connecter le router à l'application
// Chaque route dans postRoutes va commancer avec '/posts'
app.use('/posts', postRoutes);

app.get('/', (req, res) => {
    res.send('Hello to Memories API');
});

const PORT = process.env.PORT || 5000;

// Connexion à la BDD (2)
mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on port: ${PORT}`);
        })
    })
    .catch((err) => {
        console.log(err.message);
    });

mongoose.set('useFindAndModify', false);