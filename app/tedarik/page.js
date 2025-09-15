"use client"
import React from "react";
import styles from "./page.module.scss";
import Script from "next/script";
import { TbTriangleInvertedFilled } from "react-icons/tb";
import { FaCheck } from "react-icons/fa";
import { FaClipboardUser } from "react-icons/fa6";
import { FaLongArrowAltRight } from "react-icons/fa";
import { BiSolidFilePdf } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { HiLightBulb } from "react-icons/hi2";
import { FaFileSignature } from "react-icons/fa6";
import { FaTools } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";

function tedarik() {
  return (
    <main>
      <section id="section_one" className={`${styles.section_one}`}>
      </section>
      <section className={`${styles.section_two}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 pt-2">
              <div id="side_box" className={`${styles.side_box} ${styles.side_box_lg}`}>
                <div className={`${styles.filterContainer}`}>
                  <div className={`${styles.filterHeader}`}>
                    <h2 className={`${styles.mainTitle}`}>Gelişmiş filtreler</h2>
                    <a href="#" className={`${styles.resetLink}`}>Sıfırla</a>
                  </div>

                  <div className={`${styles.quickFilters}`}>
                    <h3 className={`${styles.subTitle}`}>Hızlı Filtreler</h3>
                    <div className={`${styles.checkboxItem}`}>
                      <input type="checkbox" id="newProducts" className={`${styles.checkbox}`} />
                      <label htmlFor="newProducts">Sadece Yeni Ürünler</label>
                    </div>
                    <div className={`${styles.checkboxItem}`}>
                      <input type="checkbox" id="featuredProducts" className={`${styles.checkbox}`} />
                      <label htmlFor="featuredProducts">Öne Çıkan Ürünler</label>
                    </div>
                  </div>

                  <div className={`${styles.filterSection}`}>
                    <h3 className={`${styles.subTitle}`}>Marka</h3>
                    <select className={`${styles.selectBox}`}>
                      <option value="">Seçiniz</option>
                      <option value="brand1">Terzi Group</option>
                      <option value="brand2">Elit Fabrics</option>
                    </select>
                  </div>

                  <div className={`${styles.filterSection}`}>
                    <h3 className={`${styles.subTitle}`}>Stok durumu</h3>
                    <select className={`${styles.selectBox}`}>
                      <option value="">Seçiniz</option>
                      <option value="inStock">Stokta Var</option>
                      <option value="outOfStock">Stokta Yok</option>
                    </select>
                  </div>

                  <div className={`${styles.filterSection}`}>
                    <h3 className={`${styles.subTitle}`}>Fiyat aralığı</h3>
                    <div className={`${styles.priceRange}`}>
                      <input type="number" placeholder="0" className={`${styles.priceInput}`} />
                      <span className={`${styles.rangeSeparator}`}>-</span>
                      <input type="number" placeholder="3000" className={`${styles.priceInput}`} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="content_box" className="col-lg-9">
              <div className="container">
                <h2 className="fw-bold">Ürünler:</h2>
                <div className="row">
                  <div className="col-md-3">
                    <div className={`${styles.productCard}`}>
                      <div className={`${styles.imageWrapper}`}>
                        <img src="/main/product.jpg" alt="Ürün" className={`${styles.productImage}`} />
                      </div>
                      <div className={`${styles.cardHeader}`}>
                        <h4 className={`${styles.cardTitle}`}>Apre Kimyasalları - Model 102</h4>
                        <span className={`${styles.badge}`}>Yeni</span>
                      </div>
                      <div className={`${styles.cardInfo}`}>
                        <p className={`${styles.stock}`}>Stokta var</p>
                        <p className={`${styles.delivery}`}>Teslimat: 2-3 gün</p>
                      </div>
                      <button className={`${styles.cardButton}`}>Satın Al</button>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className={`${styles.productCard}`}>
                      <div className={`${styles.imageWrapper}`}>
                        <img src="/main/product.jpg" alt="Ürün" className={`${styles.productImage}`} />
                      </div>
                      <div className={`${styles.cardHeader}`}>
                        <h4 className={`${styles.cardTitle}`}>Apre Kimyasalları - Model 102</h4>
                        <span className={`${styles.badge}`}>Yeni</span>
                      </div>
                      <div className={`${styles.cardInfo}`}>
                        <p className={`${styles.stock}`}>Stokta var</p>
                        <p className={`${styles.delivery}`}>Teslimat: 2-3 gün</p>
                      </div>
                      <button className={`${styles.cardButton}`}>Satın Al</button>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className={`${styles.productCard}`}>
                      <div className={`${styles.imageWrapper}`}>
                        <img src="/main/product.jpg" alt="Ürün" className={`${styles.productImage}`} />
                      </div>
                      <div className={`${styles.cardHeader}`}>
                        <h4 className={`${styles.cardTitle}`}>Apre Kimyasalları - Model 102</h4>
                        <span className={`${styles.badge}`}>Yeni</span>
                      </div>
                      <div className={`${styles.cardInfo}`}>
                        <p className={`${styles.stock}`}>Stokta var</p>
                        <p className={`${styles.delivery}`}>Teslimat: 2-3 gün</p>
                      </div>
                      <button className={`${styles.cardButton}`}>Satın Al</button>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className={`${styles.productCard}`}>
                      <div className={`${styles.imageWrapper}`}>
                        <img src="/main/product.jpg" alt="Ürün" className={`${styles.productImage}`} />
                      </div>
                      <div className={`${styles.cardHeader}`}>
                        <h4 className={`${styles.cardTitle}`}>Apre Kimyasalları - Model 102</h4>
                        <span className={`${styles.badge}`}>Yeni</span>
                      </div>
                      <div className={`${styles.cardInfo}`}>
                        <p className={`${styles.stock}`}>Stokta var</p>
                        <p className={`${styles.delivery}`}>Teslimat: 2-3 gün</p>
                      </div>
                      <button className={`${styles.cardButton}`}>Satın Al</button>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className={`${styles.productCard}`}>
                      <div className={`${styles.imageWrapper}`}>
                        <img src="/main/product.jpg" alt="Ürün" className={`${styles.productImage}`} />
                      </div>
                      <div className={`${styles.cardHeader}`}>
                        <h4 className={`${styles.cardTitle}`}>Apre Kimyasalları - Model 102</h4>
                        <span className={`${styles.badge}`}>Yeni</span>
                      </div>
                      <div className={`${styles.cardInfo}`}>
                        <p className={`${styles.stock}`}>Stokta var</p>
                        <p className={`${styles.delivery}`}>Teslimat: 2-3 gün</p>
                      </div>
                      <button className={`${styles.cardButton}`}>Satın Al</button>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className={`${styles.productCard}`}>
                      <div className={`${styles.imageWrapper}`}>
                        <img src="/main/product.jpg" alt="Ürün" className={`${styles.productImage}`} />
                      </div>
                      <div className={`${styles.cardHeader}`}>
                        <h4 className={`${styles.cardTitle}`}>Apre Kimyasalları - Model 102</h4>
                        <span className={`${styles.badge}`}>Yeni</span>
                      </div>
                      <div className={`${styles.cardInfo}`}>
                        <p className={`${styles.stock}`}>Stokta var</p>
                        <p className={`${styles.delivery}`}>Teslimat: 2-3 gün</p>
                      </div>
                      <button className={`${styles.cardButton}`}>Satın Al</button>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className={`${styles.productCard}`}>
                      <div className={`${styles.imageWrapper}`}>
                        <img src="/main/product.jpg" alt="Ürün" className={`${styles.productImage}`} />
                      </div>
                      <div className={`${styles.cardHeader}`}>
                        <h4 className={`${styles.cardTitle}`}>Apre Kimyasalları - Model 102</h4>
                        <span className={`${styles.badge}`}>Yeni</span>
                      </div>
                      <div className={`${styles.cardInfo}`}>
                        <p className={`${styles.stock}`}>Stokta var</p>
                        <p className={`${styles.delivery}`}>Teslimat: 2-3 gün</p>
                      </div>
                      <button className={`${styles.cardButton}`}>Satın Al</button>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className={`${styles.productCard}`}>
                      <div className={`${styles.imageWrapper}`}>
                        <img src="/main/product.jpg" alt="Ürün" className={`${styles.productImage}`} />
                      </div>
                      <div className={`${styles.cardHeader}`}>
                        <h4 className={`${styles.cardTitle}`}>Apre Kimyasalları - Model 102</h4>
                        <span className={`${styles.badge}`}>Yeni</span>
                      </div>
                      <div className={`${styles.cardInfo}`}>
                        <p className={`${styles.stock}`}>Stokta var</p>
                        <p className={`${styles.delivery}`}>Teslimat: 2-3 gün</p>
                      </div>
                      <button className={`${styles.cardButton}`}>Satın Al</button>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className={`${styles.productCard}`}>
                      <div className={`${styles.imageWrapper}`}>
                        <img src="/main/product.jpg" alt="Ürün" className={`${styles.productImage}`} />
                      </div>
                      <div className={`${styles.cardHeader}`}>
                        <h4 className={`${styles.cardTitle}`}>Apre Kimyasalları - Model 102</h4>
                        <span className={`${styles.badge}`}>Yeni</span>
                      </div>
                      <div className={`${styles.cardInfo}`}>
                        <p className={`${styles.stock}`}>Stokta var</p>
                        <p className={`${styles.delivery}`}>Teslimat: 2-3 gün</p>
                      </div>
                      <button className={`${styles.cardButton}`}>Satın Al</button>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className={`${styles.productCard}`}>
                      <div className={`${styles.imageWrapper}`}>
                        <img src="/main/product.jpg" alt="Ürün" className={`${styles.productImage}`} />
                      </div>
                      <div className={`${styles.cardHeader}`}>
                        <h4 className={`${styles.cardTitle}`}>Apre Kimyasalları - Model 102</h4>
                        <span className={`${styles.badge}`}>Yeni</span>
                      </div>
                      <div className={`${styles.cardInfo}`}>
                        <p className={`${styles.stock}`}>Stokta var</p>
                        <p className={`${styles.delivery}`}>Teslimat: 2-3 gün</p>
                      </div>
                      <button className={`${styles.cardButton}`}>Satın Al</button>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className={`${styles.productCard}`}>
                      <div className={`${styles.imageWrapper}`}>
                        <img src="/main/product.jpg" alt="Ürün" className={`${styles.productImage}`} />
                      </div>
                      <div className={`${styles.cardHeader}`}>
                        <h4 className={`${styles.cardTitle}`}>Apre Kimyasalları - Model 102</h4>
                        <span className={`${styles.badge}`}>Yeni</span>
                      </div>
                      <div className={`${styles.cardInfo}`}>
                        <p className={`${styles.stock}`}>Stokta var</p>
                        <p className={`${styles.delivery}`}>Teslimat: 2-3 gün</p>
                      </div>
                      <button className={`${styles.cardButton}`}>Satın Al</button>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className={`${styles.productCard}`}>
                      <div className={`${styles.imageWrapper}`}>
                        <img src="/main/product.jpg" alt="Ürün" className={`${styles.productImage}`} />
                      </div>
                      <div className={`${styles.cardHeader}`}>
                        <h4 className={`${styles.cardTitle}`}>Apre Kimyasalları - Model 102</h4>
                        <span className={`${styles.badge}`}>Yeni</span>
                      </div>
                      <div className={`${styles.cardInfo}`}>
                        <p className={`${styles.stock}`}>Stokta var</p>
                        <p className={`${styles.delivery}`}>Teslimat: 2-3 gün</p>
                      </div>
                      <button className={`${styles.cardButton}`}>Satın Al</button>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className={`${styles.productCard}`}>
                      <div className={`${styles.imageWrapper}`}>
                        <img src="/main/product.jpg" alt="Ürün" className={`${styles.productImage}`} />
                      </div>
                      <div className={`${styles.cardHeader}`}>
                        <h4 className={`${styles.cardTitle}`}>Apre Kimyasalları - Model 102</h4>
                        <span className={`${styles.badge}`}>Yeni</span>
                      </div>
                      <div className={`${styles.cardInfo}`}>
                        <p className={`${styles.stock}`}>Stokta var</p>
                        <p className={`${styles.delivery}`}>Teslimat: 2-3 gün</p>
                      </div>
                      <button className={`${styles.cardButton}`}>Satın Al</button>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className={`${styles.productCard}`}>
                      <div className={`${styles.imageWrapper}`}>
                        <img src="/main/product.jpg" alt="Ürün" className={`${styles.productImage}`} />
                      </div>
                      <div className={`${styles.cardHeader}`}>
                        <h4 className={`${styles.cardTitle}`}>Apre Kimyasalları - Model 102</h4>
                        <span className={`${styles.badge}`}>Yeni</span>
                      </div>
                      <div className={`${styles.cardInfo}`}>
                        <p className={`${styles.stock}`}>Stokta var</p>
                        <p className={`${styles.delivery}`}>Teslimat: 2-3 gün</p>
                      </div>
                      <button className={`${styles.cardButton}`}>Satın Al</button>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className={`${styles.productCard}`}>
                      <div className={`${styles.imageWrapper}`}>
                        <img src="/main/product.jpg" alt="Ürün" className={`${styles.productImage}`} />
                      </div>
                      <div className={`${styles.cardHeader}`}>
                        <h4 className={`${styles.cardTitle}`}>Apre Kimyasalları - Model 102</h4>
                        <span className={`${styles.badge}`}>Yeni</span>
                      </div>
                      <div className={`${styles.cardInfo}`}>
                        <p className={`${styles.stock}`}>Stokta var</p>
                        <p className={`${styles.delivery}`}>Teslimat: 2-3 gün</p>
                      </div>
                      <button className={`${styles.cardButton}`}>Satın Al</button>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className={`${styles.productCard}`}>
                      <div className={`${styles.imageWrapper}`}>
                        <img src="/main/product.jpg" alt="Ürün" className={`${styles.productImage}`} />
                      </div>
                      <div className={`${styles.cardHeader}`}>
                        <h4 className={`${styles.cardTitle}`}>Apre Kimyasalları - Model 102</h4>
                        <span className={`${styles.badge}`}>Yeni</span>
                      </div>
                      <div className={`${styles.cardInfo}`}>
                        <p className={`${styles.stock}`}>Stokta var</p>
                        <p className={`${styles.delivery}`}>Teslimat: 2-3 gün</p>
                      </div>
                      <button className={`${styles.cardButton}`}>Satın Al</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="side_box" className={`${styles.side_box} ${styles.side_box_sm}`}>
                <div className={`${styles.filterContainer}`}>
                  <div className={`${styles.filterHeader}`}>
                    <h2 className={`${styles.mainTitle}`}>Gelişmiş filtreler</h2>
                    <a href="#" className={`${styles.resetLink}`}>Sıfırla</a>
                  </div>

                  <div className={`${styles.quickFilters}`}>
                    <h3 className={`${styles.subTitle}`}>Hızlı Filtreler</h3>
                    <div className={`${styles.checkboxItem}`}>
                      <input type="checkbox" id="newProducts" className={`${styles.checkbox}`} />
                      <label htmlFor="newProducts">Sadece Yeni Ürünler</label>
                    </div>
                    <div className={`${styles.checkboxItem}`}>
                      <input type="checkbox" id="featuredProducts" className={`${styles.checkbox}`} />
                      <label htmlFor="featuredProducts">Öne Çıkan Ürünler</label>
                    </div>
                  </div>

                  <div className={`${styles.filterSection}`}>
                    <h3 className={`${styles.subTitle}`}>Marka</h3>
                    <select className={`${styles.selectBox}`}>
                      <option value="">Seçiniz</option>
                      <option value="brand1">Brand 1</option>
                      <option value="brand2">Brand 2</option>
                    </select>
                  </div>

                  <div className={`${styles.filterSection}`}>
                    <h3 className={`${styles.subTitle}`}>Stok durumu</h3>
                    <select className={`${styles.selectBox}`}>
                      <option value="">Seçiniz</option>
                      <option value="inStock">Stokta Var</option>
                      <option value="outOfStock">Stokta Yok</option>
                    </select>
                  </div>

                  <div className={`${styles.filterSection}`}>
                    <h3 className={`${styles.subTitle}`}>Fiyat aralığı</h3>
                    <div className={`${styles.priceRange}`}>
                      <input type="number" placeholder="0" className={`${styles.priceInput}`} />
                      <span className={`${styles.rangeSeparator}`}>-</span>
                      <input type="number" placeholder="3000" className={`${styles.priceInput}`} />
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>
      <Script>
          {`
          document.addEventListener("scroll", function(){

          const side_box = document.getElementById('side_box');
          const content_box = document.getElementById('content_box').offsetHeight;
          const section_one = document.getElementById('section_one');
          
          const offsetHeight = section_one.offsetHeight + 240;

          console.log('Offset Height: ' + offsetHeight + 'px');

          if (window.scrollY > offsetHeight-240 && window.scrollY <= offsetHeight + content_box - side_box.offsetHeight -200){
              side_box.style.top=window.scrollY - offsetHeight + 200 + "px";
          }
          else if (window.scrollY > offsetHeight + content_box - side_box.offsetHeight -200){
              side_box.style.top= -60 + content_box - side_box + "px";
          }
          else{
              side_box.style.top= -60 + "px";
          }
        })          
          `}
      </Script>
    </main>
  )
}

export default tedarik