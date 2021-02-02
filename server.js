const express = require('express');

const app = express();
const path = require('path');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_DB_URI, { useNewUrlParse: true });
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database connected!'));

app.use(express.json());

app.use(express.static(path.join(__dirname,'build')));

app.use((req, res, next) => { 
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, PATCH');
    next();
});

const ProjectsRouter = require('./controllers/controller-projects');

app.use('/api/projects', ProjectsRouter);

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

const port = process.env.Port || 3000;
app.listen(port, () => console.log(`Server started on port ${port}!`));