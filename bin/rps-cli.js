#!/usr/bin/env node

import minimist from 'minimist'
import { rps } from '../lib/rpsls.js'
const args = minimist(process.argv.slice(2))

const helpmsg = `Usage: node-rps [SHOT]
Play Rock Paper Scissors (RPS)

  -h, --help      display this help message and exit
  -r, --rules     display the rules and exit

Examples:
  node-rps        Return JSON with single player RPS result.
                  e.g. {"player":"rock"}
  node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                  e.g {"player":"rock","opponent":"scissors","result":"win"}`

const rulesmsg = `Rules for Rock Paper Scissors:

- Scissors CUTS Paper
- Paper COVERS Rock
- Rock CRUSHES Scissors`

if (args.h || args.help) {
    console.log(helpmsg)
    process.exit(0)
}

if (args.r || args.rules) {
    console.log(rulesmsg)
    process.exit(0)
}

const unlabeled = args._[0]

try {
    var output = rps(unlabeled)
    console.log(JSON.stringify(output))
} catch (err) {
    console.error(unlabeled + " is out of range.")
    console.log(helpmsg)
    console.log(rulesmsg)
}