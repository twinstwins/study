const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");
//GraphQLスキーマ言語を記述してスキーマを構築する

//スキーマはあくまで定義のみで実際のデータ操作は行わない
const schema = buildSchema(`
type Query {
    hello:String
}`);

// リゾルバ関数 //リゾルバ関数は特定のフィールドのデータを返す関数（メソッド）であり、実際のデータ操作を行う部分
const root = {
  hello: () => {
    return "Helloworld!";
  },
};

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);
app.listen(4000);

console.log("Running a GraphQL API server at http://localhost:4000/graphql");
