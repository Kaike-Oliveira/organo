// STYLE
import './Collaborator.css';

export const Collaborator = ({ name, image, cargo, backgroundColor }) => {
  return (
    <div className="collaborator">
      <div className="header" style={{ backgroundColor: backgroundColor }}>
        <img src={image} alt={name} />
      </div>
      <div className="footer">
        <h4>{name}</h4>
        <h5>{cargo}</h5>
      </div>
    </div>
  )
}