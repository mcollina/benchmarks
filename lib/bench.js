#!/usr/bin/env node
'use strict'

const { fork } = require('child_process')
const ora = require('ora')
const path = require('path')
const { fire } = require('./autocannon')

const doBench = async (opts, handler) => {
    const spinner = ora(`Started ${handler}`).start()
    const forked = fork(path.join(__dirname, '..', 'benchmarks', handler))
    try {
        spinner.color = 'magenta'
        spinner.text = `Warming ${handler}`
        await fire(opts, handler, false)
    } catch (error) {
        return console.log(error)
    } finally {
        spinner.color = 'yellow'
        spinner.text = `Working ${handler}`
    }

    try {
        await fire(opts, handler, true)
        forked.kill('SIGINT')
        spinner.text = `Results saved for ${handler}`
        spinner.succeed()
        return true
    } catch (error) {
        return console.log(error)
    }
}

const start = async (opts, list) => {

    for (let i = 0; i < list.length; ++i) {
        await doBench(opts, list[i]);
    }
}

module.exports = start
