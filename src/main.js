import vorpal from 'vorpal'

import { greeting } from 'greeting'
import cli          from './cli'

console.log(greeting())

// start the cli
vorpal()
  .use(cli)
