#!/usr/bin/env node

import minimist from 'minimist'
import { rpsls } from '../lib/rpsls.js'
const args = minimist(process.argv.slice(2))

const helpmsg = `Usage: node-rpsls [SHOT]
Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!

  -h, --help        display this help message and exit
  -r, --rules       display the rules and exit

Examples:
  node-rpsls        Return JSON with single player RPSLS result.
                    e.g. {"player":"rock"}
  node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.
                    e.g {"player":"rock","opponent":"Spock","result":"lose"}`

const rulesmsg = `Rules for the Lizard-Spock Expansion of Rock Paper Scissors:

- Scissors CUTS Paper
- Paper COVERS Rock
- Rock SMOOSHES Lizard
- Lizard POISONS Spock
- Spock SMASHES Scissors
- Scissors DECAPITATES Lizard
- Lizard EATS Paper
- Paper DISPROVES Spock
- Spock VAPORIZES Rock
- Rock CRUSHES Scissors`

if (args.h || args.help) {
    console.log(helpmsg)
    process.exit(0)
}

if (args.r || args.rules) {
    console.log(datamsg)
    process.exit(0)
}

const unlabeled = args._[0]

try {
    var output = rpsls(unlabeled)
    console.log(JSON.stringify(output))
} catch (err) {
    console.error(e.message)
    console.log(helpmsg)
    console.log(rulesmsg)
}