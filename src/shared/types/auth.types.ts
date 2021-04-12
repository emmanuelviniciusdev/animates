export type LoginData = {
    email: string
    password: string
}

export type RegisterData = LoginData & {
    firstName: string
    lastName: string
}
