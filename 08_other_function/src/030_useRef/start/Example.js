import { createPortal } from 'react-dom';
import { useState, useRef } from 'react';

const Portal = () => {
  let [videoFlg, setVideoFlg] = useState(false);

  let videoRef = useRef();
  return (
    <>
      <p>ここはビデオエリアです</p>
      <video ref={videoRef} style={{ width: '100%' }}>
        <source src='./sample.mp4'></source>
      </video>
      <button
        onClick={() => {
          if (!videoFlg) {
            videoRef.current.play();
          } else {
            videoRef.current.pause();
          }
          setVideoFlg((item) => !item);
        }}
      >
        {videoFlg ? 'STOP' : 'PLAY'}
      </button>
    </>
  );
};

export default () => {
  let [flg, setFlg] = useState(false);

  const PortalVideo = ({ children }) => {
    const target = document.querySelector('.videoarea');
    console.log(createPortal(children, target));
    return createPortal(children, target);
  };

  return (
    <>
      <div>
        <button
          onClick={() => {
            setFlg(!flg);
          }}
        >
          {flg ? 'ビデオプレーヤー非表示' : 'ビデオプレーヤー表示'}
        </button>
        <div className='videoarea'></div>
        {flg && (
          <PortalVideo>
            <Portal />
          </PortalVideo>
        )}
      </div>
    </>
  );
};
