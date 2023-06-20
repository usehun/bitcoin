function CalBox({ onChange, label }) {
  return (
    <div>
      <input
        type="number"
        placeholder="put your money"
        onChange={onChange}
      ></input>

      <label>{label}</label>
    </div>
  );
}

export default CalBox;
