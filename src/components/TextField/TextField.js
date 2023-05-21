// STYLE
import './TextField.css';

export const TextField = (props) => {

  const handleChange = (e) => {
    props.onChange(e.target.value)
  }

  return ( 
    <div className="text_field">
      <label>{props.label}</label>
      <input value={props.value} type="text" placeholder={props.placeholder} onChange={handleChange} required={props.required} />
    </div>
   )
}