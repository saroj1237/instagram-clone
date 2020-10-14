import React from "react";
import AppHeader from "./components/AppHeader";
import Post from "./components/Post";
import PostForm from "./components/PostForm";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <PostForm />
      <Post
        avatarUrl="https://images.unsplash.com/photo-1573341830496-e89fcae7f5eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
        postStatus="Welcome to the Magical Land of Narnia"
        imageUrl="https://images.unsplash.com/photo-1573341830496-e89fcae7f5eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
        userName="saroj1237"
      />
      <Post
        avatarUrl="https://images.unsplash.com/photo-1573341830496-e89fcae7f5eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
        postStatus="Welcome to the Magical Land of Narnia"
        imageUrl="https://images.unsplash.com/photo-1573341830496-e89fcae7f5eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
        userName="saroj1237"
      />
      <Post
        avatarUrl="https://images.unsplash.com/photo-1573341830496-e89fcae7f5eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
        postStatus="Welcome to the Magical Land of Narnia"
        imageUrl="https://images.unsplash.com/photo-1602623903143-ec799d6c5bf2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
        userName="saroj1237"
      />
    </div>
  );
}

export default App;
