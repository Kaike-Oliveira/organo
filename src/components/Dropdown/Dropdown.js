// STYLE
import './Dropdown.css';

export const Dropdown = (props) => {
  return ( 
    <div className="dropdown">
      <label>{props.label}</label>
      <select required={props.required} value={props.value} onChange={e => props.onChange(e.target.value)}>
        <option value="">Select a team</option>
        {props.itens.map(item => <option key={item}>{item}</option>)}
      </select>
    </div>
   );
}