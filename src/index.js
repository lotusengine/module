// Main function
module.exports = function (options, payload) {
  // Options contains all the options passed to the module
  const { minimum, maximum } = options

  // Check if a number
  if (isNaN(payload)) {
    // Return an error object.
    return {
      // Errors should always return this status
      status: 'error',
      // Must contain a CONSTANT_CASE error code
      code: 'INVALID_NUMBER',
      // Should contain a friendly error message
      message: 'Payload is not a valid number'

    }
  }

  // Check min
  if (minimum && payload < minimum) {
    return {
      status: 'error',
      code: 'NUMBER_TOO_SMALL',
      message: 'The provided number is too small'
    }
  }

  // Check max
  if (maximum && payload > maximum) {
    return {
      status: 'error',
      code: 'NUMBER_TOO_LARGE',
      message: 'The provided number is too large'
    }
  }

  // We have valid number of the right range so let's return a success message
  return {
    // Success object should always return this status
    status: 'success',
    // Optionally a data object can be returned - nothing is needed in our case
    data: {}
  }
}
