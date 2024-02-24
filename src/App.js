import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios  from 'axios';

function App() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmail = (email) => {
    setEmail(email)
  }

  const onChangePassword = (password) => {
    setPassword(password)
  }

  const onSubmit =  (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/', { email, password})
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }

  return (
    <form className='container' onSubmit={(e) => onSubmit(e)}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input onChange={(e) => onChangeEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input onChange={(e) => onChangePassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" />
      </div>
      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}

export default App;
