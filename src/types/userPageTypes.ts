export type userType = {
    id: number;
    name: string;
    email: string;
    phone: string;
    address: addressType;
    company: companyType;
    username: string;
    website: string;
}

export type addressType = {
    geo: geoType;
    lat: string;
    lng: string;
    city: string;
    suite: string;
    street: string;
    zipcode: string;
}

export type geoType = {
    lat: string;
    lng: string;
}

export type companyType = {
    bs: string;
    name: string;
    catchPhrase: string;
}
