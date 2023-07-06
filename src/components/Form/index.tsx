// CORE
import React, { useState } from 'react';

// STYLE
import './Form.css';

// COMPONENTS
import Field from '../Field';
import Dropdown from '../Dropdown';
import Button from '../Button';

// INTERFACE
import { ICollaborator } from '../../shared/interface/ICollaborator';

interface FormProps {
  onRegister: (collaborator: ICollaborator) => void,
  teams: string[],
  onCreateTeam: (teamName: string, teamColor: string) => void,
}

const Form = (props: FormProps) => {

  const[name, setName] = useState('');
  const[cargo, setCargo] = useState('');
  const[image, setImage] = useState('');
  const[team, setTeam] = useState('');
  const[teamName, setTeamName] = useState('');
  const[teamColor, setTeamColor] = useState('');

  const onSave = (e: React.FormEvent<HTMLFormElement>) => {
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
        <Field
          label="Name"
          placeholder="Type your name"
          required
          value={name}
          onChange={value => setName(value)}
        />
        <Field
          label="Cargo"
          placeholder="Type your office"
          required
          value={cargo}
          onChange={value => setCargo(value)}
        />
        <Field
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
      <form onSubmit={(e) => {
        e.preventDefault()
        props.onCreateTeam(teamName, teamColor)
      }}>
        <h1>Fill in the data to create a team</h1>
        <Field
          label="Team name"
          placeholder="Type a name to team"
          required
          value={teamName}
          onChange={value => setTeamName(value)}
        />
        <Field
          label="Color"
          type="color"
          placeholder="Type a color"
          required
          value={teamColor}
          onChange={value => setTeamColor(value)}
        />
        <Button>Create Team</Button>
      </form>
    </section>
  )
}

export default Form;