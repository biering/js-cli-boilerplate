import { greeting } from '@/lib'

export default function (vorpal) {
  vorpal
    .command('greeting', 'Outputs the greeting')
    .action((args, callback) => {
      this.log('Greetings traveler! This is just a boilerplate for building cli applications based on vorpal w/ Babel (ES6) + Webpack')
      this.log(greeting())
      callback()
    })
}
