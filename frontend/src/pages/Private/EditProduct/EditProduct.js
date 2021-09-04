/* eslint-disable no-console */
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { Link, useRouteMatch, useHistory } from "react-router-dom";
import { getProduct, editProduct } from "../../../api";
import Button from "../../../components/Button";
import FloatInput from "../../../components/FloatInput";
import { PRIVATE } from "../../../constants/routes";
import withLayout from "../../../hoc/withLayout";

import editProductSchema from "./editProduct-schema";

function EditProduct({ type = "Edit Product" }) {
  const history = useHistory();

  const { productId } = useRouteMatch(
    `${PRIVATE.EDIT_PRODUCT}/:productId`,
  ).params;

  const makeStringIntoArray = (originalString) => {
    if (originalString.includes(",")) {
      return originalString.split(",");
    }
    return originalString;
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      mainImage: "",
      otherImages: "",
      price: "",
      unitsInStock: "",
      lens: "",
      description: "",
    },
    validationSchema: editProductSchema,
    onSubmit: (editProductState) => {
      // Building images object
      const imagesObject = {};
      imagesObject.main = editProductState.mainImage;
      imagesObject.others = makeStringIntoArray(editProductState.otherImages);

      // Building lens array
      const lensArray = makeStringIntoArray(editProductState.lens);

      const editedProduct = {
        id: productId,
        title: editProductState.title,
        price: editProductState.price,
        description: editProductState.description,
        images: imagesObject,
        lens: lensArray,
        unitsInStock: editProductState.unitsInStock,
      };

      editProduct(editedProduct)
        .then(() => {
          history.push(`${PRIVATE.DASHBOARD_PRODUCTS}`);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  });

  async function loadProduct() {
    try {
      const { data } = await getProduct(productId);
      const foundProduct = await data.foundProduct;

      formik.setValues({
        title: foundProduct.title,
        mainImage: foundProduct.images.main,
        otherImages: foundProduct.images.others.toString(),
        price: foundProduct.price,
        unitsInStock: foundProduct.unitsInStock,
        lens: foundProduct.lens.toString(),
        description: foundProduct.description,
      });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadProduct();
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-8">
          <p className="big-text">{type}</p>
          <form onSubmit={formik.handleSubmit}>
            <div className="col-8">
              <div className="row">
                <div className="col col-6">
                  <FloatInput
                    id="title"
                    type="text"
                    label="Product Name"
                    placeholder="Product Name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.title}
                    errorMessage={formik.errors.title}
                    hasErrorMessage={formik.touched.title}
                  />
                </div>
                <div className="col col-6">
                  <FloatInput
                    id="price"
                    type="number"
                    label="Product Price"
                    placeholder="Product Price"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.price}
                    errorMessage={formik.errors.price}
                    hasErrorMessage={formik.touched.price}
                  />
                </div>
                <div className="col col-12">
                  <FloatInput
                    id="description"
                    type="text"
                    label="Product Description"
                    placeholder="Product Description"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.description}
                    errorMessage={formik.errors.description}
                    hasErrorMessage={formik.touched.description}
                  />
                </div>

                <div className="col col-12">
                  <FloatInput
                    id="mainImage"
                    type="text"
                    label="Product Main Image URL"
                    placeholder="Product Main Image"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.mainImage}
                    errorMessage={formik.errors.mainImage}
                    hasErrorMessage={formik.touched.mainImage}
                  />
                </div>

                <div className="col col-12">
                  <FloatInput
                    id="otherImages"
                    type="text"
                    label="Other Images URL"
                    placeholder="Other Images"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.otherImages}
                    errorMessage={formik.errors.otherImages}
                    hasErrorMessage={formik.touched.otherImages}
                  />
                </div>

                <div className="col col-6">
                  <FloatInput
                    id="lens"
                    type="text"
                    label="Product Lens"
                    placeholder="Product Lens"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lens}
                    errorMessage={formik.errors.lens}
                    hasErrorMessage={formik.touched.lens}
                  />
                </div>
                <div className="col col-6">
                  <FloatInput
                    id="unitsInStock"
                    type="number"
                    label="Units in Stock"
                    placeholder="Units in Stock"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.unitsInStock}
                    errorMessage={formik.errors.unitsInStock}
                    hasErrorMessage={formik.touched.unitsInStock}
                  />
                </div>
              </div>
            </div>
            <div className="col col-12 d-flex big-mt justify-content-between">
              <div className="col col-3 button-wrapper w-25">
                <Link to={PRIVATE.DASHBOARD_PRODUCTS}>
                  <Button black>Back</Button>
                </Link>
              </div>
              <div className="col col-3 button-wrapper w-25">
                <Button black submitButton>
                  Edit Product
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default withLayout(EditProduct);
