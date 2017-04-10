'use strict'

import path from 'path'

export default (filename) => /(\.(js|coffee)$)/i.test(path.extname(filename))
