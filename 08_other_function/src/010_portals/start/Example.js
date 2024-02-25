import { createPortal } from 'react-dom';
import { useState } from 'react';
import Modal from './components/Modal';

export default () => {
  let [flg, setFlg] = useState(false);

  let PortalModal = ({ children }) => {
    let target = document.querySelector('.container.end');
    return createPortal(children, target);
  };

  return (
    <>
      <button
        disabled={flg}
        onClick={() => {
          setFlg(true);
        }}
      >
        {flg ? 'モーダルを非表示にする' : 'モーダルを表示にする'}
      </button>
      <div className='container end'></div>
      {flg && (
        <PortalModal>
          <Modal
            handleCloseClick={() => {
              setFlg(false);
            }}
          />
        </PortalModal>
      )}
    </>
  );
};
