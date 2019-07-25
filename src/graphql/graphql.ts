export const GetUser = `
  query GetUser(
      $id: String!
    ) {
      getUser(id: $id) {
        username
        profileImageUrl
        email
        phone
      }
    }
`
export const GetGraphData = `
query GetFunction(
    $id: ID!
  ) {
  getFunction(id: $id) {
    name
    invocationData {
      invocations
      timestamps
    }
  }
}
`
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
          lastModified
          projectName
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
