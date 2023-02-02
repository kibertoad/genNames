const surnames = require('./surnames.json')
const females = require('./females.json')
const males = require('./males.json')

export type GeneratedName = {
  first: string
  last?: string
}

export type GenNamesOptions = {
  gender?: 'male' | 'female' | false
  count?: number
  surname?: boolean
}

export function genNames(options: GenNamesOptions = {}): GeneratedName[] {
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
  const names: GeneratedName[] = []
  let x = 0
  while (x < count) {
    const rand = Math.floor(Math.random() * gpool.length)
    let tempFirst = gpool[rand].toLowerCase()
    let tempFirstArr = tempFirst.split('')
    tempFirstArr[0] = tempFirstArr[0].toUpperCase()
    const resolvedFirst = tempFirstArr.join('')
    let resolvedLast
    if (surname) {
      const randl = Math.floor(Math.random() * lpool.length)
      let tempLast = lpool[randl].toLowerCase()
      let tempLastArr = tempLast.split('')
      tempLastArr[0] = tempLastArr[0].toUpperCase()
      resolvedLast = tempLastArr.join('')
    }
    names.push({
      first: resolvedFirst,
      last: resolvedLast
    })
    x++
  }
  return names
}
