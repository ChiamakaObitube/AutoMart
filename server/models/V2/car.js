const carQueries = {
  createQuery: `INSERT INTO
		cars( "owner", "ownerEmail", "createdOn", "state", "status", "price", "manufacturer", "model", "bodyType", "imageUrl")
	  VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
		returning * `,
  getUserByIdQuery: 'SELECT email FROM users WHERE id = $1',
  allCarsQuery: 'SELECT * FROM cars',
  specificCarQuery: 'SELECT * FROM cars WHERE carid = $1',
  getCarByIdQuery: 'SELECT carid FROM cars WHERE carid = $1',
  markCarAsSoldQuery: 'UPDATE cars SET status = $2 WHERE carid = $1 returning carid, status',
  updateCarPriceQuery: 'UPDATE cars SET price = $2 WHERE carid = $1 and status=\'available\' returning carid, price',
  availableCarsQuery: 'SELECT * FROM cars WHERE status = \'available\' ',
  deleteCarByIdQuery: 'DELETE FROM cars WHERE carid = $1 returning *',
  newAvailableCarsQuery: 'SELECT * FROM cars WHERE status=\'available\' AND state=\'new\' ',
  usedAvailableCarsQuery: 'SELECT * FROM cars WHERE status=\'available\' AND state=\'used\' ',
};

export default carQueries;
