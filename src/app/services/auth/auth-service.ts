import { LocalDbService } from '@/services/local-db/local-db-service';
import { inject, Injectable, signal } from '@angular/core';

const TEMPORARY_USER_CREDENTIALS = [
  {
    username: 'teste',
    password: 'teste',
    name: 'Teste Credential',
    id: 'ab38f2c',
    token: 'a@f$fasdfg%asdASDF-123fasdF234F3',
  },
];

const AUTH_DB_KEY = 'AUTH_DATA';

export type User = { name: string };

export type AuthData = {
  user: User;
  token: string;
};

export type Error = { error: string; code: number };

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private localDbService = inject(LocalDbService);

  authData = signal<AuthData | undefined>(this.loadAuthData());

  async login(username: string, password: string): Promise<[User?, Error?]> {
    const validTemporaryCredentials = this.authenticate(username, password);
    if (validTemporaryCredentials) {
      const user = { name: validTemporaryCredentials.name };
      this.setAuthData(validTemporaryCredentials);
      return [user, undefined];
    } else {
      return [undefined, { error: 'Invalid credentials', code: 1 }];
    }
  }

  async logout() {
    this.localDbService.removeData(AUTH_DB_KEY);
  }

  async changePassword(username: string, newPassword: string) {}

  private authenticate(username: string, password: string) {
    const validTemporaryCredentials = TEMPORARY_USER_CREDENTIALS.find(
      (credential) => credential.username === username && credential.password === password
    );
    return validTemporaryCredentials;
  }

  private setAuthData(userData: { name: string; id: string; token: string }) {
    const user = { name: userData.name, id: userData.id };
    const authData: AuthData = {
      token: userData.token,
      user,
    };
    this.localDbService.setData(AUTH_DB_KEY, authData);
    this.authData.set(authData);
  }

  private loadAuthData() {
    const authData = this.localDbService.getData(AUTH_DB_KEY);
    return authData;
  }
}
