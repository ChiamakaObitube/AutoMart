const carQueries = {
  createQuery: `INSERT INTO
		cars( "owner", "ownerEmail", "createdOn", "state", "status", "price", "manufacturer", "model", "bodyType", "imageUrl")
	  VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
		returning * `,
  getUserByIdQuery: 'SELECT email FROM users WHERE id = $1',
};

export default carQueries;
