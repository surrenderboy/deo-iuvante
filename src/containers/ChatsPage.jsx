import ChatsListLayout from '../components/ChatsListLayout/ChatsListLayout';
import authorize, { KNOWN_USERS_ONLY } from '../hocs/authorize';

export default authorize(KNOWN_USERS_ONLY)(ChatsListLayout);
