const URL = 'https://randomuser.me/api/?results=50';

const getPersons = () => fetch(URL).then(response => response.json());

export {getPersons};