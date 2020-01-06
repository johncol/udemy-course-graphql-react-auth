const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString } = graphql;

const UsertType = new GraphQLObjectType({
  name: 'UserType',
  fields: {
    name: { type: GraphQLString },
    email: { type: GraphQLString }
  }
});

module.exports = UsertType;
