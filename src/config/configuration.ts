export const configuration = {
  database: {
    rootUsername: process.env.MYSQL_ROOT_USERNAME || 'root',
    rootPassword: process.env.MYSQL_ROOT_PASSWORD || 'root',
    dataSource: 'DATA_SOURCE',
  },
  users: {
    repository: 'USER_REPOSITORY',
  },
};
