import { useState } from 'react';
import './Example.scss';
export default () => {
  let [isSelected, setIsSelected] = useState(false);
  let [flg, setFlg] = useState(false);
  let [flg2, setFlg2] = useState(false);
  return (
    <>
      <button className='btn'>ボタン</button>
      <br></br>
      <button
        onClick={() => {
          setIsSelected((pre) => !pre);
        }}
        className={`btn ${isSelected ? 'selected' : ''}`} //三項演算子はかなり使うのでよく覚えておくこと
        // 変数a ? 　"A" : "B" 変数aがfalseyならBtruesyならAを代入する
      >
        ボタン
      </button>
      <br></br>
      <button className='icon__item__sun'>押す</button>
      <br></br>
      <br></br>
      <button
        className={`icon__item__dou ${flg ? 'selected2' : ''}`}
        onClick={() => {
          setFlg((pre) => !pre);
        }}
      >
        押す
      </button>
      <br></br>
      <br></br>
      <button
        onClick={() => {
          setFlg2((pre) => !pre);
        }}
        className={`${flg2 ? 'color1' : 'color2'}`}
      >
        押す３
      </button>
    </>
  );
};
