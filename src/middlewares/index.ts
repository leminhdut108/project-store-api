import adminAuthenticate from './verifyAdminToken';
import authenticate from './verifyAuthToken';

const AuthMiddleWare = {
    adminAuthenticate,
    authenticate
}

export default AuthMiddleWare