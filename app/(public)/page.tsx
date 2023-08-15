import PostCard from "@/components/PostC/PostCard";
import Slic_card from "@/components/Slider_lastP/Slider";
import { request } from "@/server/request";
import { CategoryTypes } from "@/types";
import { AxiosResponse } from "axios";
// import Image from "next/image";
// import Link from "next/link";


async function getData2() {
  try {
    let res: AxiosResponse<CategoryTypes[]> = await request("last-products");
    return res.data;
  } catch (err) {
    console.log(err);
    return []; // yoki boshqa bir xatolik muharriri bilan bo'sh array qaytarish mumkin
  }
}

async function getData() {
  try {
    let res: AxiosResponse<CategoryTypes[]> = await request("category")
    return res.data;
  } catch (err) {
    console.log(err);
  }
}


export default async function Home() {
  const lastProducts = await getData2();
  const categories = await getData();

  return (
    <main style={{padding: "20px 10px"}}>
      <h2 className="container" style={{padding: "20px 10px", textAlign: "center"}}>Yangi Mahsulotlar 👇👇👇</h2>
      <div className="container">
        <Slic_card lastproduc={lastProducts} />
      </div>
      <h2 className="container" style={{padding: "20px 10px", textAlign: "center"}}>Mahsulotlar Categoriasi 👇👇👇</h2>
      <div className="all_card_category container">
        {categories?.map((category) => (
          <div key={category._id} className="card_category"> 
              <PostCard key={category._id} {...category} />
          </div>
        ))}
      </div>
    </main>
  );
}
