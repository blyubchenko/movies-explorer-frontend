import "./FilterCheckbox.css";

function FilterCheckbox() {
  return (
    <label className="checkbox">
      <input className="checkbox__input" type="checkbox" name="shortfilm" />
      Короткометражки
      <span className="visible-checkbox"></span>
    </label>
  );
}

export default FilterCheckbox;
