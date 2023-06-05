import SQLite from 'react-native-sqlite-storage';

const databaseName = 'YourDatabaseName.db';
const databaseVersion = '1.0';
const databaseDisplayname = 'Your Database Display Name';
const databaseSize = 200000; // 200000 bytes

const db = SQLite.openDatabase(
  databaseName,
  databaseVersion,
  databaseDisplayname,
  databaseSize
);

export default db;
