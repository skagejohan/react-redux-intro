import { connect } from 'react-redux'
import TopList from './top-list';

const mapStateToProps = (state) => {
  return {
    list: state.topList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

const CurrentTopList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TopList)

export default CurrentTopList
