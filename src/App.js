import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Login from './Login';
import Footer from './Footer';
import BookList from './BookList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
    <div className="App">
    <Navbar />
    <Footer />

    <div className="content">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/booklist" element={<BookList />}></Route>
      </Routes>
    </div>
    </div>
  
    </Router>
    
  );

}

export default App;
