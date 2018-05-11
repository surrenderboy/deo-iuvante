import authorize, { SIGNED_IN_USERS_ONLY } from '../hocs/authorize';
import CreateChatLayout from '../components/CreateChatLayout/CreateChatLayout';

export default authorize(SIGNED_IN_USERS_ONLY)(CreateChatLayout);
