'use strict'

import fs from 'fs'
import _ from 'lodash'
import scriptFilter from './utils/script-filter'

const tasks = fs.readdirSync('./gulp/tasks/').filter(scriptFilter)

_.forEach(tasks, (task) => require('./tasks/' + task))
