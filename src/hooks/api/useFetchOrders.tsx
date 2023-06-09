import ordersState from 'atoms/ordersState';
import axios from 'axios';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useSetRecoilState } from 'recoil';
import { Order } from 'types';

const useFetchOrders = () => {
  const setOrders = useSetRecoilState(ordersState);

  const fetchOrders = async () => {
    const response = await axios.get('/data/order.json');
    return response.data;
  };

  useQuery('orders', fetchOrders, {
    suspense: true,
    onSuccess: (data: Order[]) => {
      setOrders(data);
    },
  });
};

export default useFetchOrders;
