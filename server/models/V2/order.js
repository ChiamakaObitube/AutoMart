const orderQueries = {
  createQuery: `INSERT INTO
		orders("carId", "buyerEmail", "createdOn", "status", "price", "priceOffered")
	  VALUES($1, $2, $3, $4, $5, $6)
		returning * `,
};

export default orderQueries;
