export interface LoginMask {
    accessToken: string,
    user: User
}
export interface User {
    adminaccess: boolean,
    email: string,
    id: string,
    rol: string
}