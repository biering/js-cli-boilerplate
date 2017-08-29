export default function (vorpal) {
  vorpal
    .command('helloworld', 'Outputs "Hello World"')
    .alias('hw')
    .action((args, callback) => {
      this.log('Hello World!')
      callback()
    })
}
