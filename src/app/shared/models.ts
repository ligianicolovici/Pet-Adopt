export interface AuthResponse {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}
export interface UserData {
  email: string;
  id: string;
  _token: string;
  _tokenExpirationDate: string;
}
