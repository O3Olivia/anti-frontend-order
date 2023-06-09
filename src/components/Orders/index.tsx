import useFetchOrders from 'hooks/api/useFetchOrders';
import useOrderItem from 'hooks/useOrderItem';
import OrderItem from './OrderItem';
import * as $ from './Orders.styles';

const Orders = () => {
  const orders = useOrderItem();
  useFetchOrders();

  return (
    <$.OrdersSection>
      <div>
        {orders?.map(order => (
          <OrderItem key={order.id} {...order} />
        ))}
      </div>
    </$.OrdersSection>
  );
};

export default Orders;
