const flagQueries = {
  createQuery: `INSERT INTO
		flagged( "car_id", "reason", "created_on", "description", "reported_by")
	  VALUES($1, $2, $3, $4, $5)
		returning * `,
};

export default flagQueries;
