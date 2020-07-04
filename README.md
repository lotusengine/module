# LotusEngine Module Skeleton

## Description

Skeleton sample code to create a LotusEngine NodeJS module

This contrived sample shows the creation of a module to check the validity of a number as well as it's range (min/max) and also ensure it's an even number. The code exports a single function (defined as `main` in package.json) that accepts a `parameters` and `payload` options.

## Input fields

The function is provided two fields:

### Parameters field

The parameter field is an object provided at runtime and contains any parameters necessary for the module to run and should be defined in the configuration file.

### Payload field

The payload field can be anything - sring, object, etc. The function should not make assumptions about the provided format and should cast/handle things as needed.

## Output

The function should return any errors that may have occurred as well as a result objct if relevant. It is possible for a function to return multiple error codes as well as a partial result object depending on needs. For example a function may accept a list of customers to update - we would want to know each time an error occurred as well as return a list of result for the success calls.

### Example response

```
{
  errors: [{
    code: 'SOME_CONSTANT_CASE_CODE'
    data: {} // Optional - can be return to provide information relevant to error
  },  {
    code: 'SOME_OTHER_CODE'
  }],
  result: {} // Can be ommitted if no data needs to be returned
}
```

If the functiion just returns without data it is equivalent to:

````
  errors: [],
  results: {}
```

## Bundling, NodeJS version, etc

The main file should consist of a single export with no imported modules besides core NodeJS modules. The target Node version is `12.x`. You can use babel/webpack as needed to create the desired output.

## Configuration

The function configuration can either be defined in the `package.json` file under the `lotusengine` field or as a standalone `lotusengine.json` or `lotusengine.yml` file.

This file should define the function parameters as well as all error codes that may be returned. Refer to the example `lotusengine.json` file for an example.

The configuration file also accepts an `author`, `url`, `version`, `name` and `description` field. If these are not provided they will be taken from the core `package.json` fields. However these fields are provided they are required and are used for informational purposes by the end user when using/installing a module.

## Testing

All modules should contain unit tests but this is not enforced. We use Jest for community modules but authors of private modules are free to use their preferred runner.
````
