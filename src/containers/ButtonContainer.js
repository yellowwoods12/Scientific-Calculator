import { connect } from 'react-redux';
import Button from '../components/Button';

 
const mapDispatchToProps = dispatch => ({
    handleButtonClick: (actionCreator, value) => dispatch(actionCreator(value))
});

export default connect(undefined, mapDispatchToProps)(Button);

