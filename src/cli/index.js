import config     from '../config'

import helloWorld from './command/hello-world'
import greeting   from './command/greeting'
import welcome    from './util/welcome'

export default function (vorpal) {
  vorpal
    .use(greeting)
    .use(helloWorld)
    .use(welcome)
    .delimiter(config.delimiter)
    .show()
}
