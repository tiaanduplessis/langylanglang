import { set, t } from '../'

test('if it sets and gets translation', () => {
  set('en', {
    greeting: 'Hi {bar}! how are you?',
    info: 'Bye buddy!'
  })

  expect(t('greeting', {
    bar: 'Tiaan',
    bing: 'mcface'
  })).toBe('Hi Tiaan! how are you?')
})
