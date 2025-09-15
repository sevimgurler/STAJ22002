import styles from "./page.module.scss";
import Script from "next/script";
import { FaStar } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FiPackage } from "react-icons/fi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import { AiOutlineCoffee } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { GoZap } from "react-icons/go";
import { TbWorld } from "react-icons/tb";
import { MdPayment } from "react-icons/md";
import { FaRegQuestionCircle } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import { MdOutlineShield } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaRegEnvelope } from "react-icons/fa6";
import { MdOutlinePhone } from "react-icons/md";
import { FaQuoteLeft } from "react-icons/fa";
import { CiApple } from "react-icons/ci";
import { MdOutlineCookie } from "react-icons/md";

export default function Home() {
  return (
    <main>
      <section className={`${styles.section_one}`}>
        <div className="container">
          <div className="row">
            <div className={`${styles.content} col-lg-6`} >
              <div className={`white-badge badge rounded-pill`}><FiPackage className="me-1"/> İş Otomasyonu Platformu</div>
              <h1 className= {`mt-4`}>
              <span className={`${styles.title}`}>Akıllı B2B</span>
              <br/> 
              <span className={`${styles.gradient}`}>Alışveriş</span>
              <br/> 
              <span className={`${styles.title_part}`}>Deneyimi</span>
              </h1>
              <p className={`${styles.text}`}>Anında sipariş, akıllı tedarik ve toplu fiyatlandırma ile devrimsel B2B pazaryeri. İş alımlarınızı bugün dönüştürün.</p>
              <div className="d-flex mt-5">
                <div>
                  <img src="/main/man1.jpg" width={50} height={50}></img>
                  <img src="/main/man1.jpg" style={{left:-10,}} width={50} height={50}></img>
                  <img src="/main/man1.jpg" style={{left:-20,}} width={50} height={50}></img>
                </div>
                <div>
                  <h6>Mutlu Müşterilerimiz</h6>
                  <p><span className="text-warning fw-bold"><FaStar /> 4.8</span> <small>(15.2k değerlendirme)</small></p>
                </div>
              </div>
            </div>
            <div className={`${styles.img_container} col-lg-6 d-flex justify-content-center`}>
              <div className={`${styles.img}`}>
                <span className={`${styles.img_badge} ${styles.badge_top_right} text-center`}><span>4.8</span> <br/> Müşteri Değerlendirmesi</span>
                <span className={`${styles.img_badge} ${styles.badge_bottom_left} text-center`}><FaCheck className="me-1"/> 10.000+ Mutlu Müşteri</span>
              </div>        
            </div>
          </div>
        </div>    
      </section>
      <section className={`${styles.section_two}`}>
        <div className="container">
          <div className="terzi-container-lg">
            <div className="text-center">
              <div className={`red-badge badge rounded-pill`}><FiPackage className="me-1"/> İş Otomasyonu Platformu</div>
              <br/>
              <br/>
              <h1 className="fw-bold">İşletmenizin Tüm İhtiyaçları Tek Adreste</h1>
              <p className={`${styles.text} terzi-text`}>B2B müşterilerimize özel hazırlanmış 4 ana kategori ile işletmenizin günlük operasyonel ihtiyaçlarını karşılayın. Toplu alım avantajları ve güvenilir tedarik çözümleri.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className={`${styles.card} card`}>
                <div className={`${styles.line} ${styles.right}`}></div>
                <div className={`${styles.top} card-img-top`}>
                  <h5>İçecekler</h5>
                  <div className={`${styles.badge}`}>500+ Ürün</div>
                  <div className={`${styles.icon} d-flex justify-content-center align-items-center`}><AiOutlineCoffee /></div>
                  <div className={`${styles.animation} d-flex justify-content-center align-items-center`}></div>
                  <img src="/main/coffeeimg.jpg" alt="..." />
                </div>            
                <div className={`${styles.card_body} card-body`}>
                  <p className="card-text">
                    Kahve, çay, meyve suları ve tüm içecek ihtiyaçlarınız için geniş ürün yelpazesi. Ofis ve işletmeniz için toplu alım avantajları.
                  </p>
                  <div className={`${styles.card_sm} d-flex align-items-center`}>
                    <div className={`${styles.icon} d-flex justify-content-center align-items-center`}>
                      <IoMdCheckmarkCircleOutline />
                    </div>
                    <span>Toplu İndirim</span>
                  </div>
                  <div className={`${styles.card_sm} d-flex align-items-center`}>
                    <div className={`${styles.icon} d-flex justify-content-center align-items-center`}>
                      <IoMdCheckmarkCircleOutline />
                    </div>
                    <span>Hızlı Teslimat</span>
                  </div>
                  <div className={`${styles.card_sm} d-flex align-items-center`}>
                    <div className={`${styles.icon} d-flex justify-content-center align-items-center`}>
                      <IoMdCheckmarkCircleOutline />
                    </div>
                    <span>Kalite Garantisi</span>
                  </div>
                  <a href="#" className={`${styles.button} btn`}>
                    Kategoriye Git <span><FaArrowRight /></span>
                  </a>
                </div>
              </div>
              <div className={`${styles.card} card mt-5`}>
                <div className={`${styles.line} ${styles.right}`}></div>
                <div className={`${styles.top} card-img-top`}>
                  <h5>Atıştırmalık</h5>
                  <div className={`${styles.badge}`}>400+ Lezzet</div>
                  <div className={`${styles.icon} d-flex justify-content-center align-items-center`}><MdOutlineCookie /></div>
                  <div className={`${styles.animation} d-flex justify-content-center align-items-center`}></div>
                  <img src="/main/cookieimg.jpg" alt="..." />
                </div>            
                <div className={`${styles.card_body} card-body`}>
                  <p className="card-text">
                    Kuruyemiş, çikolata, bisküvi ve tüm atıştırmalık ürünlerinde büyük seçenek. Ofis ortamı için ideal ürün çeşitliliği.
                  </p>
                  <div className={`${styles.card_sm} d-flex align-items-center`}>
                    <div className={`${styles.icon} d-flex justify-content-center align-items-center`}>
                      <IoMdCheckmarkCircleOutline />
                    </div>
                    <span>Kurumsal Paketler</span>
                  </div>
                  <div className={`${styles.card_sm} d-flex align-items-center`}>
                    <div className={`${styles.icon} d-flex justify-content-center align-items-center`}>
                      <IoMdCheckmarkCircleOutline />
                    </div>
                    <span>Çeşit Garantisi</span>
                  </div>
                  <div className={`${styles.card_sm} d-flex align-items-center`}>
                    <div className={`${styles.icon} d-flex justify-content-center align-items-center`}>
                      <IoMdCheckmarkCircleOutline />
                    </div>
                    <span>Uygun Fiyatlar</span>
                  </div>
                  <a href="#" className={`${styles.button} btn`}>
                    Kategoriye Git <span><FaArrowRight /></span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={`${styles.card} card mt-5`}>
                <div className={`${styles.line} ${styles.left}`}></div>
                <div className={`${styles.top} card-img-top`}>
                  <h5>Taze Meyve & Sebze</h5>
                  <div className={`${styles.badge}`}>300+ Çeşit</div>
                  <div className={`${styles.icon} d-flex justify-content-center align-items-center`}><CiApple /></div>
                  <div className={`${styles.animation} d-flex justify-content-center align-items-center`}></div>
                  <img src="/main/groceryimg.jpg" alt="..." />
                </div>            
                <div className={`${styles.card_body} card-body`}>
                  <p className="card-text">
                    Günlük taze meyve ve sebzeler, organik seçenekler ve kaliteli tarım ürünleri. İşletmenizin sağlıklı beslenme ihtiyaçları için.
                  </p>
                  <div className={`${styles.card_sm} d-flex align-items-center`}>
                    <div className={`${styles.icon} d-flex justify-content-center align-items-center`}>
                      <IoMdCheckmarkCircleOutline />
                    </div>
                    <span>Organik Seçenekler</span>
                  </div>
                  <div className={`${styles.card_sm} d-flex align-items-center`}>
                    <div className={`${styles.icon} d-flex justify-content-center align-items-center`}>
                      <IoMdCheckmarkCircleOutline />
                    </div>
                    <span>Günlük Tazelik</span>
                  </div>
                  <div className={`${styles.card_sm} d-flex align-items-center`}>
                    <div className={`${styles.icon} d-flex justify-content-center align-items-center`}>
                      <IoMdCheckmarkCircleOutline />
                    </div>
                    <span>Sağlık Sertifikası</span>
                  </div>
                  <a href="#" className={`${styles.button} btn`}>
                    Kategoriye Git <span><FaArrowRight /></span>
                  </a>
                </div>
              </div>
              <div className={`${styles.card} card mt-5`}>
                <div className={`${styles.line} ${styles.left}`}></div>
                <div className={`${styles.top} card-img-top`}>
                  <h5>Sarf Malzemeleri</h5>
                  <div className={`${styles.badge}`}>1000+ Ürün</div>
                  <div className={`${styles.icon} d-flex justify-content-center align-items-center`}><FiPackage /></div>
                  <div className={`${styles.animation} d-flex justify-content-center align-items-center`}></div>
                  <img src="/main/officeimg.jpg" alt="..." />
                </div>            
                <div className={`${styles.card_body} card-body`}>
                  <p className="card-text">
                    Ofis, temizlik ve günlük kullanım sarf malzemelerinde toplu alım avantajı. İşletmenizin operasyonel ihtiyaçları için.
                  </p>
                  <div className={`${styles.card_sm} d-flex align-items-center`}>
                    <div className={`${styles.icon} d-flex justify-content-center align-items-center`}>
                      <IoMdCheckmarkCircleOutline />
                    </div>
                    <span>Toplu Sipariş</span>
                  </div>
                  <div className={`${styles.card_sm} d-flex align-items-center`}>
                    <div className={`${styles.icon} d-flex justify-content-center align-items-center`}>
                      <IoMdCheckmarkCircleOutline />
                    </div>
                    <span>Düzenli Teslimat</span>
                  </div>
                  <div className={`${styles.card_sm} d-flex align-items-center`}>
                    <div className={`${styles.icon} d-flex justify-content-center align-items-center`}>
                      <IoMdCheckmarkCircleOutline />
                    </div>
                    <span>Stok Takibi</span>
                  </div>
                  <a href="#" className={`${styles.button} btn`}>
                    Kategoriye Git <span><FaArrowRight /></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles.section_three}`}>
        <div className='container'>
          <div className={`${styles.cards} row`}>
            <div className={`col-lg-3 col-md-6`}>
              <div className={`${styles.card} card`}>
                <div className="card-img-top text-center">
                  <h5 className={`${styles.num } card-title`}>2200+</h5>
                </div>
                <div className="card-body text-center">  
                  <p className={`${styles.title } card-text`}>
                    Toplam Ürün
                  </p>
                </div>
              </div>
            </div>
            <div className={`col-lg-3 col-md-6`}>
              <div className={`${styles.card} card`}>
                <div className="card-img-top text-center">
                  <h5 className={`${styles.num } card-title`}>500+</h5>
                </div>
                <div className="card-body text-center">  
                  <p className={`${styles.title } card-text`}>
                    Kurumsal Müşteri
                  </p>
                </div>
              </div>
            </div>
            <div className={`col-lg-3 col-md-6`}>
              <div className={`${styles.card} card`}>
                <div className="card-img-top text-center">       
                  <h5 className={`${styles.num } card-title`}>24 Saat</h5>
                </div>
                <div className="card-body text-center">  
                  <p className={`${styles.title } card-text`}>
                    Teslimat Süresi
                  </p>
                </div>
              </div>
            </div>
            <div className={`col-lg-3 col-md-6`}>
              <div className={`${styles.card} card`}>
                <div className="card-img-top text-center">              
                  <h5 className={`${styles.num } card-title`}>99.8%</h5>
                </div>
                <div className="card-body text-center">  
                  <p className={`${styles.title } card-text`}>
                    Müşteri memnuniyeti
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles.section_four}`}>
        <div className="container">
          <div className={`${styles.background} text-center`}>
            <div>
              <div className={`white-badge badge rounded-pill`}><FaStar className="me-1"/>Premium B2B Deneyimi</div>
              <h1 className="mt-3">Kurumsal Alışverişin Yeni Çağı</h1>
              <div className="terzi-container-lg">
                <p className="mt-3">AI destekli sipariş sistemi, gerçek zamanlı stok takibi ve blockchain tabanlı güvenlik ile işletmenizi geleceğe taşıyın.</p>
              </div>          
              <div className="d-flex justify-content-center align-items-center">
                <div className={`${styles.button1} btn me-2`}>
                  Kurumsal Üyelik
                  <span>
                    <FaArrowRight />
                  </span> 
                </div>
                <div className={`${styles.button2} btn ms-2`}>
                  Özel Teklif Al
                  <span>
                    <IoMdCheckmarkCircleOutline />
                  </span> 
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-md-4">
                  <div className={`${styles.glass_card}`}>
                    <div className={`${styles.icon_wrapper} ${styles.orange}`}>
                      <FaUsers/>
                    </div>
                    <h3 className={`${styles.card_title}`}>Kişisel AI Asistan</h3>
                    <p className={`${styles.card_text}`}>7/24 akıllı destek sistemi</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className={`${styles.glass_card}`}>
                    <div className={`${styles.icon_wrapper} ${styles.green}`}>
                      <IoMdCheckmarkCircleOutline/>
                    </div>
                    <h3 className={`${styles.card_title}`}>Blockchain Güvenlik</h3>
                    <p className={`${styles.card_text}`}>100% şeffaf işlem garantisi</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className={`${styles.glass_card}`}>
                    <div className={`${styles.icon_wrapper} ${styles.purple}`}>
                      <FaStar/>
                    </div>
                    <h3 className={`${styles.card_title}`}>Quantum Analytics</h3>
                    <p className={`${styles.card_text}`}>Gelişmiş veri analizi</p>
                  </div>
                </div>
              </div>
            </div>      
          </div>
        </div>
      </section>
      <section className={styles.section_five}>
        <div className="container">
          <div className={`${styles.container} text-center`}>
            <br />
            <h1 className={`${styles.title2} mt-5`}>Hoş <span className={styles.red}>Geldiniz!</span></h1>
            <br />
            <br />
            <p>Web sitemizde sizi karşılamaktan büyük mutluluk duyuyoruz!</p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className={`${styles.card} card`}>
                <div className="card-img-top text-center">
                  <div className="d-flex justify-content-center align-items-center">
                    <div className={`${styles.iconarea} d-flex justify-content-center align-items-center`}>
                      <TbWorld className={styles.icon} />
                    </div>
                  </div> 
                  <h5 className={`${styles.title} card-title`}>Uluslararası Güç</h5>
                </div>
                <div className="card-body text-center">
                  <p className="card-text">
                    Küresel arenada güçlü bir oyuncu olarak, tüm önemli üreticilerin gıda, içecek, ambalaj ve hijyen ürünlerini sizlere sunuyoruz.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className={`${styles.card} card`}>
                <div className="card-img-top text-center">
                  <div className="d-flex justify-content-center align-items-center">
                    <div className={`${styles.iconarea} d-flex justify-content-center align-items-center`}>
                      <GoZap className={styles.icon} />
                    </div>
                  </div> 
                  <h5 className={`${styles.title} card-title`}>İkili Strateji</h5>
                </div>
                <div className="card-body text-center">
                  <p className="card-text">
                    Abholmärkte + Zustellgroßhandel ikili gücümüzle ürünleri hem yerinde görebilir hem de kapınızda bulabilirsiniz.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className={`${styles.card} card text-center`}>
                <div className="card-img-top">
                  <div className="d-flex justify-content-center align-items-center">
                    <div className={`${styles.iconarea} d-flex justify-content-center align-items-center`}>
                      <MdPayment className={styles.icon} />
                    </div>
                  </div>    
                  <h5 className={`${styles.title}`}>Stuttgart'tan Avrupa'ya</h5>
                </div>
                <div className="card-body">
                  <p className="card-text">
                    Güvenilir profesyonel şoförlerimiz Stuttgart bölgesi ve çevresine, talep üzerine ise
                    tüm Avrupa'ya teslimat yapmaktadır.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles.section_six}`}>
        <div className="container">
          <div className={`${styles.background} text-center`}>
            <div>
              <div className={`yellow-badge badge rounded-pill`}><FaStar className="me-1"/>ÖZEL DAVETİMİZ<FaStar className="ms-1"/></div>
              <h1 className="mt-3">
                <span className={`${styles.animation}`}>Sizi de Meydan Okumaya</span>
                <br/>
                <div className={`${styles.hover}`}>Davet Ediyoruz!</div>
              </h1>
              <div className="terzi-container-lg">
                <p className="mt-3">Kalite ve tazelik kriterlerimizin yanı sıra, fiyat şeffaflığı ve profesyonel danışmanlık hizmetlerimizle istek ve beklentilerinizi hızlı ve esnek bir şekilde karşılıyoruz.</p>
              </div>          
              <div className="d-flex justify-content-center align-items-center">
                <div className={`${styles.button1} btn me-2`}>
                  Meydan Okumasını Kabul Et
                  <span>
                    <FaArrowRight />
                  </span> 
                </div>
                <div className={`${styles.button2} btn ms-2`}>
                  Detayları Keşfet
                  <span>
                    <IoMdCheckmarkCircleOutline />
                  </span> 
                </div>
              </div>
              <div className={`${styles.row} d-flex justify-content-center align-items-center mt-5`}>
                <div>
                  <span>100%</span>
                  <br/>
                  <small>Kalite Garantisi</small>           
                </div>
                <div>
                  <span>24/7</span>
                  <br/>
                  <small>Profesyonel Destek</small>           
                </div>
                <div>
                  <span>∞</span>
                  <br/>
                  <small>Sınırsız Çözüm</small>           
                </div>
              </div>
            </div>      
          </div>
        </div>
      </section>
      <section className={styles.section_seven}>
        <div className="container">
          <div className={`${styles.container} text-center`}>
            <h1 className={`${styles.title2}`}>Hizmet Mükemmelliğimiz</h1>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className={`${styles.card} card`}>
                <div className="card-img-top text-center">
                  <div className="d-flex justify-content-center align-items-center">
                    <div className={`${styles.iconarea} d-flex justify-content-center align-items-center`}>
                      <TbWorld className={styles.icon} />
                    </div>
                  </div> 
                  <h5 className={`${styles.title} card-title`}>100% Kalite</h5>
                </div>
                <div className="card-body text-center">
                  <p className="card-text">
                    Geniş ürün yelpazemizden frische & qualität garantisi
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className={`${styles.card} card`}>
                <div className="card-img-top text-center">
                  <div className="d-flex justify-content-center align-items-center">
                    <div className={`${styles.iconarea} d-flex justify-content-center align-items-center`}>
                      <GoZap className={styles.icon} />
                    </div>
                  </div> 
                  <h5 className={`${styles.title} card-title`}>Wettbewerbsfähige Preise</h5>
                </div>
                <div className="card-body text-center">
                  <p className="card-text">
                    Maksimum ekonomiklik için şeffaf ve adil fiyatlandırma
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className={`${styles.card} card text-center`}>
                <div className="card-img-top">
                  <div className="d-flex justify-content-center align-items-center">
                    <div className={`${styles.iconarea} d-flex justify-content-center align-items-center`}>
                      <MdPayment className={styles.icon} />
                    </div>
                  </div>    
                  <h5 className={`${styles.title}`}>Termingerecht</h5>
                </div>
                <div className="card-body">
                  <p className="card-text">
                    Kendi soğutmalı araçlarımızla dakik teslimat hizmeti
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className={`${styles.card} card`}>
                <div className="card-img-top text-center">
                  <div className="d-flex justify-content-center align-items-center">
                    <div className={`${styles.iconarea} d-flex justify-content-center align-items-center`}>
                      <TbWorld className={styles.icon} />
                    </div>
                  </div> 
                  <h5 className={`${styles.title} card-title`}>Professionelle Beratung</h5>
                </div>
                <div className="card-body text-center">
                  <p className="card-text">
                    Freundlich ve engagiert ekibimizden uzman danışmanlık
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles.section_eight}`}>
        <div className="container">
          <h1 className="terzi-title-lg text-center">Bizimle İletişime Geçin</h1>
          <p className="terzi-text text-center">Kurumsal çözümleriniz için profesyonel destek alın. Deneyimli ekibimizle projelerinizi hayata geçirin.</p>
          <div className={`${styles.card} card my-5`}>
            <div className="row g-0">
              <div className={`${styles.card_left} col-md-6`}>
                <div className="card-body">
                  <div className={`${styles.badge} white-badge badge rounded-pill`}><GoZap className="me-1"/>Hızlı İletişim</div>
                  <h5 className="mt-3">İletişim Bilgileri</h5>
                  <div className={`${styles.glass_card} d-flex align-items-top`}>
                    <div className={`${styles.icon_wrapper} ${styles.orange}`}>
                      <FaUsers/>
                    </div>
                    <div className="ms-3">
                      <h3 className={`${styles.card_title}`}>Telefon</h3>
                      <p className={`${styles.card_text}`}>+90 212 123 45 67</p>
                      <p className={`${styles.card_text}`}>+90 533 123 45 67</p>
                    </div>
                  </div>
                  <div className={`${styles.glass_card} d-flex align-items-top`}>
                    <div className={`${styles.icon_wrapper} ${styles.purple}`}>
                      <FaUsers/>
                    </div>
                    <div className="ms-3">
                      <h3 className={`${styles.card_title}`}>E-posta</h3>
                      <p className={`${styles.card_text}`}>info@terzigroup.com</p>
                      <p className={`${styles.card_text}`}>proje@terzigroup.com</p>
                    </div>
                  </div>
                  <div className={`${styles.glass_card} d-flex align-items-top`}>
                    <div className={`${styles.icon_wrapper} ${styles.green}`}>
                      <FaUsers/>
                    </div>
                    <div className="ms-3">
                      <h3 className={`${styles.card_title}`}>Çalışma Saatleri</h3>
                      <p className={`${styles.card_text}`}>Pazartesi - Cuma: 09:00 - 18:00</p>
                      <p className={`${styles.card_text}`}>Cumartesi: 10:00 - 16:00</p>
                    </div>
                  </div>
                </div>        
              </div>
              <div className={`${styles.card_right} col-md-6 d-flex justify-content-center align-items-center`}>
                <div className="card-body text-center">
                  <div className={`${styles.badge} red-badge badge rounded-pill`}><GoZap className="me-1"/>Premium Hizmet</div>
                  <h4 className="card-title mt-3">
                    <span className={`${styles.gradient}`}>
                      Projeleriniz İçin Hemen
                    </span>
                    <br/>
                    <span className={`${styles.red}`}>
                      İletişime Geçin
                    </span>        
                  </h4>
                  <p>Uzman ekibimiz size en uygun çözümleri sunmak için hazır. Ücretsiz danışmanlık için bugün bizimle iletişime geçin.</p>
                  <a href="#" className={`${styles.button} btn`}>
                    İletişim Formu <span><FaArrowRight /></span>
                  </a>
                  <div className="row mt-3">
                    <div className="col-md-6 px-1">
                      <div className={`${styles.badge_bottom} green-badge badge`}><FaCheck className="me-1"/>Ücretsiz Danışmanlık</div>
                    </div>
                    <div className="col-md-6 px-1">
                      <div className={`${styles.badge_bottom} col-md-6 blue-badge badge`}><FaCheck className="me-1"/>Hızlı Geri Dönüş</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>       
      </section>
      <section className={`${styles.section_nine}`}>
        <div className="container text-center">
          <div className={`${styles.badge} red-badge badge rounded-pill`}><FaRegQuestionCircle className="me-1"/>Sıkça Sorulan Sorular</div>
          <h1>Aklınızdaki Soruların Yanıtları Burada</h1>
        </div>
        <div className="terzi-container text-center">
          <p className="terzi-text">B2B müşterilerimizin en çok merak ettiği konular hakkında detaylı bilgiler. Aradığınız yanıtı bulamazsanız, müşteri hizmetlerimizle iletişime geçebilirsiniz.</p>
        </div>
       <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                      Kurumsal hesap açmak için hangi belgeler gerekir?
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      Kurumsal hesap açabilmek için vergi levhası, imza sirküleri ve şirket faaliyet belgesi gerekmektedir. Online başvuru formunu doldurduktan sonra belgelerinizi e-posta ile gönderebilir veya müşteri temsilcimiz size destek olabilir.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                      Minimum sipariş tutarı var mı?
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      Kurumsal müşterilerimiz için minimum sipariş tutarı 500 TL'dir. Bu tutar üzerindeki siparişlerde ücretsiz kargo avantajından yararlanabilirsiniz. Toplu alımlarda özel indirimler mevcuttur.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                      Teslimat süreleri nasıl işliyor?
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      İstanbul içi teslimatlar 24 saat içinde, Türkiye geneli teslimatlar 2-3 iş günü içinde gerçekleştirilmektedir. Acil siparişleriniz için aynı gün teslimat seçeneği de mevcuttur. Teslimat süreçleri hakkında SMS ve e-posta ile bilgilendirilirsiniz.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFour">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour">
                    Ödeme seçenekleri nelerdir?
                    </button>
                  </h2>
                  <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    Kredi kartı, havale/EFT, çek ve açık hesap ödeme seçenekleri sunuyoruz. Kurumsal müşterilerimize 30-60-90 gün vadeli ödeme imkanı sağlıyoruz. Online ödeme sistemimiz 256-bit SSL sertifikası ile korunmaktadır.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFive">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive">
                      İade ve değişim politikanız nasıl?
                    </button>
                  </h2>
                  <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      Ürünlerimizi teslim aldıktan sonra 14 gün içinde iade edebilirsiniz. Bozulabilir ürünler (taze meyve-sebze, süt ürünleri) hariç olmak üzere tüm ürünlerde iade kabul edilmektedir. İade işlemleri 3-5 iş günü içinde hesabınıza yansıtılır.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingSix">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix">
                      Toplu sipariş indirimleri nasıl hesaplanıyor?
                    </button>
                  </h2>
                  <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      5.000 TL üzeri siparişlerde %3, 10.000 TL üzeri siparişlerde %5, 25.000 TL üzeri siparişlerde %8 indirim uygulanmaktadır. Düzenli alım yapan müşterilerimize özel indirim oranları da mevcuttur.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingSeven">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven">
                    Ürün kalitesi ve tazelik garantisi var mı?
                    </button>
                  </h2>
                  <div id="collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      Tüm ürünlerimiz kalite kontrolünden geçmektedir. Taze ürünlerimiz günlük olarak tedarik edilmekte ve soğuk zincir ile taşınmaktadır. Kalite standartlarımıza uymayan ürünlerde ücretsiz değişim garantisi sunuyoruz.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingEight">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight">
                      Düzenli sipariş programınız var mı?
                    </button>
                  </h2>
                  <div id="collapseEight" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      Evet, işletmenizin düzenli ihtiyaçları için otomatik sipariş programımız bulunmaktadır. Haftalık, aylık veya belirlediğiniz periyotlarda otomatik teslimat ayarlayabilirsiniz. Bu program ile %5 ek indirim kazanırsınız.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className={`${styles.right_pad}`}>
                <h5>Hızlı Destek</h5>
                <p>Aradığınız yanıtı bulamadınız mı? Uzman ekibimiz size yardımcı olmaya hazır.</p>
                <div className={`${styles.glass_card}`}>
                  <div className={`${styles.icon_wrapper} ${styles.orange}`}>
                    <MdOutlinePhone/>
                  </div>
                  <div className="ms-2 mt-1">
                    <h3 className={`${styles.card_title}`}>Telefon Desteği</h3>
                    <p className={`${styles.card_text}`}>0850 123 45 67</p>
                    <p className={`${styles.card_text}`}>Pazartesi-Cuma 08:00-18:00</p>
                  </div> 
                </div>
                <div className={`${styles.glass_card}`}>
                  <div className={`${styles.icon_wrapper} ${styles.orange}`}>
                    <FaRegEnvelope/>
                  </div>
                  <div className="ms-2 mt-1">
                    <h3 className={`${styles.card_title}`}>E-posta Desteği</h3>
                    <p className={`${styles.card_text}`}>destek@terziflow.com</p>
                    <p className={`${styles.card_text}`}>24 saat içinde yanıt</p>
                  </div> 
                </div>
                <div className={`${styles.glass_card}`}>
                  <div className={`${styles.icon_wrapper} ${styles.orange}`}>
                    <FiMessageCircle/>
                  </div>
                  <div className="ms-2 mt-1">
                    <h3 className={`${styles.card_title}`}>Canlı Destek</h3>
                    <p className={`${styles.card_text}`}>Anında yardım</p>
                    <p className={`${styles.card_text}`}>Pazartesi-Cuma 09:00-17:00</p>
                  </div> 
                </div>
              </div>
              <div className={`${styles.colored_card} ${styles.green_card}`}>
                <div className={`${styles.icon_wrapper} ${styles.green}`}>
                  <FaRegClock/>
                </div>
                <div className="ms-2 mt-1">
                  <h3 className={`${styles.card_title}`}>Teslimat Süresi</h3>
                  <p className={`${styles.card_text}`}>24 saat - 3 iş günü</p>
                </div> 
              </div>
              <div className={`${styles.colored_card} ${styles.blue_card}`}>
                <div className={`${styles.icon_wrapper} ${styles.blue}`}>
                  <MdOutlineShield/>
                </div>
                <div className="ms-2 mt-1">
                  <h3 className={`${styles.card_title}`}>Güvenli Ödeme</h3>
                  <p className={`${styles.card_text}`}>SSL sertifikalı</p>
                </div> 
              </div>
              <div className={`${styles.colored_card} ${styles.purple_card}`}>
                <div className={`${styles.icon_wrapper} ${styles.purple}`}>
                  <CiDeliveryTruck/>
                </div>
                <div className="ms-2 mt-1">
                  <h3 className={`${styles.card_title}`}>Ücretsiz Kargo</h3>
                  <p className={`${styles.card_text}`}>500 TL üzeri</p>
                </div> 
              </div>
            </div>
          </div>
        </div>
        <div className="container text-center mt-5">
          <h6>Hala Sorunuz mu Var?</h6>
        </div>
        <div className="terzi-container text-center">
          <p className="terzi-text-sm">Müşteri hizmetleri ekibimiz size yardımcı olmak için hazır. Detaylı bilgi almak için bizimle iletişime geçin.</p>
        </div>
        <div className="container">
          <div className="d-flex justify-content-center align-items-center gap-3">
            <div className={`${styles.button} btn btn-danger`}>
              Müşteri Hizmetleri
            </div>
            <div className={`${styles.outline} btn btn-outline-danger`}>
              Canlı Destek
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles.section_ten}`}>
        <div className="d-flex justify-content-center">
          <div className={`${styles.badge} red-badge badge rounded-pill`}>KUNDESSTIMMEN</div>
        </div>
        <div className="container text-center">
          <h1 className="terzi-title-lg mt-3">Was unsere Kunden sagen</h1>
          <p className="terzi-text">Über 500+ zufriedene Partner vertrauen bereits auf unsere Qualität und Zuverlässigkeit</p>
          <div className="row my-5">
            <div className="col-md-3 p-3">
              <div className={`${styles.card}`}>
                <small>👥</small>
                <span>500+</span>
                <p>Zufriedene Kunden</p>
              </div>
            </div>
            <div className="col-md-3 p-3">
              <div className={`${styles.card}`}>
                <small>⏰</small>
                <span>98%</span>
                <p>Pünktliche Lieferung</p>
              </div>
            </div>
            <div className="col-md-3 p-3">
              <div className={`${styles.card}`}>
                <small>🏆</small>
                <span>15+</span>
                <p>Jahre Erfahrung</p>
              </div>
            </div>
            <div className="col-md-3 p-3">
              <div className={`${styles.card}`}>
                <small>📞</small>
                <span>24/7</span>
                <p>Kundenservice</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 p-3">
              <div className={`${styles.card_sm}`}>
                <h5 className="d-flex align-items-center"><span className={`${styles.icon}`}><FaQuoteLeft/></span></h5>
                <div className={`${styles.star} text-center mb-3`}>⭐</div>
                <div className="d-flex justify-content-center">
                  <div className={`${styles.badge} red-badge badge rounded-pill`}>Außergewöhnliche Qualität</div>
                </div>         
                <p className="text-center">"Seit 3 Jahren arbeiten wir mit diesem Großhandel zusammen. Die Qualität ist außergewöhnlich und die Lieferzeiten sind immer pünktlich. Unsere Gäste merken den Unterschied in der Frische unserer Zutaten."</p>
                <div className={`${styles.person} d-flex justify-content-center align-items-center`}>
                  <div>
                    <div className={`${styles.img}`}></div>
                  </div>
                  <div className="text-center mx-2">
                    <p>Hans Müller</p>
                    <small>Müller Restaurant Kette</small>
                    <span>📍 Stuttgart</span>
                  </div>
                </div>
              </div>
              <div className={`${styles.card_sm}`}>
                <h5 className="d-flex align-items-center"><span className={`${styles.icon}`}><FaQuoteLeft/></span></h5>
                <div className={`${styles.star} text-center mb-3`}>⭐</div>
                <div className="d-flex justify-content-center">
                  <div className={`${styles.badge} red-badge badge rounded-pill`}>Außergewöhnliche Qualität</div>
                </div>         
                <p className="text-center">"Seit 3 Jahren arbeiten wir mit diesem Großhandel zusammen. Die Qualität ist außergewöhnlich und die Lieferzeiten sind immer pünktlich. Unsere Gäste merken den Unterschied in der Frische unserer Zutaten."</p>
                <div className={`${styles.person} d-flex justify-content-center align-items-center`}>
                  <div>
                    <div className={`${styles.img}`}></div>
                  </div>
                  <div className="text-center mx-2">
                    <p>Hans Müller</p>
                    <small>Müller Restaurant Kette</small>
                    <span>📍 Stuttgart</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 p-3">
              <div className={`${styles.card_sm}`}>
                <h5 className="d-flex align-items-center"><span className={`${styles.icon}`}><FaQuoteLeft/></span></h5>
                <div className={`${styles.star} text-center mb-3`}>⭐</div>
                <div className="d-flex justify-content-center">
                  <div className={`${styles.badge} red-badge badge rounded-pill`}>Außergewöhnliche Qualität</div>
                </div>         
                <p className="text-center">"Seit 3 Jahren arbeiten wir mit diesem Großhandel zusammen. Die Qualität ist außergewöhnlich und die Lieferzeiten sind immer pünktlich. Unsere Gäste merken den Unterschied in der Frische unserer Zutaten."</p>
                <div className={`${styles.person} d-flex justify-content-center align-items-center`}>
                  <div>
                    <div className={`${styles.img}`}></div>
                  </div>
                  <div className="text-center mx-2">
                    <p>Hans Müller</p>
                    <small>Müller Restaurant Kette</small>
                    <span>📍 Stuttgart</span>
                  </div>
                </div>
              </div>
              <div className={`${styles.card_sm}`}>
                <h5 className="d-flex align-items-center"><span className={`${styles.icon}`}><FaQuoteLeft/></span></h5>
                <div className={`${styles.star} text-center mb-3`}>⭐</div>
                <div className="d-flex justify-content-center">
                  <div className={`${styles.badge} red-badge badge rounded-pill`}>Außergewöhnliche Qualität</div>
                </div>         
                <p className="text-center">"Seit 3 Jahren arbeiten wir mit diesem Großhandel zusammen. Die Qualität ist außergewöhnlich und die Lieferzeiten sind immer pünktlich. Unsere Gäste merken den Unterschied in der Frische unserer Zutaten."</p>
                <div className={`${styles.person} d-flex justify-content-center align-items-center`}>
                  <div>
                    <div className={`${styles.img}`}></div>
                  </div>
                  <div className="text-center mx-2">
                    <p>Hans Müller</p>
                    <small>Müller Restaurant Kette</small>
                    <span>📍 Stuttgart</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 p-3">
              <div className={`${styles.card_sm}`}>
                <h5 className="d-flex align-items-center"><span className={`${styles.icon}`}><FaQuoteLeft/></span></h5>
                <div className={`${styles.star} text-center mb-3`}>⭐</div>
                <div className="d-flex justify-content-center">
                  <div className={`${styles.badge} red-badge badge rounded-pill`}>Außergewöhnliche Qualität</div>
                </div>         
                <p className="text-center">"Seit 3 Jahren arbeiten wir mit diesem Großhandel zusammen. Die Qualität ist außergewöhnlich und die Lieferzeiten sind immer pünktlich. Unsere Gäste merken den Unterschied in der Frische unserer Zutaten."</p>
                <div className={`${styles.person} d-flex justify-content-center align-items-center`}>
                  <div>
                    <div className={`${styles.img}`}></div>
                  </div>
                  <div className="text-center mx-2">
                    <p>Hans Müller</p>
                    <small>Müller Restaurant Kette</small>
                    <span>📍 Stuttgart</span>
                  </div>
                </div>
              </div>
              <div className={`${styles.card_sm}`}>
                <h5 className="d-flex align-items-center"><span className={`${styles.icon}`}><FaQuoteLeft/></span></h5>
                <div className={`${styles.star} text-center mb-3`}>⭐</div>
                <div className="d-flex justify-content-center">
                  <div className={`${styles.badge} red-badge badge rounded-pill`}>Außergewöhnliche Qualität</div>
                </div>         
                <p className="text-center">"Seit 3 Jahren arbeiten wir mit diesem Großhandel zusammen. Die Qualität ist außergewöhnlich und die Lieferzeiten sind immer pünktlich. Unsere Gäste merken den Unterschied in der Frische unserer Zutaten."</p>
                <div className={`${styles.person} d-flex justify-content-center align-items-center`}>
                  <div>
                    <div className={`${styles.img}`}></div>
                  </div>
                  <div className="text-center mx-2">
                    <p>Hans Müller</p>
                    <small>Müller Restaurant Kette</small>
                    <span>📍 Stuttgart</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles.section_eleven}`}>
        <div className="container">
          <div className={`${styles.background} text-center`}>
            <div>
              <h1 className="mt-3">Werden auch Sie Teil unserer Erfolgsgeschichte!</h1>
              <div className="terzi-container-lg">
                <p className="mt-3">Schließen Sie sich hunderten zufriedener Kunden an, die bereits von unserer Qualität und unserem Service profitieren.</p>
              </div>
              <div className={`${styles.default} justify-content-center align-items-center gap-2 mb-4`}>
                <div className={`white-badge badge rounded-pill`}>✓ Kostenlose Beratung</div>
                <div className={`white-badge badge rounded-pill`}>✓ Flexible Lieferung</div>
                <div className={`white-badge badge rounded-pill`}>✓ Beste Preise</div>
                <div className={`white-badge badge rounded-pill`}>✓ Premium Qualität</div>
              </div>
              <div className={`${styles.mobile} justify-content-center align-items-center gap-2 mb-4`}>
                <div className={`white-badge badge rounded-pill`}>✓ Kostenlose Beratung</div>
                <div className={`white-badge badge rounded-pill`}>✓ Flexible Lieferung</div>
              </div>
              <div className={`${styles.mobile} justify-content-center align-items-center gap-2 mb-4`}>
                <div className={`white-badge badge rounded-pill`}>✓ Beste Preise</div>
                <div className={`white-badge badge rounded-pill`}>✓ Premium Qualität</div>
              </div>          
              <div className="d-flex justify-content-center align-items-center">
                <div className={`${styles.button1} btn me-2`}>
                  Jetzt Kontakt aufnehmen
                  <span>
                    <FaArrowRight />
                  </span> 
                </div>
              </div>     
            </div>      
          </div>
        </div>
      </section>
      <section className={`${styles.section_tvelwe}`}>
        <div className='container'>
          <div className={`${styles.cards} row`}>
            <div className={`col-lg-3 col-md-6`}>
              <div className={`${styles.card} card`}>
                <div className="card-img-top text-center">
                  <h5 className={`${styles.num } card-title`}>50+</h5>
                </div>
                <div className="card-body text-center">  
                  <p className={`${styles.title } card-text`}>
                    Güvenilir Partner
                  </p>
                </div>
              </div>
            </div>
            <div className={`col-lg-3 col-md-6`}>
              <div className={`${styles.card} card`}>
                <div className="card-img-top text-center">
                  <h5 className={`${styles.num } card-title`}>15+</h5>
                </div>
                <div className="card-body text-center">  
                  <p className={`${styles.title } card-text`}>
                    Yıllık Deneyim
                  </p>
                </div>
              </div>
            </div>
            <div className={`col-lg-3 col-md-6`}>
              <div className={`${styles.card} card`}>
                <div className="card-img-top text-center">       
                  <h5 className={`${styles.num } card-title`}>100+</h5>
                </div>
                <div className="card-body text-center">  
                  <p className={`${styles.title } card-text`}>
                    Başarılı Proje
                  </p>
                </div>
              </div>
            </div>
            <div className={`col-lg-3 col-md-6`}>
              <div className={`${styles.card} card`}>
                <div className="card-img-top text-center">              
                  <h5 className={`${styles.num } card-title`}>24/7</h5>
                </div>
                <div className="card-body text-center">  
                  <p className={`${styles.title } card-text`}>
                    Teknik Destek
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
