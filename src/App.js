// CORE
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

// COMPONENTS
import Banner from "./components/Banner";
import Form from "./components/Form";
import Footer from "./components/Footer";
import Team from "./components/Team";

function App() {

  const [teams, setTeams] = useState([
    {
      id: uuidv4(),
      name: 'Programming',
      color: '#57C278'
    },
    {
      id: uuidv4(),
      name: 'Front-End',
      color: '#82CFFA'
    },
    {
      id: uuidv4(),
      name: 'Data Science',
      color: '#A6D157'
    },
    {
      id: uuidv4(),
      name: 'Devops',
      color: '#E06B69'
    },
    {
      id: uuidv4(),
      name: 'UX and Design',
      color: '#DB6EBF'
    },
    {
      id: uuidv4(),
      name: 'Mobile',
      color: '#FFBA05'
    },
    {
      id: uuidv4(),
      name: 'Innovation',
      color: '#FF8A29'
    },
  ]);

  const initial = [];

  const [collaborators, setCollaborators] = useState(initial);

  function deleteCollaborator(id) {
    setCollaborators(collaborators.filter(collaborator => collaborator.id !== id));
  };

  function changeColor(color, id) {
    setTeams(teams.map(team => {
      if(team.id === id) {
        team.color = color;
      }
      return team;
    }));
  };

  function registerTeam(newTeam) {
    setTeams([...teams, { ...newTeam, id: uuidv4() }]);
  };

  function resolveFavorite(id) {
    setCollaborators(collaborators.map(collaborator => {
      if(collaborator.id === id) collaborator.favorite = !collaborator.favorite;
      return collaborator;
    }));
  };


  return (
    <div>
      <Banner />
      <Form
        onCreateTeam={registerTeam}
        teams={teams.map(team => team.name)}
        onRegister={collaborator => setCollaborators([...collaborators, collaborator])}
      />
      <section className="teams">
        {teams.map((team, index) => <Team changeColor={changeColor} key={index} team={team} collaborators={collaborators.filter(collaborator => collaborator.team === team.name)} onDelete={deleteCollaborator} onFavorite={resolveFavorite} />)}
      </section>
      <Footer />
    </div>
  );
};

export default App;