import { connect } from 'react-redux';
import TopSolutionPanel from '../components/TopSolutionPanel'

const mapStateToProps = ({ SolutionReducer }) => ({ value: SolutionReducer.solutionDisplayValue });

 

export default connect(mapStateToProps ,undefined)(TopSolutionPanel);