import React, { useState, useEffect } from "react";
import { http } from "../../service/callApi/api";

function index() {
  const [num, setNum] = useState(0);
  useEffect(() => {
    async function fetchData() {
      const { status, data } = await await http.get(
        "https://nakhll.com/api/v1/products/?search=%D9%84%D8%A8%D8%A7%D8%B3&page_size=50&max_price=100000000"
      );
      if (status === 200) {
        setNum(data.count);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <div style={{ padding: "20px" }} className="">
        <button
          onClick={() => {
            setNum(num + 1);
          }}
        >
          بزن روم
        </button>
      </div>

      <div className="">{num}</div>
    </>
  );
}

export default index;
