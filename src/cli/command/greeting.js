export default function (vorpal) {
  vorpal
    .command('greeting', 'Outputs the greeting')
    .action((args, callback) => {
      this.log('Greetings traveler! This is just a boilerplate for building cli applications with Babel (ES6) / Webpack based on vorpal.')
      callback()
    })
}
