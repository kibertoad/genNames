const surnames = require('./surnames.json')
const females = require('./females.json')
const males = require('./males.json')

export type GenNamesOptions = {
  gender?: 'male' | 'female' | false
  count?: number
  surname?: boolean
}

export function genNames(options: GenNamesOptions = {}) {
  const gpool: string[] = []
  if (options.gender) {
    if (options.gender.toLowerCase() == 'female') {
      gpool.push(...females.names)
    } else if (options.gender.toLowerCase() == 'male') {
      gpool.push(...males.names)
    } else {
      gpool.push(...[...females.names, ...males.names])
    }
  } else {
    gpool.push(...[...females.names, ...males.names])
  }
  let count = 1
  if (options.count && !isNaN(options.count) && options.count > 0) {
    count = options.count
  }
  let surname = false
  let lpool
  if (options.surname) {
    surname = true
    lpool = surnames.names
  }
  const names = []
  let x = 0
  while (x < count) {
    const rand = Math.floor(Math.random() * gpool.length)
    const name: Record<string, any> = {}
    name.first = gpool[rand].toLowerCase()
    name.first = name.first.split('')
    name.first[0] = name.first[0].toUpperCase()
    name.first = name.first.join('')
    if (surname) {
      const randl = Math.floor(Math.random() * lpool.length)
      name.last = lpool[randl].toLowerCase()
      name.last = name.last.split('')
      name.last[0] = name.last[0].toUpperCase()
      name.last = name.last.join('')
    }
    names.push(name)
    x++
  }
  return names
}
