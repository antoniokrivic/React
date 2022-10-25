import React, { useState } from 'react';
  
function StudentForm(props) {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [age, setAge] = useState('');
  
  const changeName = (event) => {
    setName(event.target.value);
  };
  
  const changeCity = (event) => {
    setCity(event.target.value);
  };

  const changeAge = (event) => {
    setAge(event.target.value);
  };
  
  const transferValue = (event) => {
    event.preventDefault();
    const val = {
      name,
      city,
      age,
    };
    props.func(val);
    clearState();
  };
  
  const clearState = () => {
    setName('');
    setCity('');
    setAge('');
  };

  return (
    <div>
      <label>Name</label>
      <input type="text" value={name} onChange={changeName} />
      <label>City</label>
      <input type="text" value={city} onChange={changeCity} />
      <label>Age</label>
      <input type="text" value={name} onChange={changeAge} />
      <button onClick={transferValue}> Click Me</button>
    </div>
  );
}

export default Table;