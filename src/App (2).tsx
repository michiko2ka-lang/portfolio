import { useEffect } from "react"

const works = [
    {
        no: "01",
        title: "株式会社東和美装",
        subtitle: "コーポレートサイトリニューアル",
        meta: "2026.01 — 2026.03 / 1人",
        image: "/assets/01.png",
        alt: "株式会社東和美装 コーポレートサイトリニューアルの制作実績",
    },
    {
        no: "02",
        title: "Forte Flower",
        subtitle: "Webサイト新規制作",
        meta: "2023.09 — 2023.11 / 1人",
        image: "/assets/90295.png",
        alt: "Forte Flower Webサイト新規制作の制作実績",
    },
    {
        no: "03",
        title: "Y.A. Acc",
        subtitle: "ブランドサイト新規制作",
        meta: "2023.09 — 2023.11 / 1人",
        image: "/assets/c7666.png",
        alt: "Y.A. Acc ブランドサイト新規制作の制作実績",
    },
    {
        no: "04",
        title: "日東工業株式会社",
        subtitle: "工場稼働監視システム",
        meta: "2016.04 — 2020.09 / 50人",
        image: "/assets/67cad.png",
        alt: "日東工業株式会社 工場稼働監視システムの制作実績",
    },
    {
        no: "06",
        title: "三菱重工業株式会社",
        subtitle: "監視 Web システム",
        meta: "2024.05 — 2024.07 / 30人",
        image: "/assets/67cad.png",
        alt: "三菱重工業株式会社 監視Webシステムの制作実績",
    },
]

const history = [
    ["2026.09", "フリーランス", "UI/UXデザイン・Webデザイン・フロント実装"],
    ["2016.03", "IT企業", "メインデザイナー・UI/UXデザイン・Webデザイン・フロント実装・開発"],
    ["2012.06", "アパレルメーカー", "商品企画・営業・生産管理"],
    ["2007.04", "セレクトショップ・アパレル企業", "販売員・VMD"],
]

function SectionLabel({
    index,
    children,
}: {
    index: string
    children: React.ReactNode
}) {
return (
    <div className="section-label">
        <span>{index}</span>
        <p>{children}</p>
    </div>
  )
}

