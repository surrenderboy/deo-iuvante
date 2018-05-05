import authorize, { KNOWN_USERS_ONLY } from '../hocs/authorize';
import CreateChatLayout from '../components/CreateChatLayout/CreateChatLayout';

export default authorize(KNOWN_USERS_ONLY)(CreateChatLayout);
