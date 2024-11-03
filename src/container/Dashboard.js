import React, { useEffect, useState } from "react";
import { ProductList } from "../data/ProductList";
import ProductCart from "../components/ProductCart";

export default function Dashboard({ searchQuery }) {
  const [filteredItems, setfilteredItems] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      const filterItems = ProductList.filter((item) =>
        item.title.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
      );
      console.log(filterItems);
      setfilteredItems(filterItems);
    },[1000]);
  }, [searchQuery]);

  return (
    <div className="container min-vh-100 d-flex flex-wrap justify-content-center p-3">
      {filteredItems.map((item) => (
        <ProductCart {...item} key={item.id} />
      ))}
    </div>
  );
}