export default function App() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) =>
                entries.forEach(
                  (entry) =>
                    entry.isIntersecting && entry.target.classList.add("is-visible"),
                ),
            { threshold: 0.12 },
        )
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

 return (
    <main>
        <header className="site-header">
            <a className="wordmark" href="#top" aria-label="ページ上部へ">
                MN<span>®</span>
            </a>
            <nav aria-label="メインナビゲーション">
                <a href="#about">About</a>
                <a href="#capabilities">Capabilities</a>
                <a href="#works">Works</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>

        <section className="hero" id="top">
            <div className="hero-kicker">2026</div>
            <div className="hero-type" aria-label="Design portfolio">
                <span className="outline">NAKASHIMA</span>
                <span>MICHIKO</span>
            </div>
            <div className="hero-bottom">
                <p>WEB DESIGNER / UI/UX DESIGNER / FRONTEND ENGINEER</p>
                <p className="jp">感性とロジックで、複雑さを美しく整える。</p>
            </div>
            <div className="scroll-mark">
                <span>SCROLL</span>
                {/*<i />*/}
            </div>
        </section>

        <section className="about shell" id="about">
            <SectionLabel index="01">About / Profile</SectionLabel>
            <div className="about-grid reveal">
                <div className="portrait-wrap">
                  <img src="/assets/me2.jpg" alt="中島充子 プロフィール" />
                </div>
                <div className="about-copy">
                    <p className="eyebrow">
                    WEB DESIGNER / UI/UX DESIGNER / FRONTEND ENGINEER
                    </p>
                    <h1>中島 充子</h1>
                    <p className="lead">
                      感性とロジックで魅せるデザイナー
                    </p>
                    <p>
                      アパレル業界出身の感性を活かしたWebデザインと、複雑な仕様を整理する論理的なUI/UX設計・フロントエンド実装を手がけています。
                    </p>
                    <p>
                      感性を活かした情緒的なデザインと、開発視点を踏まえた論理的なUI/UXを両立。要件定義・情報設計（IA）から実装まで一気通貫で入り込み、デザイン意図や再現性を損なわないクオリティの高いモノづくりを徹底しています。
                    </p>
                </div>
            </div>

            <div className="timeline reveal">
                <p className="eyebrow">CAREER / 2007 — 2026</p>
                    {history.map(([date, company, role]) => (
                        <div className="timeline-row" key={`${date}-${company}`}>
                            <time>{date}</time>
                            <strong>{company}</strong>
                            <span>{role}</span>
                        </div>
                    ))}
            </div>

         </section>

        <section className="capabilities" id="capabilities">
            <div className="shell">
                <SectionLabel index="02">Capabilities</SectionLabel>
                <div className="cap-intro reveal">
                    <h2>
                    Aesthetic sensitivity,
                    <br />
                    engineered with logic.
                    </h2>
                    <p>デザインから実装まで。ブレのないクオリティ管理。</p>
                </div>
            <div className="cap-grid reveal">
                <article>
                    <span>01</span>
                    <h3>Hybrid Design Work</h3>
                    <p>デザインから実装までブレのないクオリティ管理</p>
                </article>
                <article>
                    <span>02</span>
                    <h3>Logical UI/UX Design</h3>
                    <p>感性とロジックを両立。< br/>導線設計から操作性に優れたUI構築までトータルで対応</p>
                </article>
                <article>
                    <span>03</span>
                    <h3>BtoB / Business System</h3>
                    <p>複雑な要件を整理し、使いやすさと安全性を満たすUI設計</p>
                </article>
            </div>
            <div className="skills reveal">
                <div>
                    <p>FIELD</p>
                    <span>
                        UI DESIGN 10年 / WEB DESIGN 8年 / DESIGN SYSTEM 10年 / FRONTEND
                        10年 / ILLUSTRATION 8年
                    </span>
                </div>
                <div>
                    <p>LANGUAGE</p>
                    <span>
                        HTML 10年 / CSS 10年 / JavaScript 10年 / jQuery 8年 / C# 8年 / SQL 5年 / PHP 5年 / JSON 5年 / Less 3年
                        / Sass 3年 / XML 5年 / ASP.NET 10年 / CakePHP 1年
                    </span>
                </div>
                <div>
                    <p>TOOLS</p>
                    <span>
                        Illustrator 10年 / Photoshop 10年 / Figma 3年 / Git 5年 / After Effects 3年 /
                        Canva 3年 / Visual Studio 10年 / WordPress 3年 / SQL Server 5年 / XAMPP 5年 / FFFTP 5年
                    </span>
                </div>
            </div>
        </div>
    </section>

    <section className="works shell" id="works">
        <SectionLabel index="03">Selected Works</SectionLabel>
        <div className="works-heading reveal">
          <h2>Works</h2>
          <p>Web / UI/UX / Frontend / System Design</p>
        </div>
        <div className="works-grid">
            {works.map((work, index) => (

                <article className={`work-card reveal`} key={work.title}>

                    <div className="works-contents">

                        {/* 作成画 */}
                        <div className="work-image">
                            <div className="work-meta">

                                {/* 会社名 */}
                                <p>{work.no} /</p>
                                <p>{work.title}</p >
                                <p>{work.subtitle}</p>
                            </div>
                            <img src={work.image} alt={work.alt} />
                            <span>View Project</span>
                        </div>
                        <div className="work-detail">
                            {/* 会社名 */}
                            <div>老朽化したサイトをモダンに一新し、オリジナルCMS 導入で休眠サイトを脱却</div>
                        </div>
                    </div>
                    {/* <div className="work-meta">
                        
                        <time>{work.meta}</time>
                    </div> */}
                </article>
            ))}
             </div>

      </section>

      <section className="contact" id="contact">
        <div className="shell reveal">
          <SectionLabel index="04">Contact</SectionLabel>
          <p className="contact-kicker">
            PROJECTS / COLLABORATIONS / INQUIRIES
          </p>
          <h2>
            Let’s create something
            <br />
            <em>meaningful.</em>
          </h2>
          <p className="contact-copy">
            Webデザイン、UI/UX設計、フロントエンド実装、
            <br />
            システム設計に関するご相談を承ります。
          </p>
          <a className="contact-link" href="#top">
            Get in touch <span>↗</span>
          </a>
        </div>
      </section>

      <footer>
        <p>© 2026 NAKASHIMA MICHIKO</p>
        <p>DESIGN & DEVELOPMENT</p>
        <a href="#top">BACK TO TOP ↑</a>
      </footer>
    </main>
  )
}
