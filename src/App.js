// CORE
import { useState } from 'react';

// COMPONENTS
import { Banner } from './components/Banner/Banner';
import { Form } from './components/Form/Form';
import { Team } from './components/Team/Team';
import { Footer } from './components/Footer/Footer';

function App() {

  const teams = [
    {
      name: 'Programming School',
      primaryColor: '#57c278',
      secondaryColor: '#d9f7e9',
    },
    {
      name: 'Front-End',
      primaryColor: '#82CFFA',
      secondaryColor: '#E8F8FF',
    },
    {
      name: 'Data Science',
      primaryColor: '#A6D157',
      secondaryColor: '#F0F8E2',
    },
    {
      name: 'Devops',
      primaryColor: '#E06B69',
      secondaryColor: '#FDE7E8',
    },
    {
      name: 'UX and Design',
      primaryColor: '#D86EBF',
      secondaryColor: '#FAE5F5',
    },
    {
      name: 'Mobile',
      primaryColor: '#FEBA05',
      secondaryColor: '#FFF5D9',
    },
    {
      name: 'Innovation and Management',
      primaryColor: '#FF8A29',
      secondaryColor: '#FFEEDF',
    }
  ];

  const [collaborators, setCollaborators] = useState([]);

  const newCollaborator = (collaborator) => {
      setCollaborators([...collaborators, collaborator]);
  }

  return (
    <div className="App">
      <Banner />
      <Form onRegister={collaborator => newCollaborator(collaborator)} teams={teams.map(team => team.name)} />
      {teams.map(team =>
        <Team
          name={team.name}
          key={team.name}
          primaryColor={team.primaryColor}
          secondaryColor={team.secondaryColor}
          collaborators={collaborators.filter(collaborator => collaborator.team === team.name)}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
