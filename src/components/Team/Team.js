// CORE
import Collaborator from '../Collaborator/Collaborator'
import hexToRgba from 'hex-to-rgba';

// STYLE
import './Team.css'

const Team = ({ team, collaborators, onDelete, changeColor, onFavorite }) => {
		return (

				collaborators.length > 0 && <section className='team' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(team.color, '0.6') }}>
						<input type='color' className='input-color' value={team.color} onChange={e => {
								changeColor(e.target.value, team.id);
						}} />
						<h3 style={{ borderColor: team.color }}>{team.name}</h3>
						<div className='collaborators'>
								{collaborators.map((collaborator, index) => <Collaborator key={index} collaborator={collaborator} backgroundColor={team.color} onDelete={onDelete} onFavorite={onFavorite} />)}
						</div>
				</section>

		)
}

export default Team