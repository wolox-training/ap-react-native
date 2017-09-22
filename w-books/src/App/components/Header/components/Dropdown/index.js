import React, {Component} from 'react';
import './styles.css';
import icon_user from '../../../../../assets/Header/user_dummy.png';

class Dropdown extends Component {
  state = {showDropdown: false}
  toggleMenu = () => {
    this.setState({showDropdown: !this.state.showDropdown})
  }
  componentWillMount() {
    window.onclick = (event) => {
      if (!event.target.matches('.Dropbtn')) {
        this.setState({showDropdown: false})
      }
    }
  }
  render() {
    return (
      <div className="Dropdown">
        <img className="Dropbtn" src={icon_user} alt="User Icon" onClick={this.toggleMenu} />
        {this.state.showDropdown ?
          <div className="Dropdown-content">
            <a href="#perfil">Perfil</a>
            <a href="#logout">Cerrar sesion</a>
          </div> : null
        }
      </div>
    )
  }
}

export default Dropdown;
