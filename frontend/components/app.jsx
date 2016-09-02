import React from 'react';
import { Link } from 'react-router';
import NavBar from './navbar/navbar_container';
import PostIndexContainer from './posts/post_index_container.jsx';

const App = ({children}) => (
  <div>
    <header>
      <NavBar />
    </header>
    <PostIndexContainer />
    {children}
  </div>
);

export default App;
