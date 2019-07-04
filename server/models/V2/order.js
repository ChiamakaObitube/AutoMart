const orderQueries = {
  createOrderQuery: `INSERT INTO
		orders("carId", "buyerEmail", "createdOn", "status", "price", "priceoffered")
	  VALUES($1, $2, $3, $4, $5, $6)
		returning * `,
  allOrdersQuery: 'SELECT * FROM orders',
  specificOrderQuery: 'SELECT * FROM orders WHERE orderid = $1',
  getOrderByIdQuery: 'SELECT orderid FROM orders WHERE orderid = $1',
  updateOrderPriceQuery: 'UPDATE orders SET priceoffered = $2 WHERE orderid = $1 and status=\'pending\' returning orderid, priceoffered',
};

export default orderQueries;
