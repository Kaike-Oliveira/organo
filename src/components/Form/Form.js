// CORE
import { useState } from 'react';

// STYLE
import './Form.css';

// COMPONENTS
import { TextField } from '../TextField/TextField';
import { Dropdown } from '../Dropdown/Dropdown';
import { Button } from '../Button/Button';

export const Form = (props) => {

  const[name, setName] = useState('');
  const[cargo, setCargo] = useState('');
  const[image, setImage] = useState('');
  const[team, setTeam] = useState('');

  const onSave = (e) => {
    e.preventDefault();
    props.onRegister({
      name,
      cargo,
      image,
      team,
    })
    setName('');
    setCargo('');
    setImage('');
    setTeam('');
  }

  return (
    <section className="form">
      <form onSubmit={onSave}>
        <h1>Fill in the data to create the collaborator's card</h1>
        <TextField
          label="Name"
          placeholder="Type your name"
          required
          value={name}
          onChange={value => setName(value)}
        />
        <TextField
          label="Cargo"
          placeholder="Type your office"
          required
          value={cargo}
          onChange={value => setCargo(value)}
        />
        <TextField
          label="Image"
          placeholder="Insert your image URL"
          required
          value={image}
          onChange={value => setImage(value)}
        />
        <Dropdown
          label="Teams"
          itens={props.teams}
          required
          value={team}
          onChange={value => setTeam(value)}
        />
        <Button>Create Card</Button>
      </form>
    </section>
  )
}