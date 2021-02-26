import React, { useState, useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import productList from "../mock/productList";
import ProductCard from "../component/card/ProductCard";
import axios from "axios";
import ImageUploading from "react-images-uploading";

export default function Home() {
  const [list, setList] = useState([]);
  const [productCode, setProductCode] = useState("");
  const [productName, setproductName] = useState("");
  const [productPrice, setproductPrice] = useState("");
  const [productQuantity, setproductQuantity] = useState("");
  const [productImage, setProductImage] = useState("");

  const maxNumber = 69;

  const getAPI = async () => {
    const result = await axios("http://localhost:3000/products");
    setList(result.data);
  };

  useEffect(async () => {
    getAPI();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      id: Math.floor(Math.random() * 99999 + 1),
      sku: productCode,
      name: productName,
      price: productPrice,
      qty: productQuantity,
      image: productImage
    };
    console.log(payload);
    axios.post(`http://localhost:3000/products`, payload).then((resp) => {
      if (resp.status === 201) {
          setproductQuantity(""),
          setProductCode(""),
          setproductName(""),
          setproductPrice(""),
          setProductImage("")
      }
    });
  };

  const formValidator = () => {
    if (
      productName !== "" &&
      productQuantity !== "" &&
      productCode !== "" &&
      productPrice !== "" &&
      productImage !== ""
    )
      return false;
    return true;
  };

  const handleRemove = (id) => {
    console.log(id);
    axios.delete(`http://localhost:3000/products/${id}`);
    getAPI();
  };

  return (
    <div>
      <h1>List product</h1>
      <div className={styles.form}>
        <form onSubmit={handleSubmit}>
          <div>
            <p>Kode Barang</p>
            <input
              type="text"
              name="sku"
              value={productCode}
              onChange={(e) => setProductCode(e.target.value)}
            />
          </div>
          <div>
            <p>Nama Barang</p>
            <input
              type="text"
              name="name"
              value={productName}
              onChange={(e) => setproductName(e.target.value)}
            />
          </div>
          <div>
            <p>Harga Barang</p>
            <input
              type="text"
              name="price"
              value={productPrice}
              onChange={(e) => setproductPrice(e.target.value)}
            />
          </div>
          <div>
            <p>Quantity</p>
            <input
              type="number"
              name="qty"
              value={productQuantity}
              onChange={(e) => setproductQuantity(e.target.value)}
            />
          </div>
          <div>
            <p>Image Barang</p>
            <ImageUploading 
              value={productImage}
              maxNumber={maxNumber}
              onChange={(imageList, addUpdateIndex) => setProductImage(imageList)}
              dataURLKey="data_url"
            >{({
              imageList,
              onImageUpload,
              onImageRemoveAll,
              onImageUpdate,
              onImageRemove,
              isDragging,
              dragProps,
            }) => (
              // write your building UI
              <div className="upload__image-wrapper">
                <button
                  style={isDragging ? { color: 'red' } : undefined}
                  onClick={onImageUpload}
                  {...dragProps}
                >
                  Click or Drop here
                </button>
                &nbsp;
                {imageList.map((image, index) => (
                  <div key={index} className="image-item">
                    <img src={image['data_url']} alt="" width="100" />
                    <div className="image-item__btn-wrapper">
                      <button onClick={() => onImageRemove(index)}>Remove</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </ImageUploading>
          </div>
          <button disabled={formValidator()} type="submit">
            Add Product
          </button>
        </form>
      </div>
      <div className={styles.product}>
        {list.map((listed, index) => {
          return (
            <ProductCard {...listed} key={index} handleRemove={handleRemove} />
          );
        })}
      </div>
    </div>
  );
}
