const express = require('express')
const app = express()
const ejs = require('ejs')
const path = require('path')



app.use(express.static(path.join(__dirname, '/public')))

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, '/views'));

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/studyabroad', (req, res) => {
    res.render('services/study')
})

app.get('/canada', (req, res) => {
    res.render('countries/canada')
})


app.get('/Turkey', (req, res) => {
    res.render('countries/turkey')
})
app.get('/australia', (req, res) => {
    res.render('countries/australia')
})
app.get('/europe', (req, res) => {
    res.render('countries/europe')
})
app.get('/malaysia', (req, res) => {
    res.render('countries/malaysia')
})
app.get('/russia', (req, res) => {
    res.render('countries/russia')
})
app.get('/usa', (req, res) => {
    res.render('countries/usa')
})
app.get('/uae', (req, res) => {
    res.render('countries/uae')
})

app.get('/tourism', (req, res) => {
    res.render('services/tourism')
})
app.get('/business', (req, res) => {
    res.render('services/business')
})
app.get('/medical', (req, res) => {
    res.render('services/medical')
})


app.post('/enquire', (req, res) => {
    res.redirect('/')
})

app.get('/apply', (req, res) => {
    res.render('form/form')
})

app.listen('3000', () => {
    console.log('listening on port 3000')
})