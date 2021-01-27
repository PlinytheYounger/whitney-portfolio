const BASE_URL = 'http://localhost:3001/';

export function postFormData() {
    return fetch(BASE_URL + '/send').then(res => res.json());
}