import decode from 'jwt-decode';

class AuthService {
  getProfile() {
    return decode(this.getToken());
  }

  loggedIn() {
    const token = this.getToken();
    return !this.isTokenExpired(token);
  }

  isTokenExpired(token) {
    // const decoded = decode(token);
    // if (decoded.exp < Date.now() / 1000) {
    //   localStorage.removeItem('id_token');
    //   return true;
    // }
    // return false;
    
    return token === null || token === undefined;
  }

  getToken() {
    return localStorage.getItem('id_token');
  }

  getUsername() {
    return localStorage.getItem('username');
  }

  getCurrentUser() {
    if(this.loggedIn()) {
      return { username: this.getUsername(), token: this.getToken()}
    }
    return ;
  };

  login(username, idToken) {
    localStorage.setItem('id_token', idToken);
    localStorage.setItem('username', username);
  }

  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('username');
  }
}

export default new AuthService();