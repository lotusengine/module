// Main function
module.exports = function (options, payload) {
  // Options contains all the options passed to the module
  const { minimum, maximum } = options

  // Keep track of errors
  const errors = []

  // Check if a number
  if (isNaN(payload)) {
    errors.push({
      // Must contain a CONSTANT_CASE error code
      code: 'INVALID_NUMBER',
      data: {} // Optional information to return - none in this case - shown for example
    })
    // Failed completely so we can just append to errors and return
    return {
      errors,
      result: {} // We could return partial results - none in this case - shown for example
    }
  }
  // Check min and max
  if (minimum && payload < minimum) {
    errors.push({ code: 'NUMBER_TOO_SMALL' })
  } else if (maximum && payload > maximum) {
    errors.push({ code: 'NUMBER_TOO_LARGE' })
  }

  // Check even - this can fail even if out of range above
  if (payload % 2 !== 0) {
    errors.push({ code: 'NUMBER_NOT_EVEN' })
  }

  // Return with any errors - if errors array is empty the function is successful
  return {
    errors
  }
}
