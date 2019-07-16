const orderQueries = {
  createOrderQuery: `INSERT INTO
		orders("car_id", "buyer", "created_on", "status", "amount")
	  VALUES($1, $2, $3, $4, $5)
		returning * `,
  allOrdersQuery: 'SELECT * FROM orders',
  specificOrderQuery: 'SELECT * FROM orders WHERE id = $1',
  getOrderByIdQuery: 'SELECT id FROM orders WHERE id = $1',
  updateOrderPriceQuery: 'UPDATE orders SET amount = $2 WHERE id = $1 returning id, car_id, buyer, amount AS new_price_offered, status ',
};

export default orderQueries;
