const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const courses = ["Node.js", "React", "express", "MongoDB"   ];
    res.render('index', {  courses });
    });
    
app.listen(4000, () => console.log('Server is running on port 3000'));

