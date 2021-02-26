import React, { useState, useEffect } from "react";
import products from "../mock/productList";
import ProductCard from "../component/card/ProductCard";

export default function Search(props) {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const fetchData = (name) => fetch(`/api/search?name=${name}`).then(r => r.json())

  useEffect(() => {
    props.router.query.name && fetchData(props.router.query.name).then((resp) => setSearchResult(resp.results))
    console.log(props.router)
  }, [props.router.query.name]);

  return (
    <div>
      {searchResult.map((product, index) => {
        return <ProductCard {...product} key={index} />;
      })}
    </div>
  );
}
