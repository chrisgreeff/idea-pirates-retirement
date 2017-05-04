'use strict'

export default {
  generate: (prefix = '') => {
    let date = new Date().getTime()

    const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (char) => {
      const random = (date + Math.random() * 16) % 16 | 0

      date = Math.floor(date / 16)
      return (char === 'x' ? random : (random & 0x3 | 0x8)).toString(16)
    })

    return `${prefix}${uuid}`
  }
}
