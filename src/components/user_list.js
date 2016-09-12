import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions';

class UserList extends Component {
  componentWillMount(){
    this.props.fetchUsers();
  }

  renderUser(user){
    return (
      <div className="card card-block" key={user.id}>
        <h3 className="card-title">{ user.name }</h3>
        <p className="card-text">{ user.company.name }</p>
        <a className="btn btn-primary" href={ user.website } target="_blank">Website</a>
      </div>
    );
  }

  render(){
    return(
      <div className="user-list">
        { this.props.users.map(this.renderUser) }
      </div>
    )
  }
}

function mapStateToProps(state){
  return { users: state.users }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators( actions , dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
