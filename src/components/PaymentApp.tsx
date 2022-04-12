import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Auth from '../pages/auth/Auth';
import Info from '../pages/info/Info';
import Payment from '../pages/payment/Payment';
import Selection from '../pages/selection/Selection';

const PaymentApp: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/selection" element={<Selection />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </BrowserRouter>
  );
};

export default PaymentApp;
