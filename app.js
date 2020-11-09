const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));

// app.get('/echo', (req, res) => {
//     const responseText = `Here are some details of your request:
//     Base URL: ${req.baseUrl}
//     Host: ${req.hostname}
//     Path: ${req.path}
//   `;
//     res.send(responseText);
// });

app.get('/sum', (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const total = a + b;

    res.send("The sum of a and b is " + total);
});

app.get('/cipher', (req, res) => {
    const { text, shift } = req.query;
    const textToUpper = text.toUpperCase();

        for (let i = 0; i < text.length; i++) {
            //handle space character
            if (textToUpper.charCodeAt(i) === 32) {
                shift += textToUpper.charCodeAt(i);
            }
            else {
                shift += textToUpper.charCodeAt(i + 1);
            }
        }

    res.send(String.fromCharCode(shift));
});

app.get('/queryViewer', (req, res) => {
    console.log(req.query);
    res.end(); //do not send any data back to the client
});

app.get('/', (req, res) => {
    res.send('Hello Express!');
});

app.get('/pizza/pepperoni', (req, res) => {
    res.send('Your pizza is on the way!');
})

app.listen(8000, () => {
    console.log('Express server is listening on port 8000!');
});