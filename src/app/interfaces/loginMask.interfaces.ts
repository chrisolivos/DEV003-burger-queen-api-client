export interface LoginMask {
    accessToken: string,
    user: User
}
export interface User {
    id: number|null,
    adminaccess: Boolean,
    email: string,
    rol: string,
}
export interface Category {
   name: 'Desayuno'| 'Almuerzo';
   
}