import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import itemRoutes from './src/routes/item';

const app: express.Express = express();

// Connect to MongoDB via Mongoose
mongoose.connect('mongodb://localhost:27017/crudApp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(bodyParser.json());

app.use('/items', itemRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
