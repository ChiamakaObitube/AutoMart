const orderQueries = {
  createOrderQuery: `INSERT INTO
		orders("car_id", "buyer", "created_on", "status", "price", "price_offered")
	  VALUES($1, $2, $3, $4, $5, $6)
		returning * `,
  allOrdersQuery: 'SELECT * FROM orders',
  specificOrderQuery: 'SELECT * FROM orders WHERE id = $1',
  getOrderByIdQuery: 'SELECT id FROM orders WHERE id = $1',
  updateOrderPriceQuery: 'UPDATE orders SET price_offered = $2 WHERE id = $1 returning * ',
};

export default orderQueries;
