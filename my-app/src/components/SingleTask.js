import { FaTimes } from 'react-icons/fa'
import { FaPencilAlt } from 'react-icons/fa'
const SingleTask = ({ task, onDelete, onModifier }) => {
    return (
        <div className="task">
            <h3>{task.nom} <div className='icones'>
                <FaPencilAlt
                    style={{ color: 'green', cursor: 'pointer' }}
                    onClick={() => onModifier(task)}></FaPencilAlt>
                <FaTimes
                style={{ color: 'red', cursor: 'pointer' }}
                    onClick={() => onDelete(task.id)}></FaTimes></div></h3>
                <p>{task.description} - ${task.prix}</p>
                <p><i>{task.categorie}</i></p>
            
        </div>
    )
}
export default SingleTask