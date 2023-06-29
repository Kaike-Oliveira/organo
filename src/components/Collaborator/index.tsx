// STYLE
import './Collaborator.css'

// COMPONENTS
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

interface CollaboratorProps {
	collaborator: { id: string, name: string, image: string, cargo: string, favorite: string }
	onDelete: (id: string) => void,
	onFavorite: (id: string) => void,
	backgroundColor: string,
}


const Collaborator = ({ collaborator, backgroundColor, onDelete, onFavorite }: CollaboratorProps) => {
	function favorite() {
			onFavorite(collaborator.id);
	}

	const propsFavorite = {
			size: 30,
			onClick: favorite,
			color: "#000"
	}

	return (<div className="collaborator">
		<AiFillCloseCircle size={25} className="delete" onClick={() => onDelete(collaborator.id)} />
		<div className="header" style={{ backgroundColor: backgroundColor }}>
			<img src={collaborator.image} alt={collaborator.name} />
		</div>
		<div className="footer">
			<h4>{collaborator.name}</h4>
			<h5>{collaborator.cargo}</h5>
			<div className='favorite'>
				{collaborator.favorite
						? <AiFillHeart {...propsFavorite} />
						: <AiOutlineHeart {...propsFavorite} />
				}
			</div>
		</div>
	</div>)
}

export default Collaborator