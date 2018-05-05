import authorize, { KNOWN_USERS_ONLY } from '../hocs/authorize';
import Room from '../containers/Room';

export default authorize(KNOWN_USERS_ONLY)(Room);
