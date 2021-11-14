const express = require('express');
const app = express();
const port = 3003;
const cors = require('cors');

app.use(cors());
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/hello/:vardas', (req, res) => {
    res.send(`Hello, ${req.params.vardas}`)
})

app.get('/sum/:a/:b', (req, res) => {
    res.send(`Sum: ${parseFloat(req.params.a) + parseFloat(req.params.b)}`)
})

app.get('/diff/:a/:b', (req, res) => {
    res.send(`Difference: ${parseFloat(req.params.a) - parseFloat(req.params.b)}`)
})

app.get('/multi/:a/:b', (req, res) => {
    res.send(`Multiplication: ${parseFloat(req.params.a) * parseFloat(req.params.b)}`)
})

app.get('/div/:a/:b', (req, res) => {
    res.send(`Division: ${parseFloat(req.params.a) / parseFloat(req.params.b)}`)
})

app.listen(port, () => {
    console.log(`App is working on: http://localhost:${port}`)
})

app.post('/calculator', (req, res) => {

    const d1 = parseFloat(req.body.d1);
    const d2 = parseFloat(req.body.d2);
    let answer;
    let errMsg;
    switch (req.body.action) {
        case '+':
            answer = d1 + d2;
            break;
        case '-':
            answer = d1 - d2;
            break;
        case '*':
            answer = d1 * d2;
            break;
        case '/':
            if (0 === d2) {
                errMsg = 'be sansu seni'
            } else {
                answer = d1 / d2;
            }
            break;
            default: errMsg = 'Wtf';
    }

    res.json({ 
        answer: answer,
        errMsg: errMsg
    });


    // res.json({ answer: 777 })
})