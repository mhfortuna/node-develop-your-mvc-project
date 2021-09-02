import React, { useState, useEffect } from "react";
import ProductList from "../../../components/ProductList";

import withLayout from "../../../hoc/withLayout";

import { getAllProducts } from "../../../api";

function Home() {
  const [productsData, setProductsData] = useState({});
  const [loadStatus, setLoadStatus] = useState({
    isError: false,
    isLoading: true,
  });

  async function loadAllProducts() {
    try {
      const { data } = await getAllProducts();
      setProductsData(data.foundProducts);
      setLoadStatus({ isError: false, isLoading: false });
    } catch (error) {
      setLoadStatus({ isError: true, isLoading: false, error: error });
    }
  }

  useEffect(() => {
    loadAllProducts();
  }, []);

  return (
    <div>
      <div className="row page-div">
        <div className="col col-8 page-left">
          {!loadStatus.isLoading && !loadStatus.isError && (
            <ProductList products={productsData} />
          )}
          {loadStatus.isLoading && !loadStatus.isError && (
            <h3>Currently loading...</h3>
          )}
          {loadStatus.isError && !loadStatus.isLoading && <h3>ERROR</h3>}
        </div>
      </div>
    </div>
  );
}

export default withLayout(Home);
