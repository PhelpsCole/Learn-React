import {BrowserRouter, Router} from 'react-router-dom';
import About from './pages/About';
import Posts from './pages/Posts';

function App() {
    return (
        <BrowserRouter>
            <Router path="/about">
                <About/>
            </Router>
            <Router path="/posts">
                <Posts/>
            </Router>
        </BrowserRouter>
    )
}

export default App;
