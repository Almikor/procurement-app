import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Products from './Products';
import ProcurementList from './ProcurementList';
import ProcurementForm from './ProcurementForm';
import Contacts from './Contacts';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="container">
        <Products />
        <ProcurementList />
        <ProcurementForm />
        <Contacts />
      </div>
    </div>
  );
}

export default App;