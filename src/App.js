import React, { Component } from 'react';
import {getPersons} from './services/peopleService';
import './App.scss';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      query: '',
      results: this.getSavedData()
    };
    this.getQuery = this.getQuery.bind(this);
  }

  getQuery(e) {
    const userQuery = e.currentTarget.value;
    this.setState({
      query : userQuery
    })
  }

  filterThis() {
    const filteredResults = this.state.results.filter(item => {
      const fullName = `${item.name.first} ${item.name.last}`;
      if (fullName.toUpperCase().includes(this.state.query.toUpperCase())) {
        return true;
      } else {
        return false;
      }
    });
    return filteredResults;
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
    const blackResults = this.filterThis();
    return (
      <div className="app">

        <header className="app__header">
          <h1 className="app__title">The Black List of Employees</h1>
          <div className="app__filter">
            <div className="app__filter-item">
              <input className="app__filter-full-name" type="text" placeholder="Search for the guilty..." onKeyUp={this.getQuery} />
            </div>
          </div>

        </header>

        <main className="app__main">
          <ul className="app__list">
          {blackResults.map(item => {
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

        </main>
      </div>
    );
  }
}

export default App;
