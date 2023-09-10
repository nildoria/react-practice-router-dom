import { Routes, Route, Navigate } from 'react-router-dom';
// import Home from './components/Home';
import Hello from './components/Hello';
import About from './components/About';
import Services from './components/Services';
import Posts from './components/Posts';
import Post from './components/Post';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/hello" />} />
        <Route path="/hello/*" element={<Hello />}>
          <Route path="world" element={<p>This is world!</p>} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:postID" element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;
