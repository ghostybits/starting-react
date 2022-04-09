const express = require('express');
const path = require('path');

const app = express();
const localStatic = express.static('dist');
const port = 3000;

app.use('/public', (req, res, next) => {
    return localStatic(req, res, next);
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
});


app.listen(port, () => {
    console.log(`My app is running on port ${port}`);
})