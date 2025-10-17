export const apiUrl = 'https://web-project.ddev.site/api/';
export const fileUrl = 'https://web-project.ddev.site/';
export const token = () => {
    const userInfo = localStorage.getItem('userInfo');
    const data = JSON.parse(userInfo);
    return data.token;
}
