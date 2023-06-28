// STYLE
import './Field.css';

interface FieldProps {
  onChange: (value: string) => void
  placeholder: string
  label: string
  value: string
  required: boolean
  type: string
}

const Field = ({type = 'text', label, placeholder, value, onChange, required = false}: FieldProps) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

export default Field;