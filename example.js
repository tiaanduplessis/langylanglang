import { set, onMissingKey, t, locale } from './langylanglang'

set('en', {
  greeting: 'Hi {bar}! how are you?',
  info: 'Bye buddy!'
})

set('za', {
  greeting: 'Hi {bar}! Hoe gaan dit my bra?',
  info: 'Cheers tjom!'
})

onMissingKey((...args) => {
  console.log('Got missing key', args)
  return ''
})

console.log(
  t('greeting', {
    bar: 'Tiaan',
    bing: 'mcface'
  })
)

console.log(t('info'))

locale('za')

console.log(
  t('greeting', {
    bar: 'Tiaan',
    bing: 'mcface'
  })
)

console.log(t('info'))
