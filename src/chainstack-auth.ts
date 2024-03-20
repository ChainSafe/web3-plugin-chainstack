export class ChainstackAuth {
  constructor(username: string, password: string);

  constructor(apiKey: string);

  constructor(
    public username?: string,
    public password?: string,
    public apiKey?: string
  ) {}
}
