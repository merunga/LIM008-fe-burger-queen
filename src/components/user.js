import React, { Component } from 'react';
import * as firebase from 'firebase';

class User extends Component {
    constructor() {
        super();
        this.state = {
          fullname: '',
        };
      };
      addUser = e => {
        e.preventDefault();
        const db = firebase.firestore();
        db.collection('users').add({
          fullname: this.state.fullname,
        })
        //limpiar los inputs
        this.setState({
          fullname: '',
        })
      }
      inputUser = e => {
        this.setState({
          [e.target.name]: e.target.value
        })
      }
      render() {
        return (
          <form onSubmit = {this.addUser}>
            <input
              type="text"
              name="fullname"
              placeholder="Nombre del cliente"
              onChange = {this.inputUser}
              value = {this.state.fullname}
            />
            <button type="submit">Enviar a cocina</button>
          </form>
        );
      };
};

export default User;
