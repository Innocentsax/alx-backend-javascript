const express = require('express');
const app = express();
app.listen(7865, () => console.log('API available on localhost port 7865'));

app.get('/', (req, res) => {
    res.end('Welcome to the payment system');
});
