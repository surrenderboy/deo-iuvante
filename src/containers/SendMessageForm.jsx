import { connect } from 'react-redux';

import { sendMessage } from '../actions/messages';
import MessageForm from '../components/MessageForm/MessageForm';

const mapDispatchToProps = (dispatch, { roomId }) => ({
  onSubmit: message => dispatch(sendMessage(roomId, message)),
});

export default connect(null, mapDispatchToProps)(MessageForm);
