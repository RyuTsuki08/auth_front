export interface UserData{
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    created: Date;
    avatar: string;
    token: string;
}

export interface UserToRegister{
    username: string;
    email: string;
    password: string;   
}

