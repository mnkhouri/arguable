#!/usr/bin/env node

/*

  ___ run, usage ___ en_US ___
  usage: frobinate run [options] [file...] [file]

  options:

  -h, --help                  display this message
  -p, --processes     [count] number of processes to run in parallel
  -l, --level         [count] frobination level

  description:

  frobinate will reticuatle the splines in all of your happy doodle
  files, optional in parallel. The `--processes` option is the number of
  processes to run concurrently, defaulting to zero.

  ___ compile, usage ___ en_US ___
  usage: frobinate compile [options] [file...] [file]

  options:

  -h, --help                  display this message
  -s, --strict                strict interpretation of the ISO 33465
                              Frobination Standard.
  -p, --prefix                prefix for frobination identifiers

  description:

  `frobinate compile` will accelerate frobination by compling it to
  intermediate output interpreted code (IOIC) then frobinating the hell
  out it.
  ___ compile, $ ___ en_US  ___
  example: This is an example.
  ___ foo, bar, usage ___ en_US  ___
  usage: foo bar <baz>
  ___ . ___

*/
