export declare type UserAttr = {
    department: string;
    manager: string;
    title: string;
};
export interface UserRoles {
    [x: string]: Array<string>;
}
export interface Identities {
    [x: string]: string;
}
export interface Scopes {
    [x: string]: string;
}
export declare type User = {
    id: string;
    attr: UserAttr;
    created_at: string;
    updated_at: string;
    display_name: string;
    enabled: boolean;
    email: string;
    picture: string;
    roles: UserRoles;
    identities: Identities;
    scopes: Scopes;
};
