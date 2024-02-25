import './style.scss';

function practice() {
  return (
    <>
      <h1 className='h1 textCenter'>スタイルの当て方</h1>
      <section className='main'>
        <div className='main__item'>
          <h2 className='main__item--title'>SCSSで書いてる</h2>
          <p className='main__item--txt'>
            ReactではClass名を「ClassName」属性として付けるようにする。
          </p>
        </div>
      </section>
    </>
  );
}

export default practice;
