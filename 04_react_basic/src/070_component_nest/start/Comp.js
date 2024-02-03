export default ({
  comp = (function () {
    return (
      <>
        <h2>propsがありません</h2>
      </>
    );
  })(),
}) => {
  return (
    <>
      <div className='comp'>
        <h2>この緑枠はCompからimportです。</h2>
      </div>
      <div>{comp}</div>
    </>
  );
};
