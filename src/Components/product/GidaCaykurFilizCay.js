/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { SRLWrapper } from "simple-react-lightbox";

function GidaCaykurFilizCay() {
  return (
    <>
      <SRLWrapper>
        <section className="page-header">
          <div
            className="cta-two__bg"
            style={{
              backgroundImage: "url(assets/images/shapes/footer-bg-1.png)",
            }}
          ></div>

          <div className="container">
            <ul className="page-header__breadcrumb list-unstyled">
              <li>
                <a href="index.html">Anasayfa</a>
              </li>
              <li>
                <span>ÜRÜNLERİMİZ</span>
              </li>
            </ul>
            <h2 className="page-header__title">
              ÇAYKUR FİLİZ ÇAY
            </h2>
          </div>
        </section>
        <section className="product">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-6 col-xl-6 wow fadeInLeft"
                data-wow-delay="200ms"
              >
                <div className="product-details__img">
                  <img
                    src="assets/images/lopren/aydinlatici-cilt-bakim-serumu.jpg"
                    alt=""
                  />
                  <div className="product-details__img-search">
                    <a
                      className="img-popup"
                      href="assets/images/lopren/aydinlatici-cilt-bakim-serumu.jpg"
                    ></a>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6 col-xl-6 wow fadeInRight"
                data-wow-delay="300ms"
              >
                <div className="product-details__content">
                  <div className="product-details__top">
                    <h3 className="product-details__title">
                      C VİTAMİNİ VE PEPTİD AYDINLATICI CİLT BAKIM SERUMU
                      <span className="product-details__price">30 ML</span>
                    </h3>
                  </div>
                  <div className="product-details__review">
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                  </div>
                  <div className="product-details__divider"></div>
                  <div className="product-details__excerpt">
                    <p className="list-unstyled product-details__description__lists">
                      <ul className="list-unstyled product-details__description__lists">
                        <li>
                          <span className="icon-right-arrow"></span>Faydaları :
                        </li>
                        Cildi nemlendirir, pürüzsüzleştirir ve aydınlatır. Dış
                        etkenlere ve yaşlanma belirtilerine karşı korumaya
                        yardımcı olur. Cilt yumuşak, ışıltılı ve canlı bir
                        görünüm kazanır.
                        <li>
                          <span className="icon-right-arrow"></span>İçindekiler
                          :
                        </li>
                        Aqua, Hydrolyzed Collagen, Niacinamide, Propylene
                        Glycol, Pisum Sativum Peptide, Panthenol, Sodium
                        Hyaluronate, Arginine, Aspartic Acid, Glycine, Alanine,
                        Serine, Valine, Proline, Threonine, Isoleucine,
                        Histidine, Phenylalanine, Sodium Benzoate, Potassium
                        Sorbate, Hydroxyethylcellulose.
                        <li>
                          <span className="icon-right-arrow"></span>Kullanım
                          Şekli ve Uyarıları :
                        </li>
                        Temiz cildinize sabah ve akşam masaj yaparak uygulayın.
                        Haricen kullanılır. Tahriş olmuş ciltte kullanmayınız.
                        Gün içinde güneş koruyucu kullanınız. Ürünü kullanmadan
                        önce istenmeyen olası yan etkileri ve tahrişi önlemek
                        için yama testi yapmanız önerilir. Tahriş durumunda
                        kullanmayı bırakınız ve dermatoloğa danışınız. Gözle
                        direkt temasından kaçınınız. Temas halinde bol su ile
                        durulayınız. Çocukların ulaşamayacağı bir yerde muhafaza
                        ediniz.
                        <li>
                          <span className="icon-right-arrow"></span>Saklama
                          Koşulları :
                        </li>
                        Ürünü +5°C ve +25°C arasında oda sıcaklığında
                        saklayınız.
                        <br />
                        <br />
                        <li>
                          <span className="fa fa-star"></span> Lütfen Dikkat :
                          Kullanım Talimatını Okuyunuz!..
                          <br />
                        </li>
                      </ul>
                    </p>
                  </div>

                  <div className="product-details__socials">
                    <h4 className="product-details__socials__title">
                      ARKADAŞLARINLA PAYLAŞ
                    </h4>
                    <a href="https://twitter.com/X">
                      <span className="fab fa-twitter"></span>
                    </a>
                    <a href="https://www.facebook.com/">
                      <span className="fab fa-facebook"></span>
                    </a>
                    <a href="https://www.pinterest.com/">
                      <span className="fab fa-pinterest-p"></span>
                    </a>
                    <a href="https://www.instagram.com/">
                      <span className="fab fa-instagram"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </SRLWrapper>
    </>
  );
}

export default GidaCaykurFilizCay;
