import React from 'react'
import styles from "./page.module.scss";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FiMessageCircle } from "react-icons/fi";
import { FiMessageSquare } from "react-icons/fi";
import { FaRegClock } from "react-icons/fa6";
import { MdOutlineShield } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaRegEnvelope } from "react-icons/fa6";
import { MdOutlinePhone } from "react-icons/md";
import { TiLocationArrowOutline } from "react-icons/ti";
import { CiLocationOn } from "react-icons/ci";
import { LuBuilding2 } from "react-icons/lu";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaRegQuestionCircle } from "react-icons/fa";

function iletisim() {
  return (
    <main>
      <section className={`${styles.section_one}`}>
        <div className="container text-center text-white">
          <div className='d-flex justify-content-center'>
            <div className={`${styles.icon_area} d-flex justify-content-center align-items-center my-3`}>
              <FiMessageSquare />
            </div>
          </div>    
          <h1 className='terzi-title-lg'>Bizimle İletişime Geçin</h1>
          <p className='terzi-text'>🚀 Sorularınız için buradayız. Size en kısa sürede dönüş yapacağız.</p>
          <small className='terzi-text-sm'>✨ Hayallerinizi gerçeğe dönüştürelim</small>
          <div className={`d-flex justify-content-center align-items-center gap-3 my-5`}>
            <div className={`white-badge badge rounded-pill`}><MdOutlinePhone /> Anında Yanıt</div>
            <div className={`white-badge badge rounded-pill`}><FaRegClock /> 7/24 Destek</div>
            <div className={`white-badge badge rounded-pill`}><IoMdCheckmarkCircleOutline /> Profesyonel Çözüm</div>
          </div>
        </div>
      </section>
      <section className={`${styles.section_two}`}>
      <div className="row">
          <div className={`${styles.left_pad} col-lg-8`}>
            <h2 className="mb-4"><FiMessageSquare className={`${styles.icon}`}/>Mesaj Gönderin</h2>
            <form>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="ad" className="form-label">
                    Ad soyad *
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="ad"
                    placeholder="Adınız ve soyadınız"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="email" className="form-label">
                    E-posta *
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="ornek@gmail.com"
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="ad" className="form-label">
                    Telefon
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="ad"
                    placeholder="+90 (5XX) XXX XX XX"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="email" className="form-label">
                    Şirket
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Şirket adı"
                  />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="konu" className="form-label">
                  Konu *
                </label>
                <select className="form-select" id="konu" defaultValue="">
                    <option value="" disabled>
                        Konu seçin
                    </option>
                    <option value={1}>Genel Bilgi</option>
                    <option value={2}>Satış</option>
                    <option value={3}>Teknik Destek</option>
                    <option value={4}>İş Ortaklığı</option>
                    <option value={5}>Şikayet</option>
                    <option value={6}>Diğer</option>
                </select>               
              </div>
              <div className="mb-3">
                <label htmlFor="mesaj" className="form-label">
                  Mesaj *
                </label>
                <textarea
                  className="form-control"
                  id="mesaj"
                  rows={5}
                  placeholder="Mesajınızı buraya yazın..."
                  defaultValue={""}
                />
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-danger px-4 w-100">
                  <TiLocationArrowOutline className={`${styles.icon}`}/> Mesaj Gönder
                </button>
              </div>
            </form>
          </div>
          <div className="col-lg-4">
            <div className={`${styles.right_pad}`}>
              <h5>İletişim Bilgileri</h5>
              <div className={`${styles.glass_card}`}>
                <div className={`${styles.icon_wrapper} ${styles.orange}`}>
                  <MdOutlinePhone/>
                </div>
                <div className="ms-3">
                  <h3 className={`${styles.card_title}`}>Telefon</h3>
                  <p className={`${styles.card_text}`}>+90 (212) 555 0123</p>
                  <small className={`${styles.card_text}`}>Pazartesi - Cuma: 09:00 - 18:00</small>
                </div> 
              </div>
              <div className={`${styles.glass_card}`}>
                <div className={`${styles.icon_wrapper} ${styles.orange}`}>
                  <FaRegEnvelope/>
                </div>
                <div className="ms-3">
                  <h3 className={`${styles.card_title}`}>E-posta</h3>
                  <p className={`${styles.card_text}`}>info@terzigroup.com</p>
                  <small className={`${styles.card_text}`}>24 saat içinde yanıt alın</small>
                </div> 
              </div>
              <div className={`${styles.glass_card}`}>
                <div className={`${styles.icon_wrapper} ${styles.orange}`}>
                  <CiLocationOn/>
                </div>
                <div className="ms-3">
                  <h3 className={`${styles.card_title}`}>Adres</h3>
                  <p className={`${styles.card_text}`}>Levent Mahallesi, İstanbul</p>
                  <small className={`${styles.card_text}`}>Merkez Ofis</small>
                </div> 
              </div>
              <div className={`${styles.glass_card}`}>
                <div className={`${styles.icon_wrapper} ${styles.orange}`}>
                  <FaRegClock/>
                </div>
                <div className="ms-3">
                  <h3 className={`${styles.card_title}`}>Çalışma Saatleri</h3>
                  <p className={`${styles.card_text}`}>Pazartesi - Cuma</p>
                  <small className={`${styles.card_text}`}>09:00 - 18:00</small>
                </div> 
              </div>
            </div>
            <div className={`${styles.right_pad_bottom}`}>
              <h5>Hızlı Erişim</h5>
              <button type="submit" className={`${styles.red} btn px-4 mt-2 w-100`}>
                <MdOutlinePhone className={`${styles.icon}`}/> Hemen Ara
              </button>
              <button type="submit" className={`${styles.gray} btn px-4 mt-2 w-100`}>
                <LuBuilding2 className={`${styles.icon}`}/> Kurumsal Portal
              </button>
              <button type="submit" className={`${styles.gray} btn px-4 mt-2 w-100`}>
                <IoDocumentTextOutline className={`${styles.icon}`}/> Katalog İndir
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles.section_three}`}>
        <h6 className='ms-1'>Konum</h6>
        <p className='ms-1'>Merkez ofisimizi ziyaret edin</p>
        <div style={{ width: "100%", height: 400 }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.1103977017077!2d29.0183843!3d41.0857442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cacb7f379ebdb9%3A0xb33c21f3dd5c00f4!2sGoogle%20Türkiye!5e0!3m2!1str!2str!4v1693647823441!5m2!1str!2str"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      <section className={`${styles.section_four}`}>
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
    </main>
  )
}

export default iletisim