const carQueries = {
  createQuery: `INSERT INTO
		cars( "owner", "email", "created_on", "state", "status", "price", "manufacturer", "model", "body_type", "image_url")
	  VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
		returning * `,
  getUserByIdQuery: 'SELECT email FROM users WHERE id = $1',
  allCarsQuery: 'SELECT * FROM cars',
  specificCarQuery: 'SELECT * FROM cars WHERE id = $1',
  getCarByIdQuery: 'SELECT id FROM cars WHERE id = $1',
  markCarAsSoldQuery: 'UPDATE cars SET status = $2 WHERE id = $1 returning * ',
  updateCarPriceQuery: 'UPDATE cars SET price = $2 WHERE id = $1 returning * ',
  availableCarsQuery: 'SELECT * FROM cars WHERE status = \'available\' ',
  deleteCarByIdQuery: 'DELETE FROM cars WHERE id = $1 returning *',
  newAvailableCarsQuery: 'SELECT * FROM cars WHERE status=\'available\' AND state=\'new\' ',
  usedAvailableCarsQuery: 'SELECT * FROM cars WHERE status=\'available\' AND state=\'used\' ',
};

export default carQueries;
