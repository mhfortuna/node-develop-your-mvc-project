import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllProducts } from "../../../api";
import Button from "../../../components/Button/Button";
import DashButton from "../../../components/DashButton/DashButton";
import AddIcon from "../../../components/SVGIcons/AddIcon";
import ProductDashListing from "../../../components/ProductsDashListing/ProductDashListing";
import { PRIVATE } from "../../../constants/routes";

import withLayout from "../../../hoc/withLayout";

function ProductsDashboard() {
  const [productsData, setProductsData] = useState([]);
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

  const handleRemoved = (id) => {
    const newProductsData = productsData.filter(
      (product) => product._id !== id,
    );
    setProductsData(newProductsData);
  };

  useEffect(() => {
    loadAllProducts();
  }, []);

  return (
    <>
      <div className="d-flex mb-5">
        <div className="mt-5 me-3">
          <Link to="/admin/dashboard/employees">
            <Button transparent>Employees</Button>
          </Link>
        </div>
        <div className="mt-5 me-3">
          <Link to="/admin/dashboard/products">
            <Button black>Products</Button>
          </Link>
        </div>
      </div>

      <div className="table-responsive">
        {!loadStatus.isLoading && !loadStatus.isError && (
          <table className="table">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="customDark text-center font-semi-bold"
                >
                  Product ID
                </th>
                <th
                  scope="col"
                  className="customDark text-center font-semi-bold"
                >
                  Product Name
                </th>
                <th
                  scope="col"
                  className="customDark text-center font-semi-bold"
                >
                  Description
                </th>
                <th
                  scope="col"
                  className="customDark text-center font-semi-bold"
                >
                  Lens
                </th>
                <th
                  scope="col"
                  className="customDark text-center font-semi-bold"
                >
                  Image URL
                </th>
                <th
                  scope="col"
                  className="customDark text-center font-semi-bold"
                >
                  Price
                </th>
                <th
                  scope="col"
                  className="customDark text-center font-semi-bold"
                >
                  Stock
                </th>
                <th
                  scope="col"
                  className="customDark text-center font-semi-bold"
                >
                  <Link to={PRIVATE.NEW_PRODUCT}>
                    <DashButton dark>
                      <AddIcon />
                    </DashButton>
                  </Link>
                </th>
              </tr>
            </thead>
            <tbody>
              <ProductDashListing
                products={productsData}
                handleRemoved={handleRemoved}
              />
            </tbody>
          </table>
        )}
        {loadStatus.isLoading && !loadStatus.isError && (
          <h3>Currently loading...</h3>
        )}
        {loadStatus.isError && !loadStatus.isLoading && <h3>ERROR</h3>}
      </div>
    </>
  );
}

export default withLayout(ProductsDashboard);
