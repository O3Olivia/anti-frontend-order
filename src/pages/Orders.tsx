import Orders from 'components/Orders';
import Loading from 'components/UI/Loading';
import { Suspense } from 'react';

export default function OrdersPage() {
  return (
    <Suspense fallback={<Loading />}>
      <Orders />;
    </Suspense>
  );
}
