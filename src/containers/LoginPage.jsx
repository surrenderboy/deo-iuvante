import authorize, { NEW_USERS_ONLY } from '../hocs/authorize';
import LoginLayout from '../components/LoginLayout/LoginLayout';

export default authorize(NEW_USERS_ONLY)(LoginLayout);
