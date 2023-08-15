"use client";


import { Pagination } from "antd";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { request } from "@/server/request";


interface Product {
  _id: string;
  title: string;
  image: {
    url: string;
  };
  sold: number;
  price: number;
}

const CategoryPage = () => {
  const [products, setProducts] = useState<{
    total: number;
    products: Product[];
  }>({
    total: 0,
    products: [],
  });
  const [page, setPage] = useState<number>(1);
  const router = useRouter();
  const { categoryId } = useParams();
  const Limit = 7;

  const getCateProducts = async () => {
    try {
      if (categoryId) {
        const { data } = await request(`product?category=${categoryId}`);
        setProducts(data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (categoryId) {
      getCateProducts();
    }
  }, [categoryId]);

  const changePage = (current: number) => {
    setPage(current);
    console.log(current);
  };

  return (
    <div className="container" style={{ padding: "20px 10px" }}>
      <div className="flex justify-between">
        <input
          type="text"
          placeholder="Search..."
          className="outline-none border-b-[1.4px]"
        />
      </div>
      <div className="all_card_category">
        {products?.products
          ?.slice((page - 1) * Limit, (page - 1) * Limit + Limit)
          .map((pr) => (
            <div key={pr._id} style={{ border: "1px solid gray" }}>
              <Image
                src={pr?.image?.url}
                alt="img"
                height={200}
                width={300}
                style={{
                  objectFit: "cover",
                  height: "250px",
                  width: "100%",
                  borderRadius: "3px 3px 0px 0px",
                }}
              />
              <div className="py-2 px-5">
                <h1 style={{ fontWeight: "700" }} className="text-center">
                  {pr?.title}
                </h1>
                <p className="text-center">Miqdor: {pr?.sold}</p>
                <p className="text-center">Narx: {pr?.price}</p>
                <button
                  style={{ border: "1px solid gray", width: "100%" }}
                >{`Qo'shish`}</button>
              </div>
            </div>
          ))}
      </div>
      {products.total !== 0 && (
        <div className="my-5 py-2 rounded flex justify-center bg-white bg-opacity-20 backdrop-blur-md">
          <Pagination
            onChange={changePage}
            defaultCurrent={page}
            pageSize={Limit}
            total={products.total}
          />
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
