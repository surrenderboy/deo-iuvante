import ChatsListLayout from '../components/ChatsListLayout/ChatsListLayout';
import authorize, { SIGNED_IN_USERS_ONLY } from '../hocs/authorize';

export default authorize(SIGNED_IN_USERS_ONLY)(ChatsListLayout);
