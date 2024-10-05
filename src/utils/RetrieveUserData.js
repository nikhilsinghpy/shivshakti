export function RetrieveUserData() {
    // Retrieve user data from local storage
    const userData = sessionStorage.getItem('data');
    if (userData) {
        return JSON.parse(userData);
    }
    return "user is Not Login yet or data is not available";
}