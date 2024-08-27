// utils/csrf.js
export function getCsrfToken() {
    const csrfToken = document.cookie
        .split('; ')
        .find(row => row.startsWith('csrftoken'))
        ?.split('=')[1];
    return csrfToken || '';
}
