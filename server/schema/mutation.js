const graphql = require('graphql');
const UserType = require('./types/user_type');
const { signup } = require('./../services/auth');

const { GraphQLObjectType, GraphQLString } = graphql;

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

      resolve: (_parentValue, { name, email, password }, request) => {
        return signup({ name, email, password, request });
      }
    }
  }
});

module.exports = RootMutation;
