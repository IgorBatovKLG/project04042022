import React, {useMemo, useState} from 'react';
import './styles/App.css'
import PostList from "./Components/PostList";
import PostForm from "./Components/PostForm";
import MySelect from "./Components/UI/select/MySelect";
import MyInput from "./Components/UI/input/MyInput";
import PostFilter from "./Components/PostFilter";
import MyModal from "./Components/UI/Modal/MyModal";
import MyButton from "./Components/UI/button/MyButton";

function App() {

    const [posts, setPosts] = useState([
            {id:1, title:'Джава скрипт - 1 пост2', body:'Ну пиздим про скрипт короче'},
            {id:2, title:'Джава скрипт - 1 пост3', body:'Ну пиздим про скрипт короче'},
            {id:3, title:'Джава скрипт - 1 пост4', body:'Ну пиздим про скрипт короче'},
            {id:4, title:'Джава скрипт - 1 пост5', body:'Ну пиздим про скрипт короче'},
            {id:5, title:'Джава скрипт - 1 пост6', body:'Ну пиздим про скрипт короче'},
            {id:6, title:'Джава скрипт - 1 пост7', body:'Ну пиздим про скрипт короче'},
        ]
    )
    const [filter, setFilter] = useState({sort:'',query:''})
    const [modal, setModal] = useState(false)


    const sortedPost = useMemo(() => {
        console.log(123)
        if(filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts;
    },[filter.sort,posts])


    const sortedAndSearchedPost = useMemo(() => {
        return sortedPost.filter(post =>post.title.toLowerCase().includes(filter.query))
    },[filter.query, sortedPost])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts((posts.filter(p => p.id !== post.id)))
    }




    return(
        <div className='App'>
            <MyButton onClick = {() => setModal(true)}>Создать пользователя</MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>

          <PostFilter
                filter={filter}
                setFilter={setFilter}
          />
                <PostList
                    remove={removePost}
                    posts={sortedAndSearchedPost}
                    title='Список постов 1'
                />

        </div>
    )
}

export default App