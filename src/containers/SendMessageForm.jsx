import { connect } from 'react-redux';

import cable from '../cable';
import MessageForm from '../components/MessageForm/MessageForm';

const mapDispatchToProps = (_, { roomId }) => ({
  onSubmit: message => cable.sendMessage({ body: message, room_id: roomId }),
});

export default connect(null, mapDispatchToProps)(MessageForm);
