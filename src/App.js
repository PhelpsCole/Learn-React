import React, {useState, useRef, useMemo} from 'react';
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
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
    const [filter, setFilter] = useState({sort: '', query: ''})

    const sortedPosts = useMemo( () => {
        if (filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts;
    }, [filter.sort, posts])

    const sortedAndSearchedPosts = useMemo(() =>{
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
    }, [filter.query, sortedPosts])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{margin: '15px 0'}}/>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            <PostList remove={removePost} title="Список постов" posts={sortedAndSearchedPosts}/>
        </div>
    );
}

export default App;
