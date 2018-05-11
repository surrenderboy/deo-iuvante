import { connect } from 'react-redux';

import UserForm from '../components/UserForm/UserForm';
import { updateCurrentUser } from '../actions/currentUser';

const mapStateToProps = (state) => {
  const { data, isUpdating } = state.currentUser;

  return {
    values: data,
    isSubmitting: isUpdating,
  };
};

const mapDispatchToProps = dispatch => ({ onSubmit: values => dispatch(updateCurrentUser(values)) });

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
