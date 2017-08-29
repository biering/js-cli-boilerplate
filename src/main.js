import vorpal from 'vorpal'

import cli    from './cli'

// start the cli
vorpal()
  .use(cli)
