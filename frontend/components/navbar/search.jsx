import React from 'react';
import { Link, hashHistory, withRouter } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';



class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: '',
      selectedLi: null
    };
    this.selectName = this.selectName.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleArrows = this.handleArrows.bind(this);
    this.names = [];
  }

  componentWillReceiveProps(newProps){
     let { users } = this.props;
     const userKeys = Object.keys(users);
     if(userKeys !== undefined){
     this.names = userKeys.map(key => users[key].username);
   }
  }

  handleInput(event) {
    this.setState({inputVal: event.currentTarget.value});
  }

  handleArrows(event) {

    if(this.state.inputVal == ""){
      this.setState({selectedLi: null});
    }

    let selectedLi = this.state.selectedLi;

    function resetBold(){
        $('.search-ul li').each((el) => {
          $($('.search-ul li')[el]).css('font-weight', 'normal');
        })
    }
    if(event.keyCode == 40 && $('.search-ul li').length > 0){
      resetBold();
      if(selectedLi == null || $('.search-ul li')[selectedLi + 1] == null){
        selectedLi = 0;
        this.setState({selectedLi: 0});
      }
      else {
        selectedLi += 1;
        this.setState({selectedLi: selectedLi});
      }
      $($('.search-ul li')[selectedLi]).css('font-weight', 'bold');
    }
    else if(event.keyCode == 38 && $('.search-ul li').length > 0){
      resetBold();
      if(selectedLi == null || selectedLi == 0){
        selectedLi = $('.search-ul li').length - 1;
        this.setState({selectedLi: selectedLi});
      }
      else {
        selectedLi -= 1;
        this.setState({selectedLi: selectedLi});
      }
      $($('.search-ul li')[selectedLi]).css('font-weight', 'bold');
    }
    else if(event.keyCode == 13){
      $($('.search-ul li')[selectedLi]).trigger('click');
      resetBold();
      this.setState({selectedLi: null});
    }
  }

  matches() {
    const matches = [];
    if (this.state.inputVal.length === 0) {
      return [];
    }

    this.names.forEach(name => {
      let sub = name.slice(0, this.state.inputVal.length);
      if (sub.toLowerCase() === this.state.inputVal.toLowerCase()) {
        matches.push(name);
      }
    });

    if (matches.length === 0) {
      matches.push('No matches');
    }

    return matches;
  }

  selectName(event) {
    let name = event.currentTarget.innerText;

    let { users } = this.props;
    const userKeys = Object.keys(users);
    userKeys.forEach((key) => {
      if(users[key].username === name){
        this.setState({inputVal: ""});
        this.props.router.replace("users/" + users[key].id);
      }
    });
    this.state.inputVal = '';
  }

  render() {
    let results = this.matches().map((result, i) => {
      return (
        <li className="search-dropdown-li" key={i} onClick={this.selectName}>{result}</li>
      );
    });
    return(
      <div>
        <div className='search-box'>
          <input className="search-input"
            onChange={this.handleInput}
            onKeyUp={this.handleArrows}
            value={this.state.inputVal}
            placeholder='Find Hipsters...'/>
          <ul className="search-ul">
            <ReactCSSTransitionGroup
              transitionName='auto'
              transitionEnterTimeout={500}
              transitionLeaveTimeout={500}
              className="search-drop-transition"
              >
              {results}
            </ReactCSSTransitionGroup>
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(Search);
