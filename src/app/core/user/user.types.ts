export interface ProfileUser {
    id: string;
    username: string;
    avatar?: string;
    status?: string;
    email: string;
    emailVerified: boolean;
    userProfileMetadata: UserProfileMetadata;
    attributes: Record<string, string[]>;
}


export interface UserProfileMetadata {
    attributes: Attribute[];
}

export interface Attribute {
    name: string;
    displayName: string;
    required: boolean;
    readOnly: boolean;
    validators: object;
}

export interface TokenPayload {
    exp:                number;
    iat:                number;
    jti:                string;
    iss:                string;
    aud:                string[];
    sub:                string;
    typ:                string;
    azp:                string;
    session_state:      string;
    acr:                string;
    "allowed-origins":  string[];
    realm_access:       RealmAccess;
    resource_access:    ResourceAccess;
    scope:              string;
    sid:                string;
    email_verified:     boolean;
    name:               string;
    preferred_username: string;
    given_name:         string;
    family_name:        string;
    email:              string;
}

export interface RealmAccess {
    roles: string[];
}

export interface ResourceAccess {
    "realm-management": RealmAccess;
    frontend:           RealmAccess;
    account:            RealmAccess;
}
