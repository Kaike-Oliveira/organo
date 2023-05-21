// STYLE
import './Team.css';

// COMPONENTS
import { Collaborator } from '../Collaborator/Collaborator';

export const Team = (props) => {
  return ( 
    props.collaborators.length > 0 && (
      <section className='team' style={{ backgroundColor: props.secondaryColor }}>
      <h3 style={{ color: props.primaryColor, borderColor: props.primaryColor }}>{props.name}</h3>
      <div className='collaborators'>
        {props.collaborators.map(collaborator => 
          <Collaborator
            backgroundColor={props.primaryColor}
            name={collaborator.name}
            cargo={collaborator.cargo}
            image={collaborator.image}
            key={collaborator.name}
          />
        )}
      </div>
    </section>
    )
   );
}