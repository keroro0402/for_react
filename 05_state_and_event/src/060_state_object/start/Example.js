import { useState } from 'react';
import Component from './Component';

const Example = () => {
  const personObj = { name: 'Tom', age: 18 };
  let [name, setName] = useState(personObj.name);
  let [age, setAge] = useState(personObj.age);
  return (
    <>
      <h3>Name : {name}</h3>
      <h3>Aeg : {age}</h3>
      <Component name={name} age={age} setName={setName} setAge={setAge} />
    </>
  );
};

export default Example;
