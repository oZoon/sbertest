export const randomString = length => {
    const str = 'qwertyuiopasdfghjklzxcvbnm'.split('');
    return Array(length).fill('').map(() => str[Math.floor(Math.random() * str.length)]).join('');
};
export const generatorNumber = count => Math.floor(count[0]) + Math.floor(Math.random() * (count[1] - count[0]));
