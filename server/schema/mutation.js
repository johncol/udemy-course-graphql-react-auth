const graphql = require('graphql');
const UserType = require('./types/user_type');
const { signup, login } = require('./../services/auth');

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
    },

    login: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve: (_parentValue, { email, password }, request) => {
        return login({ email, password, request });
      }
    },

    logout: {
      type: UserType,
      resolve: (_parentValue, _args, request) => {
        const { user } = request;
        request.logout();
        return user;
      }
    }
  }
});

module.exports = RootMutation;
