const express = require ('express');
const path = require ('path');
// const { clog } = require(`./middleware/clog`);
const api = require('./routes/api.js');
const notes = require('./routes/notes.js');



const PORT = process.env.PORT || 3001;

const app = express();

// import custom middleware
// app.use(clog);

app.use(express.static('public', { extensions: ['html', 'htm'] }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', api);
app.use('/notes', notes);

app.get('*', (req, res) => 
res.sendFile(path.join(__dirname, '/public')));


app.listen(PORT, () => {
  console.log(`App listening @ http://localhost:${PORT}`)
});