const flagQueries = {
  createQuery: `INSERT INTO
		flagged( "carId", "reason", "createdOn", "description", "reportedBy")
	  VALUES($1, $2, $3, $4, $5)
		returning * `,
};

export default flagQueries;
