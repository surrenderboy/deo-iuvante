import authorize, { NEW_USERS_ONLY } from '../hocs/authorize';
import FirstTime from '../components/FirstTime/FirstTime';

export default authorize(NEW_USERS_ONLY)(FirstTime);
