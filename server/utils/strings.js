export const generateRandomUsername = () => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    let username = '';
    for (let i = 0; i < 4; i++) {
        const randomIndex = Math.floor(Math.random() * letters.length);
        username += letters.charAt(randomIndex);
    }
    for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * numbers.length);
        username += numbers.charAt(randomIndex);
    }

    return username;
};
