import './home.page.scss';
import { useEffect, useRef, useState } from "react";
import { useImmer } from 'use-immer';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
// 
import Lottie from 'lottie-react';
import codingAnime from '../../assets/animations/coding.json';
import hexagon from '../../assets/icons/hexagon-svgrepo-com.svg';
import reactPng from '../../assets/images/logo512.png';
import gsapSvg from '../../assets/images/greensock.svg';
import tailwindJpg from '../../assets/images/tailwind.jpg';
import meImg from '../../assets/images/Me (2).jpg';
import soroushImg from '../../assets/images/soroush.jpg';
import mosaddadImg from '../../assets/images/mosaddad.jpg';
import golzardImg from '../../assets/images/golzard.jpg';
import athenaImg from '../../assets/images/athena.jpg';
import erfanImg from '../../assets/images/erfan.jpg';
// 
import connectionsImg from '../../assets/images/8795638.jpg';
import Header from '../../components/header/header';

const HomePage = () => {
    const container_1 = useRef(null);
    const container_2 = useRef(null);
    const pageOnHexagon = useRef(null);
    const cardsDetailEl = useRef(null);
    const secondSectionEl = useRef(null);

    const hexCards = useRef(null);
    // const imageWindowsCoveredContainer = useRef(null);
    const imageWindowsCovered = useRef(null);

    gsap.registerPlugin(ScrollTrigger);

    const [hexagonsXMove, setHexagonsXMove] = useState(null);
    const [hexagonsYMove, setHexagonsYMove] = useState(null);

    const [onWindowsXMove, setOnWindowsXMove] = useState(null);
    const [onWindowsYMove, setOnWindowsYMove] = useState(null)

    const [cardsCols, setCardsCols] = useState([]);

    const [headerZIndex, setHeaderZIndex] = useImmer(100);

    const BlogCard = ({ img, title, content }) => {
        return (
            <div className="card">
                <figure className="front">
                    <div className={`img-container ${title}`}>
                        <img className="card-img-top" src={img} alt="Card image cap" />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title text-center">
                            {title}
                        </h5>
                        <p className="card-text">
                            {content}
                        </p>
                        <i className="bi bi-chevron-double-down"></i>
                    </div>
                </figure>
                <figure className="back">
                    Web Rise
                </figure>
            </div>
        )
    }

    const TeamPersonsCard = ({ img, name, ability, description }) => {
        return (
            <div className="custom-card">
                <div>
                    <div className="user-img-behind"></div>
                    <div className="user-img">
                        <img src={img} alt="" />
                    </div>
                    <div className="body">
                        <h4 className="title">
                            {name}
                        </h4>
                        <span>
                            {ability}
                        </span>
                        <div className="line"></div>
                        <p>
                            یک چارچوب CSS** مبتنی بر کلاس‌های کاربردی** است که به شما امکان می‌دهد رابط‌های کاربری (UI) را مستقیماً با نوشتن کلاس‌های CSS در HTML خود بسازید.
                        </p>
                    </div>
                </div>
            </div>
        )
    }

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container_1.current,
                start: "top top",
                end: `+=${container_1.current.offsetHeight}`,
                // markers: true,
                scrub: 1,
                pin: true,
                anticipatePin: 1
            },
            defaults: {
                stagger: {
                    amount: 0.2,
                    from: "random"
                },
                // up block code does not working
                duration: 1,
                ease: "power2"
            }
        });
        tl.fromTo('.one',
            {
                yPercent: 0,
                y: 0
            },
            {
                yPercent: -100
            },
        ).fromTo('.two',
            {
                yPercent: 0,
                y: 0
            },
            {
                yPercent: -100
            },
        );
        // 
        const paraAnimation = (para) => {
            const paraTl = gsap.timeline();
            paraTl.from(para, {
                duration: 1,
                x: 200,
                opacity: 0
                // scale: 0,
            });
            return paraTl;
        }
        const codingLottieAnimation = (box) => {
            const cLTl = gsap.timeline();
            cLTl.from(box, {
                duration: 1,
                y: 400,
                // scale: 0
            });
            return cLTl;
        }
        const mainTl = gsap.timeline({
            scrollTrigger: {
                trigger: "section.second",
                start: "top 60%",
                end: "100% 100%",
                // markers: true,
                scrub: 2,
            }
        });

        mainTl.add("start");
        mainTl.add(paraAnimation(".para_1"))
            .add(paraAnimation(".para_2", "start+=0.3"))
            .add(codingLottieAnimation(".animation-box"), "start")
        // 
        gsap.set(".hexagons img", {
            autoAlpha: 0,
            transformOrigin: "50% 50%",
            scale: 0
        })
    });

    useGSAP(() => {
        gsap.set(".hex", {
            autoAlpha: 0,
            transformOrigin: "50% 50%",
            scale: 0
        })

        const newTl = gsap.timeline({
            scrollTrigger: {
                trigger: ".para_1",
                start: "top top",
                end: "+=200",
                // markers: true,
                scrub: 1
            },
            defaults: {
                stagger: {
                    amount: 0.3,
                    from: "random"
                },
                duration: 1,
                autoAlpha: 1,
                scale: 1,
                rotate: 90
            }
        });
        newTl.to(".hex", {});
    });

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                // trigger: '.hex_2',
                trigger: '.column.first',
                start: 'top top',
                end: '+=270',
                // markers: true,
                scrub: 2,
            },
            defaults: {
                stagger: {
                    amount: 0.5,
                    from: "random"
                },
                duration: 2,
                ease: "power2.out",
                // bottom: -100,
                top: 300,
                opacity: 0
            }
        });
        tl.from('.hex-card', {});
    });

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".card_4",
                start: "top top",
                end: "+=400",
                // markers: true,
                scrub: 1
            },
            defaults: {
                stagger: {
                    amount: 1,
                    from: "end"
                },
                duration: 1,
                ease: "power3.out",
                // opacity: 0,
                // top: 400
                scale: 0,
                autoAlpha: 0
            }
        });
        tl.from('.col-4.blog-card-col', {});
    });

    useEffect(() => {
        const cardsCols = document.querySelectorAll(".forth .col");
        if (cardsCols) {
            setCardsCols(cardsCols);
        }
        // const hexagonsWidth = pageOnHexagon.current.offsetWidth;
        // const hexagonsHeight = pageOnHexagon.current.offsetHeight;

        // console.log(
        //     hexagonsWidth,
        //     hexagonsHeight
        // );

        const onHexagonMove = (ev) => {
            // // let mouseX = Math.floor(ev.offsetX),
            // //     mouseY = Math.floor(ev.offsetY);
            // setHexagonsXMove(Math.floor(-(ev.offsetX - (hexagonsWidth / 2)) * (20 / hexagonsWidth)));
            // setHexagonsYMove(Math.floor(-(ev.offsetY - (hexagonsHeight / 2)) * (20 / hexagonsHeight)));

            // // console.log(
            // //     'X: ', mouseX,
            // //     'Y: ', mouseY
            // // );
        }

        // pageOnHexagon.current.addEventListener("mousemove", onHexagonMove);

        cardsCols.forEach(el => {
            el.addEventListener("click", () => {
                const hideHeader = () => {
                    return new Promise((resolve) => {
                        resolve(
                            setHeaderZIndex(-1)
                        )
                    });
                }
                hideHeader().then(() => {
                    document.querySelector('.forth.container').scrollIntoView({ behavior: 'smooth' });
                    el.classList.add("active");
                    cardsDetailEl.current.classList.add("active");
                    document.body.classList.add("overflow-hidden");
                });
            });
        });
        // _______________ //
        const imageWindowsCoveredWidth = imageWindowsCovered.current.offsetWidth;
        const imageWindowsCoveredHeight = imageWindowsCovered.current.offsetHeight;

        const onWindowsMove = (ev) => {
            // console.log(ev.offsetX);

            // let rectangleDiameter = Math.floor(Math.sqrt(ev.offsetX * ev.offsetY * 2));
            // console.log(rectangleDiameter - (imageWindowsCoveredHeight / 2));
            // setOnWindowsXMove(Math.floor(-(ev.offsetX - (imageWindowsCoveredWidth / 2)) * (20 / imageWindowsCoveredWidth)));
            // setOnWindowsYMove(Math.floor(-(ev.offsetY - (hexagonsHeight / 2)) * (20 / hexagonsHeight)));
            // let value = (ev.offsetX - (imageWindowsCoveredWidth / 2)) * (4 / imageWindowsCoveredWidth);
            // // console.log(value);
            let newValue = (Math.floor((Math.sqrt(ev.offsetX * ev.offsetY * 2)) - (imageWindowsCoveredHeight / 2)) * (2 / imageWindowsCoveredHeight));
            console.log(newValue);
            document.body.style.setProperty('--movePercent', `${newValue}%`);
        }

        imageWindowsCovered.current.addEventListener("mousemove", onWindowsMove);
    }, []);


    const closeCardsDetail = () => {
        cardsCols.forEach(el => {
            const visibleHeader = () => {
                return new Promise((resolve) => {
                    cardsDetailEl.current.classList.remove("active");
                    document.body.classList.remove("overflow-hidden");
                    el.classList.remove("active");
                    el.classList.add('done');
                    if (el.getAttribute('class').includes('done')) {
                        console.log('done');
                        resolve();
                    }
                });
            }
            visibleHeader().then(() => {
                setHeaderZIndex(100);
                el.classList.remove('done');
            });
        });
    }

    console.log('rendered');
    /** @VIEW */
    return (
        <>
            <Header homeElements={[secondSectionEl]} headerZIndex={headerZIndex} />
            <div className="home-page">
                <section ref={container_1} className="first gsap-slider-container">
                    <div className="one">
                        <h1>
                            Web Rise
                        </h1>
                    </div>
                    <div className="two">
                        <p>
                            تست 2
                        </p>
                    </div>
                    <div className="three">
                        <p>
                            تست 3
                        </p>
                    </div>
                </section>
                <section ref={secondSectionEl} className="second container">
                    {/* <p>
                    بیا یکمی بیشتر با هم آشنا شیم...
                    بیا بشناسیم همو...
                </p> */}
                    <div className="row align-items-center py-5">
                        <div className="col col-6">
                            <p className="para_1">
                                سلام خوش اومدی.
                                <br />
                                ما یه تیم مجرب از افراد برنامه نویس هستیم که در هدف طراحی وب اپلیکیشن
                                و خدمات مرتبط باهاش
                                تصمیم گرفتیم شرکت خودمون رو داشته باشه و بتونیم مهارتامونو در کنار هم گسترش بدیم .
                                <br />
                                اینجا webrise هست
                                <br />
                                طلوع جدیدی در دنیای وب...
                                <br />
                            </p>
                            <p className="para_2">
                                ما سعی داریم متفاوت از بقیه عمل کنیم و فقط شعار نباشیم
                                از به روز ترین پلتفرم ها در توسعه وب اپ هامون بهره ببریم که تجربه کاربری منحصر
                                به فردی رو به کاربر ارائه بدیم
                            </p>
                        </div>
                        <div className="col col-6">
                            <Lottie className="animation-box" animationData={codingAnime} />
                        </div>
                    </div>
                </section>
                <section className="third container">
                    <div className="page-title">
                        <h2>
                            وجه تمایز ما چیه؟
                        </h2>
                        <hr />
                    </div>
                    <div className="row align-items-center">
                        <div className="col col-4">
                            {/* <div ref={container_2} className="hexagons">
                            <img className="hex hex_1" style={{
                                transform: `translate(${hexagonsXMove}px, ${hexagonsYMove}px)`,
                            }} src={hexagon} alt="" />
                            <img className="hex hex_2" style={{
                                transform: `translate(${-hexagonsXMove}px, ${-hexagonsYMove}px)`,
                            }} src={hexagon} alt="" />
                            <img className="hex hex_3" style={{
                                transform: `translate(${-hexagonsXMove}px, ${hexagonsYMove}px)`,
                            }} src={hexagon} alt="" />
                            <img className="hex hex_4" style={{
                                transform: `translate(${hexagonsXMove}px, ${-hexagonsYMove}px)`,
                            }} src={hexagon} alt="" />
                            <div ref={pageOnHexagon} className="page-on-hexagons"></div>
                        </div> */}
                            <div className="img-container">
                                <img src={connectionsImg} alt="" />
                                <div className="column first"></div>
                                <div className="column second"></div>
                                <div className="column third"></div>
                                <div className="column forth"></div>
                                <div className="column fifth"></div>
                                <div className="column sixth"></div>
                                <div className="column seventh"></div>
                                <div className="column Eighth"></div>
                                <div className="column ninth"></div>
                                <div className="column tenth"></div>
                                <div className="column eleventh"></div>
                                <div className="column twelfth"></div>
                                <div ref={imageWindowsCovered} className="img-cover"></div>
                            </div>
                        </div>
                        <div className="col col-7">
                            <p className="para_3">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                            </p>
                        </div>
                        <div className="col col-1"></div>
                    </div>
                </section>
                <section className="fifth container">
                    <div className="page-title">
                        <h2 className="not-start" style={{ right: 145 }}>
                            چه خدماتی ارائه میدیم؟
                        </h2>
                        <hr />
                    </div>
                    <div ref={hexCards} className="hexagon-cards">
                        <img className="hex-card card_1" src={hexagon} alt="" />
                        <img className="hex-card card_2" src={hexagon} alt="" />
                        <img className="hex-card card_3" src={hexagon} alt="" />
                        <img className="hex-card card_4" src={hexagon} alt="" />
                        <img className="hex-card card_5" src={hexagon} alt="" />
                        <img className="hex-card card_6" src={hexagon} alt="" />
                        <img className="hex-card card_7" src={hexagon} alt="" />
                    </div>
                </section>
                <section className="forth container">
                    <div className="page-title">
                        <h2 className="not-start" style={{ right: '40%' }}>
                            {/* بدردت میخوره */}
                            به کارت میاد
                        </h2>
                        <hr />
                    </div>
                    <div className="row align-items-center">
                        <div className="col col-4 blog-card-col">
                            <BlogCard
                                img={reactPng}
                                title="react"
                                content="ری‌اکت (React) یک کتابخانه جاوا اسکریپتی متن‌باز برای ساخت رابط کاربری (UI) است که توسط فیسبوک توسعه یافته و نگهداری می‌شود." />
                        </div>
                        <div className="col col-4 blog-card-col">
                            <BlogCard
                                img={gsapSvg}
                                title="gsap"
                                content="یک کتابخانه جاوا اسکریپت قدرتمند و محبوب برای ایجاد انیمیشن‌های وب است. این کتابخانه توسط GreenSock توسعه یافته و نگهداری می‌شود و به دلیل عملکرد بالا، انعطاف‌پذیری و مجموعه ویژگی‌های غنی شناخته شده است." />
                        </div>
                        <div className="col col-4 blog-card-col">
                            <BlogCard
                                img={tailwindJpg}
                                title="tailwind"
                                content="یک چارچوب CSS** مبتنی بر کلاس‌های کاربردی** است که به شما امکان می‌دهد رابط‌های کاربری (UI) را مستقیماً با نوشتن کلاس‌های CSS در HTML خود بسازید." />
                        </div>
                    </div>
                </section>
                <div ref={cardsDetailEl} className="cards-detail">
                    <div className="head" onClick={closeCardsDetail}></div>
                    <div className="row">
                        <div className="col col-8">
                            <p>
                                ری‌اکت (React) چیست؟
                                ری‌اکت (React) یک کتابخانه جاوا اسکریپتی متن‌باز برای ساخت رابط کاربری (UI) است که توسط فیسبوک توسعه یافته و نگهداری می‌شود.

                                ویژگی‌های کلیدی ری‌اکت:

                                مبتنی بر کامپوننت: رابط کاربری با استفاده از قطعات کوچک و قابل استفاده مجدد به نام کامپوننت ساخته می‌شود.
                                یادگیری آسان: سینتکس ساده و قابل فهمی دارد که یادگیری آن را آسان می‌کند.
                                عملکرد بالا: از الگوریتم‌های کارآمد برای به روز رسانی رابط کاربری استفاده می‌کند و عملکرد بالایی را ارائه می‌دهد.
                                مقیاس‌پذیری: برای ساخت برنامه‌های کاربردی پیچیده و مقیاس‌پذیر مناسب است.
                                جامعه بزرگ: جامعه توسعه‌دهندگان فعال و بزرگی دارد که از یکدیگر پشتیبانی می‌کنند.
                                مزایای استفاده از ری‌اکت:

                                ساخت رابط کاربری پویا و تعاملی: ری‌اکت به شما امکان می‌دهد رابط‌های کاربری پویا و تعاملی بسازید که به طور خودکار به تغییرات در داده‌ها پاسخ می‌دهند.
                                کاهش زمان توسعه: با استفاده از کامپوننت‌های قابل استفاده مجدد، می‌توانید زمان توسعه را به طور قابل توجهی کاهش دهید.
                                نوشتن کد تمیز و قابل نگهداری: سینتکس ساده و قابل فهم ری‌اکت، نوشتن کد تمیز و قابل نگهداری را آسان می‌کند.
                                ایجاد برنامه‌های کاربردی مقیاس‌پذیر: ری‌اکت برای ساخت برنامه‌های کاربردی پیچیده و مقیاس‌پذیر مناسب است.
                                کاربردهای ری‌اکت:

                                ساخت وب‌سایت‌های تک صفحه‌ای (SPAs): ری‌اکت برای ساخت SPAs که رابط کاربری روان و تعاملی دارند، ایده‌آل است.
                                ساخت برنامه‌های کاربردی موبایل: با استفاده از کتابخانه‌های React Native، می‌توانید برنامه‌های کاربردی موبایل را با ری‌اکت بسازید.
                                ساخت رابط‌های کاربری دسکتاپ: ری‌اکت برای ساخت رابط‌های کاربری دسکتاپ با استفاده از کتابخانه‌هایی مانند Electron نیز قابل استفاده است.
                                اگر به دنبال یادگیری یک کتابخانه جاوا اسکریپتی قدرتمند و منعطف برای ساخت رابط کاربری هستید، ری‌اکت گزینه عالی است.
                            </p>
                            <p>
                                ری‌اکت (React) چیست؟
                                ری‌اکت (React) یک کتابخانه جاوا اسکریپتی متن‌باز برای ساخت رابط کاربری (UI) است که توسط فیسبوک توسعه یافته و نگهداری می‌شود.

                                ویژگی‌های کلیدی ری‌اکت:

                                مبتنی بر کامپوننت: رابط کاربری با استفاده از قطعات کوچک و قابل استفاده مجدد به نام کامپوننت ساخته می‌شود.
                                یادگیری آسان: سینتکس ساده و قابل فهمی دارد که یادگیری آن را آسان می‌کند.
                                عملکرد بالا: از الگوریتم‌های کارآمد برای به روز رسانی رابط کاربری استفاده می‌کند و عملکرد بالایی را ارائه می‌دهد.
                                مقیاس‌پذیری: برای ساخت برنامه‌های کاربردی پیچیده و مقیاس‌پذیر مناسب است.
                                جامعه بزرگ: جامعه توسعه‌دهندگان فعال و بزرگی دارد که از یکدیگر پشتیبانی می‌کنند.
                                مزایای استفاده از ری‌اکت:

                                ساخت رابط کاربری پویا و تعاملی: ری‌اکت به شما امکان می‌دهد رابط‌های کاربری پویا و تعاملی بسازید که به طور خودکار به تغییرات در داده‌ها پاسخ می‌دهند.
                                کاهش زمان توسعه: با استفاده از کامپوننت‌های قابل استفاده مجدد، می‌توانید زمان توسعه را به طور قابل توجهی کاهش دهید.
                                نوشتن کد تمیز و قابل نگهداری: سینتکس ساده و قابل فهم ری‌اکت، نوشتن کد تمیز و قابل نگهداری را آسان می‌کند.
                                ایجاد برنامه‌های کاربردی مقیاس‌پذیر: ری‌اکت برای ساخت برنامه‌های کاربردی پیچیده و مقیاس‌پذیر مناسب است.
                                کاربردهای ری‌اکت:

                                ساخت وب‌سایت‌های تک صفحه‌ای (SPAs): ری‌اکت برای ساخت SPAs که رابط کاربری روان و تعاملی دارند، ایده‌آل است.
                                ساخت برنامه‌های کاربردی موبایل: با استفاده از کتابخانه‌های React Native، می‌توانید برنامه‌های کاربردی موبایل را با ری‌اکت بسازید.
                                ساخت رابط‌های کاربری دسکتاپ: ری‌اکت برای ساخت رابط‌های کاربری دسکتاپ با استفاده از کتابخانه‌هایی مانند Electron نیز قابل استفاده است.
                                اگر به دنبال یادگیری یک کتابخانه جاوا اسکریپتی قدرتمند و منعطف برای ساخت رابط کاربری هستید، ری‌اکت گزینه عالی است.
                            </p>
                            <p>
                                ری‌اکت (React) چیست؟
                                ری‌اکت (React) یک کتابخانه جاوا اسکریپتی متن‌باز برای ساخت رابط کاربری (UI) است که توسط فیسبوک توسعه یافته و نگهداری می‌شود.

                                ویژگی‌های کلیدی ری‌اکت:

                                مبتنی بر کامپوننت: رابط کاربری با استفاده از قطعات کوچک و قابل استفاده مجدد به نام کامپوننت ساخته می‌شود.
                                یادگیری آسان: سینتکس ساده و قابل فهمی دارد که یادگیری آن را آسان می‌کند.
                                عملکرد بالا: از الگوریتم‌های کارآمد برای به روز رسانی رابط کاربری استفاده می‌کند و عملکرد بالایی را ارائه می‌دهد.
                                مقیاس‌پذیری: برای ساخت برنامه‌های کاربردی پیچیده و مقیاس‌پذیر مناسب است.
                                جامعه بزرگ: جامعه توسعه‌دهندگان فعال و بزرگی دارد که از یکدیگر پشتیبانی می‌کنند.
                                مزایای استفاده از ری‌اکت:

                                ساخت رابط کاربری پویا و تعاملی: ری‌اکت به شما امکان می‌دهد رابط‌های کاربری پویا و تعاملی بسازید که به طور خودکار به تغییرات در داده‌ها پاسخ می‌دهند.
                                کاهش زمان توسعه: با استفاده از کامپوننت‌های قابل استفاده مجدد، می‌توانید زمان توسعه را به طور قابل توجهی کاهش دهید.
                                نوشتن کد تمیز و قابل نگهداری: سینتکس ساده و قابل فهم ری‌اکت، نوشتن کد تمیز و قابل نگهداری را آسان می‌کند.
                                ایجاد برنامه‌های کاربردی مقیاس‌پذیر: ری‌اکت برای ساخت برنامه‌های کاربردی پیچیده و مقیاس‌پذیر مناسب است.
                                کاربردهای ری‌اکت:

                                ساخت وب‌سایت‌های تک صفحه‌ای (SPAs): ری‌اکت برای ساخت SPAs که رابط کاربری روان و تعاملی دارند، ایده‌آل است.
                                ساخت برنامه‌های کاربردی موبایل: با استفاده از کتابخانه‌های React Native، می‌توانید برنامه‌های کاربردی موبایل را با ری‌اکت بسازید.
                                ساخت رابط‌های کاربری دسکتاپ: ری‌اکت برای ساخت رابط‌های کاربری دسکتاپ با استفاده از کتابخانه‌هایی مانند Electron نیز قابل استفاده است.
                                اگر به دنبال یادگیری یک کتابخانه جاوا اسکریپتی قدرتمند و منعطف برای ساخت رابط کاربری هستید، ری‌اکت گزینه عالی است.
                            </p>
                        </div>
                        <div className="col col-4"></div>
                    </div>
                </div>
                <section className="sixth container">
                    <div className="page-title">
                        <h2 className="not-start" style={{ left: 145 }}>
                            تیم ما
                        </h2>
                        <hr />
                    </div>
                    <div className="row">
                        <div className="col-3 mb-3">
                            <TeamPersonsCard name="محمد کمال زاده" ability="Front-end developer & team manager" img={meImg} />
                        </div>
                        <div className="col-3 mb-3">
                            <TeamPersonsCard name="سروش قره خانیان" ability="Project manager & investor" img={soroushImg} />
                        </div>
                        <div className="col-3 mb-3">
                            <TeamPersonsCard name="امیر مسدد" ability="Back-end developer" img={mosaddadImg} />
                        </div>
                        <div className="col-3 mb-3">
                            <TeamPersonsCard name="امیر گلزرد" ability="UI/UX designer" img={golzardImg} />
                        </div>
                        <div className="col-3 mb-3">
                            <TeamPersonsCard name="آتنا ذولفقاری" ability="SEO specialist" img={athenaImg} />
                        </div>
                        <div className="col-3 mb-3">
                            <TeamPersonsCard name="شهرام مودت" ability="SEO support" img={erfanImg} />
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default HomePage;