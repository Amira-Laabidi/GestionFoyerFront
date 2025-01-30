import { Injectable } from '@angular/core';

const USER = 'c_user';
const TOKEN = 'c_token';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  // Save user information
  public saveUser(user: any): void {
    window.localStorage.removeItem(USER);
    window.localStorage.setItem(USER, JSON.stringify(user));
  }

  // Save token
  public saveToken(token: string): void {
    console.log('Saving token', token);
    window.localStorage.removeItem(TOKEN);
    window.localStorage.setItem(TOKEN, token);
  }

  // Retrieve token
  public static getToken(): string | null {
    return window.localStorage.getItem(TOKEN);
  }
//L'opérateur !! (double négation) :
//Convertit la valeur retournée par getToken() en un booléen.
//Si getToken() retourne une valeur non vide (comme un jeton valide), le résultat sera true.
//Si getToken() retourne null ou une valeur vide, le résultat sera false.
  // Check if a token exists
  public static hasToken(): boolean {
    return !!this.getToken();
  }

  // Retrieve user information
  public static getUser(): any | null {
    const user = window.localStorage.getItem(USER);
    return user ? JSON.parse(user) : null;
  }

  // Retrieve user role
  public static getUserRole(): string {
    const user = this.getUser();
    return user && user.role ? user.role : ''; // Safely return the role if available
  }

  // Check if admin is logged in
  public static isAdminLoggedIn(): boolean {
    return this.hasToken() && this.getUserRole() === 'ADMIN';
  }

  // Check if user is logged in
  public static isUserLoggedIn(): boolean {
    return this.hasToken() && this.getUserRole() === 'USER';
  }

  // Logout the user
  public static logout(): void {
    window.localStorage.removeItem(TOKEN); // Remove token
    window.localStorage.removeItem(USER);  // Remove user info
  }
}
