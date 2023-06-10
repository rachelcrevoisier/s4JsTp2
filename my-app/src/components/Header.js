import PropTypes from 'prop-types'
import Button from './Buttons'

const Header = ({ title, onAdd, showAdd }) => {
    
    return (
        <header className='header'>
           
            <h1>{title}</h1>
           
           
            <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Fermer' : 'Ajouter'} onClick={onAdd} />
        </header>
    )
    
}
//set a defaut value (not mandatory)
Header.defaultProps = {
    title: 'Liste des produits'
}
//set a data type (not mandatory) : See error at the console log
Header.propTypes = {
    title: PropTypes.string.isRequired
}
//passing style through const
// const headingStyle = {
// color: 'red',
// backgroundColor: 'black'
// }
export default Header