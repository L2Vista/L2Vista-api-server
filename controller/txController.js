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
    hash,
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
      explorer.fromTx.messageId AS messageId,
      explorer.fromTx.blockTimstamp AS fromTimestamp,
      JSON_OBJECT(
          'timstamp', explorer.fromTx.blockTimstamp, 
          'chain', explorer.fromTx.chain,
          'hash', explorer.fromTx.hash
      ) AS "from",
      JSON_OBJECT(
          'timstamp', explorer.toTx.blockTimstamp, 
          'chain', explorer.toTx.chain,
          'hash', explorer.toTx.hash
      ) AS "to"
      FROM explorer.fromTx
      LEFT JOIN explorer.toTx
      ON explorer.fromTx.messageId = explorer.toTx.messageId
      `

  if (fromchain || tochain || hash) {
    sql += `WHERE `;
    if (fromchain) sql += `explorer.fromTx.chain = ${fromchain} `;
    if (tochain) {
      if (fromchain) sql += `AND `;
      sql += `explorer.toTx.chain = ${tochain} `
    };
    if (hash) {
      if (fromchain || tochain) sql += `AND `;
      sql += `(explorer.fromTx.hash = "${hash}" OR explorer.toTx.hash = "${hash}") `
    };
  }

  sql += `) AS M
  ORDER BY fromTimestamp DESC
  LIMIT ${skip}, ${amount};`;

  try {
    const [results, fields] = await connection.execute(sql);
    return {
      txRequested: results
    };
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
    hash,
  } = query;

  const connection = await createConnection();

  let sql = `SELECT
  COUNT(*) AS num 
  FROM
  (
      SELECT
      explorer.fromTx.messageId AS messageId,
      explorer.fromTx.blockTimstamp AS fromTimestamp,
      JSON_OBJECT(
          'timstamp', explorer.fromTx.blockTimstamp, 
          'chain', explorer.fromTx.chain,
          'hash', explorer.fromTx.hash
      ) AS "from",
      JSON_OBJECT(
          'timstamp', explorer.toTx.blockTimstamp, 
          'chain', explorer.toTx.chain,
          'hash', explorer.toTx.hash
      ) AS "to"
      FROM explorer.fromTx
      LEFT JOIN explorer.toTx
      ON explorer.fromTx.messageId = explorer.toTx.messageId
      `

  if (fromchain || tochain || hash) {
    sql += `WHERE `;
    if (fromchain) sql += `explorer.fromTx.chain = ${fromchain} `;
    if (tochain) {
      if (fromchain) sql += `AND `;
      sql += `explorer.toTx.chain = ${tochain} `
    };
    if (hash) {
      if (fromchain || tochain) sql += `AND `;
      sql += `(explorer.fromTx.hash = "${hash}" OR explorer.toTx.hash = "${hash}") `
    };
  }

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