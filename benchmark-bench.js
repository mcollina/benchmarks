#!/usr/bin/env node
'use strict'

const bench = require('./lib/bench')

async function run() {

    const intervals = [10, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
    for (let i = 0; i < intervals.length; ++i) {
        const options = {
            connections: intervals[i],
            duration: 5,
            pipelining: 10
        };

        console.log('Connection:', intervals[i]);
        await bench(options, ['bare', 'express', 'hapi', 'koa', 'restify', 'fastify']);
    }
}

run();
