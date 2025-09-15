import React from 'react'
import styles from "./page.module.scss";
import { MdSlowMotionVideo } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { PiVideoConference } from "react-icons/pi";
import { MdPayment } from "react-icons/md";
import { IoShareSocialOutline } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { IoIosTrendingUp } from "react-icons/io";
import { FaCircle } from "react-icons/fa";
import { SlControlPlay } from "react-icons/sl";
import { GoZap } from "react-icons/go";
import { FaRegCalendar } from "react-icons/fa";
import { VscGraph } from "react-icons/vsc";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FiMessageCircle } from "react-icons/fi";
import { LiaMobileSolid } from "react-icons/lia";
import { CiCreditCard1 } from "react-icons/ci";
import { FaQuoteLeft } from "react-icons/fa";
import { FiAward } from "react-icons/fi";
import { FaEnvelope } from "react-icons/fa";
import { SlSocialFacebook } from "react-icons/sl";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoShieldOutline } from "react-icons/io5";
import { MdOutlinePhone } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";
import { FiTarget } from "react-icons/fi";
import { CiLaptop } from "react-icons/ci";
import { FiMessageSquare } from "react-icons/fi";
import { FaRegClock } from "react-icons/fa6";
import { LuBuilding2 } from "react-icons/lu";
import { FaCheck } from "react-icons/fa";

