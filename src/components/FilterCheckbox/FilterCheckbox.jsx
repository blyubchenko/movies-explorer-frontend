import "./FilterCheckbox.css";

function FilterCheckbox({onChekedShort, handelChekedShort}) {
  return (
    <label className="checkbox">
      <input className="checkbox__input" checked={onChekedShort} onChange={handelChekedShort} type="checkbox" name="shortfilm" />
      Короткометражки
      <span className="visible-checkbox"></span>
    </label>
  );
}

export default FilterCheckbox;
