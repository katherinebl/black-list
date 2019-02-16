import React, { Component } from 'react';
import {getPersons} from './services/peopleService';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      results: this.getSavedData()
    };

    this.getPeople();
  }

  saveData(newResults) {
    localStorage.setItem('blackData', JSON.stringify(newResults));
  }

  getSavedData() {
    const blackData = localStorage.getItem('blackData');

    if (blackData !== null) {
      return JSON.parse(blackData);
    } else {
      this.getPeople();
      return [];
    }
  }
    
  getPeople(){
    getPersons()
      .then(data => {

        const newResults = data.results.map((item, index) => {return {...item, id: index}});

        this.setState({
          results : newResults
        });
        this.saveData(newResults);
      });
  }

  render() {
    return (
      <div className="app">
        <h1 className="app__title">The Black List of Employees <span role="img" aria-label="bad">😈</span></h1>
        <ul className="app__list">
        {this.state.results.map(item => {
          return (
            <li className="app__list-item" id={item.id} key={item.id}>
              <div className="person">
                <h2 className="person__name">{`${item.name.first} ${item.name.last}`}</h2>
                <img className="person__image" src={item.picture.medium} alt={`${item.name.first} ${item.name.last}`}/>
                <div className="person__age">{item.dob.age}</div>
                <div className="person__city">{item.location.city}</div>
              </div>
            </li>
          );
        })}
        </ul>
      </div>
    );
  }
}

export default App;
