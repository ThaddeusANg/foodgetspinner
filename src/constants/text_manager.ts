const textDictionary = {
    Login: 'Login',
    Logout: 'Logout'
}

export function getText(key: keyof typeof textDictionary, textParams?: string[]){
    return textDictionary[key];
}
