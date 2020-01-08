const graphql = require('graphql');
const { GraphQLObjectType } = graphql;
const UserType = require('./user_type');

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    currentUser: {
      type: UserType,
      resolve: (_parentValue, _args, request) => request.user
    }
  }
});

module.exports = RootQueryType;
