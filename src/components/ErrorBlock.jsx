function ErrorBlock(props) {
  return (
    <div className="error-block">
      <h2>{props.title}</h2>
      <p>{props.message}</p>
      <button className="close-btn" onClick={props.onClose}>
        X
      </button>
    </div>
  );
}

export default ErrorBlock;
