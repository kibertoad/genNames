import type { GenNamesOptions } from './index'
import { genNames } from './index'

const options: GenNamesOptions = {
  count: 10,
  gender: 'male',
  surname: true,
}

const result = genNames(options)
console.log('\nMales\n')
console.log(result)

const options2: GenNamesOptions = {
  count: 10,
  gender: 'females' as any,
  surname: true,
}

const result2 = genNames(options2)
console.log('\nFemales\n')
console.log(result2)

const options3: GenNamesOptions = {
  count: 10,
  gender: false,
  surname: false,
}

const result3 = genNames(options3)
console.log('\nRandom Gender with no Last Names\n')
console.log(result3)
