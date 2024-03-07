export class ChainstackAuth {
  // TODO: check if it is possible to use username and password as alternative to the apiKey
  constructor(username: string, password: string);
  constructor(apiKey: string);
  constructor(public username?: string, public password?: string, public apiKey?: string) {}

  // TODO: check if the following methods are needed (and possibly) to get the access token and refresh token
  // async login() {
  //
  // }

  // async logout() {
  //
  // }

  // async getAccessToken() {
  //
  // }

  // async getRefreshToken() {
  //
  // }
}
