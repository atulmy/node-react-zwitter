import express from 'express';
import path from 'path';

let app = express();

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, './index.html'))
});

app.listen(3000, () => {
    console.log('Server Running on 3000');
});