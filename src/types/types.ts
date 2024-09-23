export interface User {
    firstname: string
    lastname: string
    email: string
    phone: string
    id: number
    login: {
        username: string
    }
}
export interface UsersState {
    users: User[]
    filteredUsers: User[]
    searchTerm: string
    mode: string
    isDarkMode: boolean
    sort: string
}

export interface UserInfoType {
    type: string
    infoTitle: string
    userDetail: string
}
