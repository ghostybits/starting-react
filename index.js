const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/cum', (req, res) => {
    res.send('CUM CUM CUM CUM CUM CUM CUM CUM CUM');
});

app.listen(port, () => {
    console.log(`My app is running on port ${port}`);
})