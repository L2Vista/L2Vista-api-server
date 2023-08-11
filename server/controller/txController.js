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
  const {
    fromchain,
    tochain,
    amount,
    skip,
  } = query;

  const connection = await createConnection();

  let sql = `SELECT
  M.messageId,
  M.from,
  M.to
  FROM
  (
      SELECT
      explorer.fromtx.messageId AS messageId,
      explorer.fromtx.blockTimstamp AS fromTimestamp,
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
      `

  if (fromchain && tochain) {
    sql += `
          WHERE explorer.fromtx.chain = ${fromchain} AND explorer.totx.chain = ${tochain}
        `
  } else if (fromchain && !tochain) {
    sql += `
          WHERE explorer.fromtx.chain = ${fromchain}
        `
  } else if (!fromchain && tochain) {
    sql += `
          WHERE explorer.totx.chain = ${tochain}
        `
  };

  sql += `) AS M
  ORDER BY fromTimestamp DESC
  LIMIT ${skip}, ${amount};`;

  try {
    const [results, fields] = await connection.execute(sql);
    return {txRequested: results};
  } catch (err) {
    console.error('Error during query:', err);
    throw err;
  } finally {
    await connection.end();
  }
}

async function txTotalRequestedsQuery(query) {
  const {
    fromchain,
    tochain,
  } = query;

  const connection = await createConnection();

  let sql = `SELECT
  COUNT(*) AS num 
  FROM
  (
      SELECT
      explorer.fromtx.messageId AS messageId,
      explorer.fromtx.blockTimstamp AS fromTimestamp,
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
      `

  if (fromchain && tochain) {
    sql += `
          WHERE explorer.fromtx.chain = ${fromchain} AND explorer.totx.chain = ${tochain}
        `
  } else if (fromchain && !tochain) {
    sql += `
          WHERE explorer.fromtx.chain = ${fromchain}
        `
  } else if (!fromchain && tochain) {
    sql += `
          WHERE explorer.totx.chain = ${tochain}
        `
  };

  sql += `) AS M;`;

  try {
    const [results, fields] = await connection.execute(sql);
    return results[0].num;
  } catch (err) {
    console.error('Error during query:', err);
    throw err;
  } finally {
    await connection.end();
  }
}

// txRequestedsQuery().then(console.log)

module.exports = {
  txRequestedsQuery,
  txTotalRequestedsQuery,
};