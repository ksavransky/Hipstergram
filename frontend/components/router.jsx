import React from 'react';
//Router
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
//Components
import App from './app';
import SessionFormContainer from './session_form/session_form_container';
import PostIndexContainer from '../components/posts/post_index_container.jsx';
import UserShowContainer from '../components/users/user_show_container.js';
import UserProfileContainer from '../components/user_profile/user_profile_container.js';




class AppRouter extends React.Component{
  constructor(props){
    super(props);
    this._ensureLoggedIn = this._ensureLoggedIn.bind(this);
    this._redirectIfLoggedIn = this._redirectIfLoggedIn.bind(this);
  }

  _ensureLoggedIn(nextState, replace){
    const currentState = this.context.store.getState();
    const currentUser = currentState.session.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  }

  _redirectIfLoggedIn(nextState, replace){
    const currentState = this.context.store.getState();
    const currentUser = currentState.session.currentUser;
    if (currentUser) {
      replace('/');
    }
  }



  render(){
    return(
      <Router history={ hashHistory }>
        <Route path="/" component={ App } onEnter={this._ensureLoggedIn}>
            <Route path="/posts" component={ PostIndexContainer }/>
            <Route path="/users/:userId" component={ UserShowContainer }/>
            <Route path="/profile" component={ UserProfileContainer }/>
        </Route>
          <Route path="/login" component={ SessionFormContainer } onEnter={this._redirectIfLoggedIn}/>
          <Route path="/signup" component={ SessionFormContainer } onEnter={this._redirectIfLoggedIn}/>
      </Router>
    );
  }
}

AppRouter.contextTypes = {
  store: React.PropTypes.object.isRequired
};

export default AppRouter;
