const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString } = graphql;
const UserType = require('./types/user_type');

const RootMutation = new GraphQLObjectType({
  name: 'RootMutation',
  fields: {
    signup: {
      type: UserType,

      args: {
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },

      resolve: (parentValue, args, request) => {
        console.log('Args are: ', args);
      }
    }
  }
});

module.exports = RootMutation;
