
const { format } = require('date-fns')

/**
 * Format datetime
 */
function timeFormatter(dbTime) {
  return format(new Date(dbTime), 'MM.dd HH:mm')
}

module.exports = {
  timeFormatter
}