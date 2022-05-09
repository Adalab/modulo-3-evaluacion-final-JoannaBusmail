function Reset(props) {
  const handleResetBtn = () => {
    props.handleReset();
  };
  return <button onClick={handleResetBtn}>reset</button>;
}

export default Reset;
