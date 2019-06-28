export const isObj = obj => typeof obj === 'function' || (typeof obj === 'object' && !!obj)

export const isFunc = func => func && typeof func === 'function'
