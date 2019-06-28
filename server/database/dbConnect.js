import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

pool.on('connect', () => {
  console.log('connected to the db');
});


const createTables = () => {
  const queryText = `
  DROP TABLE IF EXISTS users CASCADE;
  DROP TABLE IF EXISTS cars RESTRICT;
  DROP TABLE IF EXISTS orders CASCADE;
  DROP TABLE IF EXISTS flagged CASCADE;

  CREATE TABLE users(
			"id" SERIAL NOT NULL PRIMARY KEY,
			"firstName" VARCHAR(30) NOT NULL,
			"lastName" VARCHAR(30) NOT NULL,
			"email" VARCHAR(100) UNIQUE NOT NULL,
			"address" VARCHAR(100) NOT NULL,
			"password" VARCHAR(255) NOT NULL,
      "isAdmin" BOOLEAN
		);

    CREATE TABLE cars(
      "carid" SERIAL NOT NULL PRIMARY KEY,
      "owner" INTEGER NOT NULL ,
      "ownerEmail" VARCHAR(100) NOT NULL,
      "createdOn" TIMESTAMP,
      "model" VARCHAR(50) NOT NULL,
      "manufacturer" VARCHAR(50) NOT NULL,
      "price" FLOAT NOT NULL,
      "status" VARCHAR(10) NOT NULL,
      "state" VARCHAR(10) NOT NULL,
      "bodyType" VARCHAR(50) NOT NULL,
      "imageUrl" VARCHAR(200) UNIQUE NOT NULL,
      FOREIGN KEY(owner) REFERENCES users(id)
    );

     CREATE TABLE orders(
      "orderId" SERIAL NOT NULL PRIMARY KEY ,
      "carId" INTEGER NOT NULL ,
      "buyerEmail" VARCHAR(100) NOT NULL , 
      "createdOn" TIMESTAMP,
      "status" VARCHAR(10) NOT NULL,
      "price" FLOAT NOT NULL,
      "priceOffered" FLOAT NOT NULL 
			
    );
    CREATE TABLE flagged(
     "flaggedId" SERIAL NOT NULL PRIMARY KEY,
     "carId" BIGINT NOT NULL,
     "reason" VARCHAR(200) NOT NULL,
     "createdOn" TIMESTAMP,
     "description" VARCHAR(400) NOT NULL,
     "reportedBy" VARCHAR(100) NOT NULL
);
    `;

  pool.query(queryText)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
};

export default createTables();
