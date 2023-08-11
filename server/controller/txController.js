const mysql = require('mysql2/promise');
require("dotenv").config();

const dbConfig = {
  host: process.env.HOST,
  user: process.env.DB_USER,
  password: process.env.PASSWORD,
  port: process.env.DB_PORT,
  database: "explorer",
};

function createConnection() {
  return mysql.createConnection(dbConfig);
}

async function txRequestedsQuery(query) {

  const connection = await createConnection();

  const sql = `SELECT
  *
  FROM
  (
      SELECT
      explorer.fromtx.messageId AS messageId,
      JSON_OBJECT(
          'timstamp', explorer.fromtx.blockTimstamp, 
          'chain', explorer.fromtx.chain,
          'hash', explorer.fromtx.hash
      ) AS "from",
      JSON_OBJECT(
          'timstamp', explorer.totx.blockTimstamp, 
          'chain', explorer.totx.chain,
          'hash', explorer.totx.hash
      ) AS "to"
      FROM explorer.fromtx
      LEFT JOIN explorer.totx
      ON explorer.fromtx.messageId = explorer.totx.messageId
  ) AS M;`;

  try {
    const [results, fields] = await connection.execute(sql);
    return results;
  } catch (err) {
    console.error('Error during query:', err);
    throw err;
  } finally {
    await connection.end();
  }
}

// txRequestedsQuery().then(console.log)

module.exports = {
  txRequestedsQuery
};