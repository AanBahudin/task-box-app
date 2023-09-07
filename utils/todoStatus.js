export const TODO_STATUS = {
    pending: 'pending', 
    onProgress:'on Progress', 
    completed: 'completed'
}

export const socialURLRegex = {
    twitter: new RegExp('^(?:https://)?(?:www\\.)?twitter\\.com/(\\w+)$', 'i'),
    instagram: new RegExp('^(?:https://)?(?:www\\.)?instagram\\.com/(\\w+)$', 'i')
}