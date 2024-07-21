// utilities/localStorage.js


export const getRemindersLocal = (key) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
};


export const setRemindersLocal = (key, data) => {
    localStorage.setItem(key, data);
};


export const getUsers = (key) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
};


export const setUsers = (key, data) => {
    localStorage.setItem(key, data);
};


export const getIndex = (key) => {
    const index = localStorage.getItem(key);
    return index ? JSON.parse(index) : [-1];
};

export const setIndex = (key, index) => {
    localStorage.setItem(key, JSON.stringify(index));
};
