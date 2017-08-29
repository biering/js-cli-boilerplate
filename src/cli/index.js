import helloWorld from './command/hello-world'
import welcome    from './util/welcome'

export default function (vorpal) {
  vorpal
    .use(require('./command/greeting.js'))
    .use(helloWorld)
    .use(welcome)
    .delimiter('cli →')
    .show()
}
