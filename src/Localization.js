const default_locale = {
    APP_HEADER : 'APP_HEADER',
    BTN_ADD : 'BTN_ADD',
    INP_PLACEHOLDER : 'INP_PLACEHOLDER'
}

const ru_locale = {
    APP_HEADER : 'Мои заметки',
    BTN_ADD : 'Добавить',
    INP_PLACEHOLDER : 'Введи задачу'
}

const en_locale = {
    APP_HEADER : 'My notes',
    BTN_ADD : 'Add',
    INP_PLACEHOLDER : 'Input task'
}

function _L(lang){
    if (lang === 'ru') return ru_locale
    if (lang === 'en') return en_locale
    return default_locale
}

export default _L