function kurumsal() {
  return (
    <main>
      <section className={`${styles.section_one}`}>
        <div className="container text-center text-white">   
          <h1 className='terzi-title-lg'>Hakkımızda</h1>
        </div>
        <div className='terzi-container text-center'>
          <p className='terzi-text'>Kalite, güvenilirlik ve müşteri memnuniyeti odaklı yaklaşımımızla sektörde öncü konumdayız.</p>
        </div>      
      </section>
      <section className={styles.section_two}>
        <div className='container'>
          <div className="row">
            <div className="col-lg-6">
              <h1 className={`${styles.title}`}>Terzi Group Hakkında</h1>
              <p>
                2009 yılında kurulan Terzi Group, gıda ve içecek sektöründe toptan
                ticaret alanında faaliyet gösteren güvenilir bir şirkettir.
                Müşterilerimize en kaliteli ürünleri en uygun fiyatlarla sunmayı
                hedeflemekteyiz.
                <br />
                <br />
                Modern teknoloji ve geleneksel değerlerimizi birleştirerek,
                müşterilerimizin ihtiyaçlarını en iyi şekilde karşılamak için sürekli
                kendimizi geliştiriyoruz.
              </p>
              <div className='d-flex align-items-center mt-4'>
                <div className={styles.icon}>
                  <LuBuilding2/>
                </div>
                <div className='ms-3'>
                  <h6>Kurumsal Yapı</h6>
                  <small>Güçlü finansal yapı ve sürdürülebilir büyüme</small>
                </div>
              </div>  
            </div>
            <div className={`${styles.img_container} col-lg-6`}>
              <img
                src="/main/hakkinizda1.jpg"
                alt="terzi"
                width="100%"
                height="400"
              />
              <div className={`${styles.img_badge} ${styles.badge_bottom_left}`}>
                <div className='d-flex align-items-center'>
                  <div className={styles.icon}>
                    <FiAward/>
                  </div>
                  <div className='ms-3'>
                    <h6>15+ Yıllık Deneyim</h6>
                    <small>Sektörde güvenilir partner</small>
                  </div>
                </div>  
              </div>
            </div>
          </div>
        </div>      
      </section>
      <section className={`${styles.section_three}`}>
        <div className="container">
          <div className={`${styles.container} text-center`}>
            <br/>
            <h1 className={`${styles.title} mt-5`}>Misyonumuz & Vizyonumuz</h1>
            <br/>
            <p>Müşterilerimizin başarısı için çalışıyor, sektörde öncü olmaya devam ediyoruz.</p>
          </div>
          <div className="row">
          <div className="col-md-6 p-3">
            <div className={`${styles.card_sm}`}>
              <div className="d-flex">
                <span className={`${styles.icon}`}><FiTarget/></span> 
                <div className="px-2">
                  <h5 className="pb-2">Misyonumuz</h5>
                  <p>Müşterilerimize en kaliteli ürünleri en uygun fiyatlarla sunarak, işletmelerinin başarısına katkıda bulunmak. Sürdürülebilir ticaret anlayışımızla sektörde güvenilir bir partner olmak.</p>
                </div>
              </div> 
            </div>      
          </div>
          <div className="col-md-6 p-3">
             <div className={`${styles.card_sm}`}>
               <div className="d-flex ">
                <span className={`${styles.icon}`}><CiLaptop/></span> 
                <div className="px-2">
                 <h5 className="pb-2">Vizyonumuz</h5>
                 <p>Türkiye'nin ve Avrupa'nın önde gelen gıda toptan ticaret şirketi olmak. Teknolojik yeniliklerle müşteri deneyimini sürekli geliştirmek ve sektörde standart belirleyen bir konuma ulaşmak.</p>
                </div>
              </div>
            </div>      
          </div>
        </div>
        </div>
      </section>
      <section className={styles.section_four}>
        <div className="container">
          <div className={`${styles.container} text-center`}>
            <h1 className={`${styles.title}`}>Başarılarımız</h1>
            <p>Sayılarla Terzi Group</p>
          </div>

          <div className="row">
            <div className="col-lg-3 col-6">
              <div className={`${styles.card} card text-center`}>
                <div className="card-img-top">
                  <div className={styles.iconarea}>
                    <IoShieldOutline className={styles.icon} />
                  </div>
                  <h5 className={`${styles.num} card-title`}>500+</h5>
                </div>
                <div className="card-body">
                  <p className="card-text">Mutlu Müşteri</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-6">
              <div className={`${styles.card} card text-center`}>
                <div className="card-img-top">
                  <div className={styles.iconarea}>
                    <IoShieldOutline className={styles.icon} />
                  </div>
                  <h5 className={`${styles.num} card-title`}>1000+</h5>
                </div>
                <div className="card-body">
                  <p className="card-text">Ürün Çeşidi</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-6">
              <div className={`${styles.card} card text-center`}>
                <div className="card-img-top">
                  <div className={styles.iconarea}>
                    <IoShieldOutline className={styles.icon} />
                  </div>
                  <h5 className={`${styles.num} card-title`}>15+</h5>
                </div>
                <div className="card-body">
                  <p className="card-text">Yıllık Deneyim</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-6">
              <div className={`${styles.card} card text-center`}>
                <div className="card-img-top">
                  <div className={styles.iconarea}>
                    <IoShieldOutline className={styles.icon} />
                  </div>
                  <h5 className={`${styles.num} card-title`}>7/24</h5>
                </div>
                <div className="card-body">
                  <p className="card-text">Müşteri Desteği</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.section_five}>
        <div className="container text-center text-white">
          <h1 className="bonero-title-lg">Değerlerimiz</h1>
          <p className="bonero-text">
            Her kararımızı ve her adımımızı şekillendiren temel değerlerimiz.
          </p>
        </div>
        <div className='container'>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className={`${styles.card} card`}>
                <div className="card-img-top text-center">
                  <div className={styles.iconarea}>
                    <IoShieldOutline className={styles.icon} />
                  </div>
                  <h5 className={`${styles.title} card-title`}>Kalite Garantisi</h5>
                </div>
                <div className="card-body text-center">
                  <p className="card-text">
                    Tüm ürünlerimiz uluslararası kalite standartlarında üretilmekte ve
                    sıkı kalite kontrolünden geçmektedir.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className={`${styles.card} card`}>
                <div className="card-img-top text-center">
                  <div className={styles.iconarea}>
                    <FaUsers className={styles.icon} />
                  </div>
                  <h5 className={`${styles.title} card-title`}>Müşteri Odaklılık</h5>
                </div>
                <div className="card-body text-center">
                  <p className="card-text">
                    Müşteri memnuniyeti bizim için her şeyden önce gelir. Her kararımızı
                    müşterilerimizin ihtiyaçları doğrultusunda alırız.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className={`${styles.card} card`}>
                <div className="card-img-top text-center">
                  <div className={styles.iconarea}>
                    <TbWorld className={styles.icon} />
                  </div>
                  <h5 className={`${styles.title} card-title`}>Sürdürülebilirlik</h5>
                </div>
                <div className="card-body text-center">
                  <p className="card-text">
                    Çevre dostu üretim ve tedarik süreçleri ile gelecek nesillere daha
                    iyi bir dünya bırakmayı hedefliyoruz.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className={`${styles.card} card`}>
                <div className="card-img-top text-center">
                  <div className={styles.iconarea}>
                    <GoZap className={styles.icon} />
                  </div>
                  <h5 className={`${styles.title} card-title`}>İnovasyon</h5>
                </div>
                <div className="card-body text-center">
                  <p className="card-text">
                    Teknolojik gelişmeleri takip ederek müşterilerimize en yenilikçi
                    çözümleri sunmaya devam ediyoruz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.section_six}>
        <div className="container text-center text-white">
          <h1 className="bonero-title-lg">Ekibimiz</h1>
          <p className="bonero-text">
            Deneyimli ve uzman kadromuzla müşterilerimize en iyi hizmeti sunuyoruz.
          </p>
        </div>

        <div className='container'>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="card mb-3">
                <img src="/main/ekip1.jpg" className="card-img-top" alt="Ekip Üyesi" />
                <div className="card-body">
                  <h5 className="card-title">Zeynep Özkan</h5>
                  <p className="card-text">Genel Müdür</p>
                  <small className="text-body-secondary">
                    15+ yıllık sektör deneyimi ile şirketimizin stratejik vizyonunu yönetmektedir.
                  </small>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card mb-3">
                <img src="/main/ekip2.jpg" className="card-img-top" alt="Ekip Üyesi" />
                <div className="card-body">
                  <h5 className="card-title">Zeynep Özkan</h5>
                  <p className="card-text">Genel Müdür</p>
                  <small className="text-body-secondary">
                    15+ yıllık sektör deneyimi ile şirketimizin stratejik vizyonunu yönetmektedir.
                  </small>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card mb-3">
                <img src="/main/ekip3.jpg" className="card-img-top" alt="Ekip Üyesi" />
                <div className="card-body">
                  <h5 className="card-title">Zeynep Özkan</h5>
                  <p className="card-text">Genel Müdür</p>
                  <small className="text-body-secondary">
                    15+ yıllık sektör deneyimi ile şirketimizin stratejik vizyonunu yönetmektedir.
                  </small>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card mb-3">
                <img src="/main/ekip1.jpg" className="card-img-top" alt="Ekip Üyesi" />
                <div className="card-body">
                  <h5 className="card-title">Zeynep Özkan</h5>
                  <p className="card-text">Genel Müdür</p>
                  <small className="text-body-secondary">
                    15+ yıllık sektör deneyimi ile şirketimizin stratejik vizyonunu yönetmektedir.
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles.section_nine}`}>
        <div className="text-center">
          <h1 className="fw-bold">Yolculuğumuz</h1>
          <p>2009'dan bugüne kadar geçen sürede yaşadığımız önemli dönüm noktaları.</p>
        </div>

        <div className={`${styles.timelineWrapper}`}>
          <div className={`${styles.timeline}`}>
            
            <div className={`${styles.timelineItem} ${styles.right}`}>
              <div className={`${styles.contentBox}`}>
                <h3>2009</h3>
                <h4>Kuruluş</h4>
                <p>Terzi Group'un temelleri atıldı ve ilk müşterilerimizle çalışmaya başladık.</p>
              </div>
            </div>

            <div className={`${styles.timelineItem} ${styles.left}`}>
              <div className={`${styles.contentBox}`}>
                <h3>2015</h3>
                <h4>Büyüme</h4>
                <p>100+ kurumsal müşteriye ulaştık ve hizmet ağımızı genişlettik.</p>
              </div>
            </div>

            <div className={`${styles.timelineItem} ${styles.right}`}>
              <div className={`${styles.contentBox}`}>
                <h3>2020</h3>
                <h4>Dijital Dönüşüm</h4>
                <p>Online platformumuzu geliştirdik ve e-ticaret hizmetlerimizi başlattık.</p>
              </div>
            </div>

            <div className={`${styles.timelineItem} ${styles.left}`}>
              <div className={`${styles.contentBox}`}>
                <h3>2024</h3>
                <h4>Uluslararası Genişleme</h4>
                <p>Avrupa pazarına açıldık ve global ortaklıklar kurduk.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
      <section className={`${styles.section_seven}`}>
        <div className="container text-center text-white">  
          <h1 className='terzi-title-lg'>Bizimle İletişime Geçin</h1>
          <p className='terzi-text'>
            Projeleriniz için profesyonel destek almak istiyorsanız, uzman
            ekibimizle görüşmek için hemen iletişime geçin.
          </p>
          <div className={`d-flex justify-content-center align-items-center gap-5 my-5`}>
            <div><MdOutlinePhone /> 0850 123 45 67</div>
            <div><FaRegClock /> info@terzigroup.com</div>
            <div><IoMdCheckmarkCircleOutline /> İstanbul, Türkiye</div>
          </div>
          <button className='btn'>Hemen İletişime Geçin</button>
        </div>
      </section>
    </main>
  )
}

export default kurumsal