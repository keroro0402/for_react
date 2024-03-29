import { useState } from 'react';

const Example = () => {
  const [fruits, setFruits] = useState([
    { label: 'Apple', value: 100, checked: false },
    { label: 'Banana', value: 200, checked: false },
    { label: 'Cherry', value: 300, checked: false },
  ]);

  let [sum, setSum] = useState(0);

  const handleChange = (e) => {
    const newFruits = fruits.map((item) => {
      const newFruit = { ...item };
      if (newFruit.label === e.target.value) {
        newFruit.checked = !item.checked;
      }
      return newFruit;
    });
    setFruits(newFruits);

    let sumVal = 0;
    newFruits
      .filter((item) => {
        return item.checked;
      })
      .forEach((item) => {
        return (sumVal += item.value);
      });

    setSum(sumVal);
  };

  return (
    <>
      <div>
        {fruits.map((fruit) => {
          return (
            <div key={fruit.label}>
              <input
                id={fruit.label}
                type='checkbox'
                value={fruit.label}
                checked={fruit.checked}
                onChange={handleChange}
              />
              <label htmlFor={fruit.label}>
                {fruit.label}:{fruit.value}
              </label>
            </div>
          );
        })}
        <div>合計：{sum}</div>
      </div>
    </>
  );
};

export default Example;
