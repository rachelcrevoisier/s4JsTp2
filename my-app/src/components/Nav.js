import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
const items = [
    {
        nom: "Accueil",
        lien: "/accueil"
    },
    {
        nom: "Produits",
        lien: "/produits"
    },

]
const Nav = () => {
    return (
        
        <><ul>
            {items.map((item) => (
               
                
               
                    <li key={item.nom}><Link to={item.lien}>{item.nom}</Link></li>
                
            ))}
            </ul>
        </>
    );
}
//set a defaut value (not mandatory)
Nav.defaultProps = {
    title: '<li><a href="accueil">Accueil</a></li><li> <a href="produits">Produits</a></li > '
}
//set a data type (not mandatory) : See error at the console log
Nav.propTypes = {
    title: PropTypes.string.isRequired
}
//passing style through const
// const headingStyle = {
// color: 'red',
// backgroundColor: 'black'
// }
export default Nav