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
    category,
    fromchain,
    tochain,
    hash,
    address,
    success,
    amount,
    skip,
  } = query;
  console.log(query)

  const connection = await createConnection();

  let sql = `SELECT
  M.messageId,
  M.category,
  M.from,
  M.to
  FROM
  (
      SELECT
      explorer.fromTx.messageId AS messageId,
      explorer.fromTx.blockTimestamp AS fromTimestamp,
      explorer.fromTx.category AS category,
      JSON_OBJECT(
          'from', explorer.fromTx.fromAddress, 
          'to', explorer.fromTx.toAddress, 
          'timestamp', explorer.fromTx.blockTimestamp, 
          'chain', explorer.fromTx.chain,
          'hash', explorer.fromTx.hash
      ) AS "from",
      JSON_OBJECT(
          'from', explorer.toTx.fromAddress, 
          'to', explorer.toTx.toAddress,
          'timestamp', explorer.toTx.blockTimestamp, 
          'chain', explorer.toTx.chain,
          'hash', explorer.toTx.hash
      ) AS "to"
      FROM explorer.fromTx
      LEFT JOIN explorer.toTx
      ON explorer.fromTx.messageId = explorer.toTx.messageId
      `

  if (fromchain || tochain || hash || category || address || success) {
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
    if (category) {
      if (fromchain || tochain || hash) sql += `AND `;
      sql += `(explorer.fromTx.category = "${category}") `
    };
    if (address) {
      if (fromchain || tochain || hash || category) sql += `AND `;
      sql += `(explorer.fromTx.fromAddress = "${address}" OR explorer.fromTx.toAddress = "${address}" OR explorer.toTx.fromAddress = "${address}" OR explorer.toTx.toAddress = "${address}") `
    };
    if (success) {
      if (fromchain || tochain || hash || category || address) sql += `AND `;
      sql += `(explorer.toTx.hash IS NOT NULL) `
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
    category,
    address,
    fromchain,
    tochain,
    success,
    hash,
  } = query;

  const connection = await createConnection();

  let sql = `SELECT
  COUNT(*) AS num 
  FROM
  (
      SELECT
      explorer.fromTx.messageId AS messageId,
      explorer.fromTx.blockTimestamp AS fromTimestamp,
      JSON_OBJECT(
          'timestamp', explorer.fromTx.blockTimestamp, 
          'chain', explorer.fromTx.chain,
          'hash', explorer.fromTx.hash
      ) AS "from",
      JSON_OBJECT(
          'timestamp', explorer.toTx.blockTimestamp, 
          'chain', explorer.toTx.chain,
          'hash', explorer.toTx.hash
      ) AS "to"
      FROM explorer.fromTx
      LEFT JOIN explorer.toTx
      ON explorer.fromTx.messageId = explorer.toTx.messageId
      `

  if (fromchain || tochain || hash || category || address || success) {
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
    if (category) {
      if (fromchain || tochain || hash) sql += `AND `;
      sql += `(explorer.fromTx.category = "${category}") `
    };
    if (address) {
      if (fromchain || tochain || hash || category) sql += `AND `;
      sql += `(explorer.fromTx.fromAddress = "${address}" OR explorer.fromTx.toAddress = "${address}" OR explorer.toTx.fromAddress = "${address}" OR explorer.toTx.toAddress = "${address}") `
    };
    if (success) {
      if (fromchain || tochain || hash || category || address) sql += `AND `;
      sql += `(explorer.toTx.hash IS NOT NULL) `
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

module.exports = {
  txRequestedsQuery,
  txTotalRequestedsQuery,
};