import cloth from "../assets/bluehoodie.png"
import iphone from "../assets/phone.png"
import cosmetics from "../assets/cosmetics.png"
import headphone from "../assets/headset.png"
import electronics from "../assets/amazon.png"
import jacket from "../assets/jacket.png"
import jean from "../assets/jean.png"
import bose from "../assets/hdp.png"
import belt from "../assets/belt.png"
import gucci from "../assets/gucci.png"
import purse from "../assets/bag.png"
import wakiki from "../assets/lc.png"
import sinsay from "../assets/sinsay.png"
import be from "../assets/be.png"
import cc from "../assets/cc.png"
import celio from "../assets/celio.png"
import hoodie from "../assets/hood.png"
import shirt from "../assets/shirt.png"

export default function HomePage() {
    return (
        <div className="home-box">
            <div className="header-wrapper">
                <header className="hero">
                    <h3 className="tag">exclusive collection</h3>
                    <h1>premium cloths <br /> & accessories collection</h1>
                    <p>Level up your fashion experience with up to 50% of top quality <br /> products and brand only for a limited time.</p>
                    <button>explore deals</button>
                </header>
            </div>
            <div className="category">
                <section className="section-head">
                    <h1>shop by <br /> catgeory</h1>
                    <article className="section-line"></article>
                </section>
                <div className="category-wrapper">
                    <div className="cat cloth">
                        <span className="arrow"><ion-icon name="arrow-forward"></ion-icon></span>
                        <img className="cat-img" src={cloth} alt="item" />
                        <ul>
                            <h3>cloths & fashion</h3>
                            <p>125 collections</p>
                        </ul>
                    </div>
                    <div className="cat accessories">
                        <span className="arrow"><ion-icon name="arrow-forward"></ion-icon></span>
                        <img className="cat-img" src={headphone} alt="item" />
                        <ul>
                            <h3>accessories</h3>
                            <p>125 collections</p>
                        </ul>
                    </div>
                    <div className="sub-category">

                        <div className="cat cosmetics">
                            <img className="cat-img" src={cosmetics} alt="item" />
                            <ul>
                                <h3>cosmetics</h3>
                                <p>125 collections</p>
                            </ul>
                        </div>
                        <div className="cat phone">
                            <img className="cat-img" src={iphone} alt="item" />
                            <ul>
                                <h3>phone</h3>
                                <p>125 collections</p>
                            </ul>
                        </div>
                        <div className="cat electronics">
                            <img className="cat-img" src={electronics} alt="item" />
                            <ul>
                                <h3>electronics</h3>
                                <p>125 collections</p>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="recommend">
                <section className="section-head">
                    <h1>recommended <br /> for you</h1>
                    <article className="section-line"></article>
                    <button className="explore-btn">explore deals <span className="arrow"><ion-icon name="arrow-forward"></ion-icon></span></button>
                </section>
                <section className="recommend-wrapper">
                    <div className="rec-box jacket">
                        <button className="lmtd">limited edition</button>
                        <img className="rec-img" src={jacket} alt="item" />
                        <div className="rec-info">
                            <h3>Boa Fleece Jacket <span className="stars">4.5(1235)</span></h3>
                            <h4>$320.50 <span className="currency">USD</span></h4>
                        </div>
                    </div>
                    <div className="rec-box jean">
                        <img className="rec-img" src={jean} alt="item" />
                        <div className="rec-info">
                            <h3>Boa Fleece Jacket <span className="stars">4.5(1235)</span></h3>
                            <h4>$320.50 <span className="currency">USD</span></h4>
                        </div>
                    </div>
                    <div className="rec-box">
                        <img className="rec-img" src={bose} alt="item" />
                        <div className="rec-info">
                            <h3>Boa Fleece Jacket <span className="stars">4.5(1235)</span></h3>
                            <h4>$320.50 <span className="currency">USD</span></h4>
                        </div>
                    </div>
                    <div className="rec-box belt">
                        <img className="rec-img" src={belt} alt="item" />
                        <div className="rec-info">
                            <h3>Boa Fleece Jacket <span className="stars">4.5(1235)</span></h3>
                            <h4>$320.50 <span className="currency">USD</span></h4>
                        </div>
                    </div>
                    <div className="rec-box">
                        <button className="lmtd">limited edition</button>
                        <img className="rec-img" src={gucci} alt="item" />
                        <div className="rec-info">
                            <h3>Boa Fleece Jacket <span className="stars">4.5(1235)</span></h3>
                            <h4>$320.50 <span className="currency">USD</span></h4>
                        </div>
                    </div>
                    <div className="rec-box purse">
                        <button className="lmtd">limited edition</button>
                        <img className="rec-img" src={purse} alt="item" />
                        <div className="rec-info">
                            <h3>Boa Fleece Jacket <span className="stars">4.5(1235)</span></h3>
                            <h4>$320.50 <span className="currency">USD</span></h4>
                        </div>
                    </div>
                </section>
            </div>
            <div className="browse">
                <div className="browse-wrap">
                    <section className="section-head">
                        <h1>browse <br /> by brand</h1>
                        <article className="section-line"></article>
                        <button className="explore-btn">explore deals <span className="arrow"><ion-icon name="arrow-forward"></ion-icon></span></button>
                    </section>
                    <section className="browse-mid">
                        <div className="browse-control"><ion-icon name="caret-back-outline"></ion-icon></div>
                        <div className="browse-item">
                            <div className="browse-info">
                                <div className="mid-img"></div>
                                <div className="rec-info">
                                    <h3>Boa Fleece Jacket <span className="stars">4.5(1235)</span></h3>
                                    <h4>$320.50 <span className="currency">USD</span></h4>
                                </div>
                            </div>
                        </div>
                        <div className="browse-control"><ion-icon name="caret-forward-outline"></ion-icon></div>
                    </section>
                    <section className="browse-brands">
                        <div className="brand wakiki">
                            <img src={wakiki} alt="brand" />
                        </div>
                        <div className="brand sinsay">
                            <img src={sinsay} alt="brand" />
                        </div>
                        <div className="brand be">
                            <img src={be} alt="brand" />
                        </div>
                        <div className="brand club">
                            <img src={cc} alt="brand" />
                        </div>
                        <div className="brand celio">
                            <img src={celio} alt="brand" />
                        </div>
                    </section>
                </div>
            </div>
            <div className="new">
                <section className="section-head">
                    <h1>new sale for men</h1>
                    <button className="explore-btn">
                        <button><ion-icon name="caret-back-outline"></ion-icon></button>
                        <button><ion-icon name="caret-forward-outline"></ion-icon></button>
                    </button>
                </section>
                <section className="sales">
                    <div className="sale-item">
                        <img src={jacket} alt="item" />
                        <div className="sale-info">
                            <h2>jacket</h2>
                            <p>$40</p>
                        </div>
                    </div>
                    <div className="sale-item">
                        <button className="discount">30% OFF</button>
                        <img src={jean} alt="item" />
                        <div className="sale-info">
                            <h2>jacket</h2>
                            <p>$40</p>
                        </div>
                    </div>
                    <div className="sale-item">
                        <img src={hoodie} alt="item" />
                        <div className="sale-info">
                            <h2>hoodie</h2>
                            <p>$40</p>
                        </div>
                    </div>
                    <div className="sale-item">
                        <button className="discount">30% OFF</button>
                        <img src={shirt} alt="item" />
                        <div className="sale-info">
                            <h2>t-shirt</h2>
                            <p>$40</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}