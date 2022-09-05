import React, {useState} from 'react';
import {useRef} from 'react';
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
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
    const [title, setTytle] = useState('')
    const bodyInputRef = useRef()
    const addNewPost = (e) => {
        e.preventDefault()
        console.log(title)
        console.log(bodyInputRef.current.value)
    }
    return (
        <div className="App">
            <form>
                {/*Управляемый компонент*/}
                <MyInput
                    value={title}
                    onChange = {e => setTytle(e.target.value)}
                    type="text"
                    placeholder="Название поста"
                />
                {/*Неуправляемый компонент*/}
                <MyInput
                    ref={bodyInputRef}
                    type="text"
                    placeholder="Описание поста"
                />
                <MyButton onClick={addNewPost}>Создать пост</MyButton>
            </form>
            <PostList title="Список постов 2" posts={posts2}/>
        </div>
    );
}

export default App;
