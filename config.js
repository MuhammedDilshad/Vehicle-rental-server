import Sequelize from "sequelize";

const sequelize = new Sequelize({
  database: "sqltech",
  username: "muhammeddilshad",
  password: "admin",
  host: "localhost",
  dialect: "postgres",
});

export default sequelize;
