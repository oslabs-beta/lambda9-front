export const ListFunctions = `
  query ListFunctions {
      listFunctions {
         items {
          id
          name
          definition
          logs {
            items {
              id
              functionId
              message
              timestamp
            }
          }
          numErrors
          numInvocations
        }
      }
  }
`;

export const CreateFunction = `
  mutation CreateFunction(
    $name: String!
    $definition: String!
    $projectName: String!
  ) {
    createFunction(input: {
      name: $name,
      definition: $definition
      projectName: $projectName
    }) {
      id
      name
      definition
      projectName
    }
  }
`;

export const AddLogToFunction = `
  mutation AddLogToFunction(
    $functionId: ID!
    $message: String!
    $timestamp: String!
  ) {
    addLogToFunction(input: {
      functionId: $functionId,
      message: $message
      timestamp: $timestamp
    }) {
      id
      message
      timestamp
      functionId
    }
  }
`;

export const SubscribeToNewFunctions = `
  subscription onCreateFunction {
    onCreateFunction {
      id
      name
      definition
      logs {
        items {
          message
        }
      }
      numErrors
      numInvocations
    }
  }
`;

export const SubscribeToNewLogs = `
  subscription onAddLogToFunction($functionId: String!) {
    onAddLogToFunction(functionId: $functionId) {
      id
      timestamp
      message
    }
  }
`;