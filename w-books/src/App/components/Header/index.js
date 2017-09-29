import { withRouter } from 'react-router';
import { connect } from 'react-redux'
import { actionCreators as authActions } from '../../../redux/auth/actions.js'
import './styles.css';
import Header from './layout.js'

const mapDispatchToProps = (dispatch, ownProps) => ({
  onLogout: () => {
    dispatch(authActions.logOut())
  }
})

const HeaderContainer = connect(
  null, mapDispatchToProps
)(Header)

export default withRouter(connect()(HeaderContainer));
