require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./connectDB');
const Book = require('./Models/Book')

const app = express();
const PORT = process.env.PORT;


connectDB();
app.use(cors({credentials:true,origin:'http://localhost:5173'}));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use('/uploads', express.static('uploads'));

app.get('/api/books', async (req, res) => {
  try {
    const category = req.query.category;
    const filter = {};
    
    if (category) { filter.category = category};
    
    const data = await Book.find(filter).limit(4);
    res.json(data)
  } catch (error) {
    res.status(500).json({error: 'An error has occurred.'});
  }
})

app.get('/api/books/:slug', async (req, res) => {
  try {
    const slug = req.params.slug;
    
    const data = await Book.findOne({ slug: slug });
    res.json(data)
  } catch (error) {
    res.status(500).json({error: 'An error has occurred.'});
  }
});

app.post('/api/books/', async (req, res) => {
  try {
    console.log(req.body);
    const book = new Book({
      title: {
        type: req.body.title,
      },
      slug: {
        type: req.body.slug,
      },
      // description: {
      //   type: req.body.description,
      // },
      // image: {
      //   type: req.file.thumbnail,
      //   required: true
      // },
      // stars: {
      //   type: req.body.starts,
      // },
      // category: {
      //   type: req.body.stars,
      // },
    })

    await Book.create(book);
    res.json('Data Submitted')
  } catch (error) {
    res.status(500).json({error: 'An error has occurred.'});
  }
})



app.get('*', (req, res) => { res.sendStatus('404')});
app.listen(PORT, () => { console.log(`server is running on port ${PORT}`)});