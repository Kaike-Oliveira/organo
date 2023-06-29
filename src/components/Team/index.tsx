// CORE
import hexToRgba from 'hex-to-rgba';

// COMPONENTS

// INTERFACE
import { ICollaborator } from '../../shared/interface/ICollaborator';

// STYLE
import './Team.css'
import Collaborator from '../Collaborator';

interface TeamProps {
	collaborators: ICollaborator[];
	team: { color: string, name: string, id: string },
	onDelete: (id: string) => void,
	changeColor: (color: string, id: string) => void,
	onFavorite: (id: string) => void,
}

const Team = ({ team, collaborators, onDelete, changeColor, onFavorite }: TeamProps) => {
		return (

				collaborators.length > 0 && <section className='team' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(team.color, '0.6') }}>
						<input type='color' className='input-color' value={team.color} onChange={e => {
								changeColor(e.target.value, team.id);
						}} />
						<h3 style={{ borderColor: team.color }}>{team.name}</h3>
						<div className='collaborators'>
								{collaborators.map((collaborator, index) =>
									<Collaborator
										key={index}
										collaborator={collaborator}
										backgroundColor={team.color}
										onDelete={onDelete}
										onFavorite={onFavorite}
									/>
								)}
						</div>
				</section>

		)
}

export default Team;