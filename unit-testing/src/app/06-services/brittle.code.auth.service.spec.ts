import { AuthService } from './auth.service';

describe('Service: Auth', () => {

    let service: AuthService;

    beforeEach(() => {
        service = new AuthService();
    });

    afterEach(() => {
        service = null;
        // brittle code because depenance on localStorage. If change the storage type to
        // cookie following line code will break
        localStorage.removeItem('token');
    });

    it('should return true from isAuthenticated when there is a token', () => {
        localStorage.setItem('token', '1234');
        expect(service.isAuthenticated()).toBeTruthy();
    });

    it('should return false from isAuthenticated when there is no token', () => {
        expect(service.isAuthenticated()).toBeFalsy();
    });

});
