import MainPage from '../../components/Main'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import { increment, decrement } from '../../redux/ducks/counter'

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => {
      dispatch(increment())
    },
    decrement: () => {
      dispatch(decrement())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
