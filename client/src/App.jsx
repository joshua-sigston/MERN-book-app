import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';

// Pages
import Home from './Pages/Home/home';
import About from './Pages/About/About';
import Books from './Pages/Books/Books';
import Book from './Pages/Book/Book'
import AddBook from './Pages/AddBook/AddBook';

// Components
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/books' element={<Books />} />
          <Route path='/books/:slug' element={<Book />} />
          <Route path='/add_book' element={<AddBook />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App