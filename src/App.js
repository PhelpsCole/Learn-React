import React, {useState} from 'react';
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import './styles/App.css';

function App() {
        const [posts, setPosts] = useState([
            {id: 1, title: "JavaScript", body: "JavaScript - язык программирования"},
            {id: 2, title: "Python", body: "Python - язык программирования"},
            {id: 3, title: "C++", body: "C++ - лучший язык программирования"},
        ])
        const [posts2, setPosts2] = useState([
            {id: 1, title: "Ruby", body: "Ruby - язык программирования"},
            {id: 2, title: "Java", body: "Python - язык программирования"},
            {id: 3, title: "Go", body: "Go - лучший язык программирования"},
            {id: 4, title: "Rust", body: "C++ - лучший язык программирования"},
        ])
    return (
        <div className="App">
            <PostList title="Список постов" posts={posts}/>
            <PostList title="Список постов 2" posts={posts2}/>
        </div>
    );
}

export default App;
