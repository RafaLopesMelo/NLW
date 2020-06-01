import express from 'express';

const app = express();

app.get('/users', (req, res) => {
    res.json({
        "name": "Rafael Melo",
        "message": "Let's Rock!"
    })
})

app.listen(3333);