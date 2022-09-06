import React, {useState} from 'react';
import {useRef} from 'react';
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import MySelect from "./components/UI/select/MySelect";
import './styles/App.css';

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: "JavaScript", body: "язык программирования"},
        {id: 2, title: "Python", body: "Python - язык программирования"},
        {id: 3, title: "C++", body: "C++ - лучший язык программирования"},
    ])
    const [selectedSort, setSelectedSort] = useState('')

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const sortPosts = (sort) => {
        setSelectedSort(sort);
        setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
    }

    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{margin: '15px 0'}}/>
            <div>
                <MySelect
                    value={selectedSort}
                    onChange={sortPosts}
                    defaultValue="Сортировка по"
                    option={[
                        {value: 'title', name: "По названию"},
                        {value: 'body', name: "По описанию"}
                    ]}
                />
            </div>
            {posts.length != 0
                ?
                <PostList remove={removePost} title="Список постов" posts={posts}/>
                :
                <h1 style={{textAlign: 'center'}}>
                    Посты не были найдены
                </h1>
            }
            
        </div>
    );
}

export default App;
