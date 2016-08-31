import React from 'react';
import { Link } from 'react-router';
import GreetingContainer from './greeting/greeting_container';
import PostIndexContainer from './posts/post_index_container.jsx';

const App = ({children}) => (
  <div>
    <header>
      <Link to="/" className="header-link"><h1>Hipstergram</h1></Link>
      <GreetingContainer />
    </header>
    <PostIndexContainer />
    {children}
  </div>
);

export default App;
