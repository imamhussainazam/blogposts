
import PostsList from './features/posts/PostsList';
import AddPostForm from './features/posts/AddPostForm';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from './features/posts/Header';
import SinglePost from './features/posts/SinglePost';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<>
        <Header/>
        <PostsList/></>}/>

        <Route path="/new" element={<AddPostForm/>}/>
        <Route path="/:id" element={<SinglePost />}/>
        </Routes>
    </BrowserRouter>
     
     

    </div>
  );
}

export default App;