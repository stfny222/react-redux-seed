import MainPage from '../../components/Main'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import { increment } from '../../redux/actions'

const mapStateToProps = (state) => {
  return {
    count: state.app
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => {
      dispatch(increment())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
