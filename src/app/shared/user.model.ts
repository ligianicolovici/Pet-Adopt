export class User {
  constructor(
    public email: string,
    public id: string,
    public _token: string,
    public _tokenExprirationDate: Date
  ) {}
}
