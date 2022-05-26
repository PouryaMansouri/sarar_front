import Link from "next/link";
import React, { useEffect, useState } from "react";
import { http } from "../../service/callApi/api";
import MenuNavbar from "../ui/menuNavbar/index";
function MainMenu() {
  const [dataMenu, setDataMenu] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await http.get(
        "https://sarar-mansouri.fandogh.cloud/api/categories/navbar/"
      );
      if (response.status === 200) {
        setDataMenu(response.data);
        console.log("response", response);
      }
    }
    getData();
  }, []);

  return (
    <>
      <div className="header-bottom d-lg-show">
        <div className="container">
          <div className="header-left">
            <nav className="main-nav">
              <ul className="menu menu-active-underline">
                <li className="active">
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </li>
                {dataMenu.map(({ name, slug, subcategories }, index) => (
                  <MenuNavbar
                    key={index}
                    title={name}
                    url={slug}
                    sub={subcategories}
                  />
                ))}
                <li>
                  <a href="blog-classic.html">Blog</a>
                  <ul>
                    <li>
                      <a href="blog-classic.html">Classic</a>
                    </li>
                    <li>
                      <a href="blog-listing.html">Listing</a>
                    </li>
                    <li>
                      <a href="#">Grid</a>
                      <ul>
                        <li>
                          <a href="blog-grid-2col.html">Grid 2 columns</a>
                        </li>
                        <li>
                          <a href="blog-grid-3col.html">Grid 3 columns</a>
                        </li>
                        <li>
                          <a href="blog-grid-4col.html">Grid 4 columns</a>
                        </li>
                        <li>
                          <a href="blog-grid-sidebar.html">Grid sidebar</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Masonry</a>
                      <ul>
                        <li>
                          <a href="blog-masonry-2col.html">Masonry 2 columns</a>
                        </li>
                        <li>
                          <a href="blog-masonry-3col.html">Masonry 3 columns</a>
                        </li>
                        <li>
                          <a href="blog-masonry-4col.html">Masonry 4 columns</a>
                        </li>
                        <li>
                          <a href="blog-masonry-sidebar.html">
                            Masonry sidebar
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Mask</a>
                      <ul>
                        <li>
                          <a href="blog-mask-grid.html">Blog mask grid</a>
                        </li>
                        <li>
                          <a href="blog-mask-masonry.html">Blog mask masonry</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="post-single.html">Single Post</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainMenu;
