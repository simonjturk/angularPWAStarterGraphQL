module.exports = {
    client: {
      service: {
        name: "your-service-name",
        url: "http://localhost:8080/v1/graphql",
        headers: {
          "x-hasura-admin-secret": "<your-admin-secret>"
        }
      }
    }
  };