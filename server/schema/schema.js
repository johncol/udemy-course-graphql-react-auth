const graphql = require('graphql');
const { GraphQLSchema } = graphql;

const RootQueryType = require('./types/root_query_type');
const RootMutation = require('./mutation');

module.exports = new GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutation
});
