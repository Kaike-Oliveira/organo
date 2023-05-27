// STYLE
import './Field.css';

export const Field = ({type = 'text', label, placeholder, value, onChange, required = false}) => {

  const handleChange = (e) => {
    onChange(e.target.value)
  }

  return ( 
    <div className={`field field-${type}`}>
      <label>{label}</label>
      <input
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        required={required}
      />
    </div>
   )
}