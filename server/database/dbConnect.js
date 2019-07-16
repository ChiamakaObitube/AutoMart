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
  DROP TABLE IF EXISTS cars CASCADE;
  DROP TABLE IF EXISTS orders CASCADE;
  DROP TABLE IF EXISTS flagged CASCADE;

  CREATE TABLE users(
			"id" SERIAL NOT NULL PRIMARY KEY,
      "email" VARCHAR(100) UNIQUE NOT NULL,
			"first_name" VARCHAR(30) NOT NULL,
			"last_name" VARCHAR(30) NOT NULL,
			"password" VARCHAR(255) NOT NULL,
      "address" VARCHAR(100) NOT NULL,
      "is_admin" BOOLEAN
		);

    CREATE TABLE cars(
      "id" SERIAL NOT NULL PRIMARY KEY,
      "owner" INTEGER NOT NULL,
      "email" VARCHAR(100) NOT NULL,
      "created_on" TIMESTAMP,
      "state" VARCHAR(10) NOT NULL,
      "status" VARCHAR(10) NOT NULL,
      "price" FLOAT NOT NULL, 
      "manufacturer" VARCHAR(50) NOT NULL,
      "model" VARCHAR(50) NOT NULL,   
      "body_type" VARCHAR(50) NOT NULL,
      "image_url" VARCHAR(200) UNIQUE ,
      FOREIGN KEY(owner) REFERENCES users(id)
    );

     CREATE TABLE orders(
      "id" SERIAL NOT NULL PRIMARY KEY ,
      "car_id" INTEGER NOT NULL ,
      "buyer" INTEGER NOT NULL , 
      "created_on" TIMESTAMP,
      "status" VARCHAR(10) NOT NULL,
      "amount" FLOAT 
    );
    CREATE TABLE flagged(
     "id" SERIAL NOT NULL PRIMARY KEY,
     "car_id" BIGINT NOT NULL,
     "created_on" TIMESTAMP,
     "reason" VARCHAR(200) NOT NULL,
     "description" VARCHAR(400) NOT NULL,
     "reported_by" VARCHAR(100) NOT NULL
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
