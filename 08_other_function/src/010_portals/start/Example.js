import { useState } from 'react';
import { createPortal } from 'react-dom';
import Modal from './components/Modal';
const Portal = ({ children }) => {
  const target = document.querySelector('.cont');
  return createPortal(children, target);
};

let todoLists = [
  {
    task: '買い物',
    id: 1,
  },
  {
    task: '散歩',
    id: 2,
  },
  {
    task: 'デート',
    id: 3,
  },
];
export default () => {
  let [todos, setTodos] = useState(todoLists);
  let [add, setAdd] = useState('');
  let [flg, setFlg] = useState(false);

  let deleteTodos = (data) => {
    let newTodos = todos.filter((item) => {
      return item.id != data;
    });
    setTodos(newTodos);
  };

  const createTodo = (e) => {
    e.preventDefault();
    let newTodo = {
      task: add,
      id: Math.floor(Math.random() * 1e5),
    };
    if (!e.target[0].value) {
      return false;
    } else {
      setTodos([...todos, newTodo]);
      setAdd('');
    }
  };

  return (
    <>
      <div className='cont'></div>
      <button
        onClick={() => {
          setFlg(true);
        }}
      >
        表示
      </button>
      {flg && (
        <Portal>
          <Modal handleCloseClick={() => setFlg(false)} />
        </Portal>
      )}

      {todos.map((item) => {
        return (
          <p key={item.id}>
            <button
              onClick={() => {
                deleteTodos(item.id);
              }}
            >
              完了
            </button>
            : {item.task}
          </p>
        );
      })}

      <form onSubmit={createTodo}>
        <input
          type='text'
          value={add}
          onChange={(e) => {
            setAdd(e.target.value);
          }}
        />
        <button>追加</button>
      </form>
    </>
  );
};
