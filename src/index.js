
import { isFunc, isObj } from './utils'

const MATCH_PATTERN = /{([a-zA-Z_-]+)}/g

let activeLocale = 'en'
let activeFallback = ''
let handleMissingKey
let locales = new Map()

locales.set(activeLocale, {})

export function locale (newLocale) {
  activeLocale = newLocale
  return activeLocale
}

export function set (locale, translations = {}) {
  if (isObj(locale)) {
    Object.keys(locale).forEach(currentLocale => {
      const current = locales.get(currentLocale) || {}
      locales.set(current, Object.assign(current, translations))
    })
  } else {
    const current = locales.get(locale) || {}
    locales.set(locale, Object.assign(current, translations))
  }

  return this
}

export function t (key, props = {}, lang) {
  const str = locales.get(lang || activeLocale || activeFallback)[key]

  return str.replace(MATCH_PATTERN, (_, key) => {
    if (!props[key]) {
      return handleMissingKey ? handleMissingKey(key, props, str) : ''
    }
    return props[key]
  })
}

export function onMissingKey (func) {
  if (isFunc(func)) {
    handleMissingKey = func
  }

  return this
}

export function fallback (newFallback) {
  activeFallback = newFallback
  return activeFallback
}

const langylanglang = {
  locale: locale,
  set: set,
  onMissingKey: onMissingKey,
  t: t,
  fallback: fallback
}

export default langylanglang
