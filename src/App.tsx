import { useEffect } from "react"

const works = [
    {
        no: "01",
        caption1: "CORPORATE WEBSITE",
        image1: "./assets/01.png",
        image2: "./assets/01-a.png",
        image3: "./assets/01-b.png",
        image4: "./assets/01-c.png",
        image5: "./assets/01-sitemap.jpg",
        image6: "./assets/logo.png",
        imageCaption1:"Screens",
        imageCaption2:"",
        imageCaption3:"Site Map",
        imageCaption4:"Logo Design",
        illustrationLead:"企業の顔となる、ロゴを",
        illustration1:"Webサイトのリニューアルにあわせて、ロゴを制作。",
        illustration2:"Logo design / 制作ロゴ",
        alt: "株式会社東和美装 コーポレートサイトリニューアルの制作実績",
        employmentStatus: "副業",
        title: "株式会社東和美装",
        done: "コーポレートサイトリニューアル",
        subtitle: "老舗の信頼を、モダンな表現に。\n更新が続くWebサイトへ",
        lead: "創業43年の塗装会社のコーポレートサイトを、公開サイト全13ページを新規で構成・制作。\n構成と各ページの内容を一から考え、先方と確認しながら仕上げました。更新が止まっていたサイトを、問い合わせが届き、自社で更新できるサイトに作り直しました。",
        meta: "2026年01月 ～ 2026年03月",
        teamsize: "1人",
        scale: "公開サイト全13ページ+CMS管理画面3ページ(元のサイトは約8ページ)",
        incharge: "全工程単独担当(ワンストップ)", design: "Figma / Illustrator / Photoshop / After Effects",
        implementation: "HTML / CSS / JavaScript / jQuery / PHP",
        environment: "Visual Studio / XAMPP",
        casesub1: "「止まっていたサイトを、再び動かす。」",
        caseStudyTitle1:"課題",
        caseStudyTitle2:"設計",
        caseStudyTitle3:"成果",
        caseStudyTitle4:"",
        case1: "長く更新されず、デザインも時代に合わなくなっていたため、企業の技術力や施工実績が見る人に伝わらない状態でした。問い合わせフォームも十分に機能せず、サイトが本来の役割を果たせていませんでした。",
        casesub2: "「見た目と、運用のしやすさを両立。」",
        case2a: "・会社の強み、事業内容、大規模修繕の流れ、施工実績を、見る人が順に理解できるページ構成に整理",
        case2b: "・問い合わせフォームを再構築し、ヘッダーからいつでも問い合わせに進める導線に",
        case2c: "・施工実績と採用情報を、担当者が自社で追加・更新できる管理画面(CMS)を自作",
        casesub3: "「更新し続けられるWebサイトに。」",
        case3: "閲覧数が増加したと伺っています。施工実績と採用情報を、自社で更新できる運用を整えました。",

    },
    {   no: "02",
        caption1: "BRAND WEBSITE",
        image1: "./assets/02.png",
        image2: "./assets/02-a.png",
        image3: "./assets/02-b.png",
        image4: "./assets/02-c.png",
        image5: "./assets/02-sitemap.jpg",
        image6: "",
        imageCaption1:"Screens",
        imageCaption2:"",
        imageCaption3:"Site Map",
        imageCaption4:"",
        illustrationLead:"",
        illustration1:"",
        illustration2:"",
        alt: "株式会社東和美装 コーポレートサイトリニューアルの制作実績",
        employmentStatus: "副業",
        title: "forte",
        done: "花屋のブランドサイト制作",
        subtitle: "SNS発信を、写真集のように。\n作品の世界観が伝わる、ブランドの場所へ。",
        lead: "SNSでの発信が中心だった花屋のブランドサイトを、企画からデザイン、コーディングまで一人で制作。作品を写真集のように見せるギャラリーと、詳細な依頼にも応える問い合わせフォームを新たに設けました。公開から約1年後には、ギャラリーを2ページ追加する依頼をいただきました。",
        meta: "2023年9月〜2023年11月",
        teamsize: "1人",
        scale: "全13ページ(公開から約1年後に、ギャラリー2ページを追加)",
        incharge: "全工程単独担当(企画・デザイン・コーディング)", 
        design: "Figma / Illustrator / Photoshop / After Effects",
        implementation: "HTML / CSS / JavaScript / jQuery / PHP",
        environment: "Visual Studio / XAMPP",
        caseStudyTitle1:"課題",
        caseStudyTitle2:"設計",
        caseStudyTitle3:"成果",
        caseStudyTitle4:"",
        casesub1: "「SNSの外にも、作品を見せる場所を。」",
        case1: "作品の発信がSNSのみで、作品の世界観を伝えられる場所がありませんでした。写真の魅力を損なわず、詳細な依頼にも対応できる窓口が必要でした。",
        casesub2: "「作品を、写真集のように魅せる。」",
        case2a: "・作品を主役に見せるため、ポートレート写真集のようなギャラリーUIを採用",
        case2b: "・ギャラリーを、テーマ別(fusion、colorなど)の6ページに分け、見たい雰囲気から作品を探せる構成に",
        case2c: "・右から開くメニューに、全ページを一覧にし、どのページからでも迷わず移動できる導線に",
        case2d: "・詳細な依頼にも対応できる問い合わせフォームを新設",
        casesub3: "「SNSから、サイトへ。」",
        case3: "SNSで作品を見ていた人たちがサイトを訪れ、評判をいただきました。公開から約1年後には、ギャラリーを2ページ追加する依頼をいただきました。",
    },
    {   
        no: "03",
        caption1: "BRAND PARTNERSHIP",
        image1: "./assets/03.png",
        image2: "",
        image3: "./assets/03-tag1.jpg",
        image4: "./assets/03-tag2.jpg",
        image5: "./assets/03-visual.png",
        image6: "",
        imageCaption1:"Screens",
        imageCaption2:"Tag Design",
        imageCaption3:"Visual",
        imageCaption4:"",
        illustrationLead:"",
        illustration1:"",
        illustration2:"",
        alt: "株式会社東和美装 コーポレートサイトリニューアルの制作実績",
        employmentStatus: "副業",
        title: "Y.A. Acc",
        done: "同じブランドと、10年。",
        subtitle: "展示会のフライヤーから、サイト、タグ、ビジュアルまで。",
        lead: "手仕事のアクセサリーブランドY.AAccの制作を、2016年から継続して担当。展示会のフライヤー、公式サイト、洋服のタグ、写真イラストまで、ブランドの世界観を、紙と画面とモノのタグで形にしてきました。",
        meta: "(継続期間)2016年〜(10年)",
        teamsize: "すべて1人",
        scale: "全13ページ(公開から約1年後に、ギャラリー2ページを追加)",
        incharge: "フライヤー・タグ・ビジュアルのデザイン/公式サイトの企画・デザイン・マークアップ", 
        design: "Figma / Illustrator / Photoshop / After Effects",
        implementation: "HTML / CSS / JavaScript / jQuery / PHP",
        environment: "Visual Studio / XAMPP",
        caseStudyTitle1:" ",
        caseStudyTitle2:" ",
        caseStudyTitle3:" ",
        caseStudyTitle4:" ",
        casesub1: "「Web|SNSの先に、ブランドの物語を。(2021)",
        case1: "SNSでの発信が中心だったブランドの公式サイトを、企画からデザイン、マークアップまで一人で制作。オンラインストア、Instagram、Facebook、ブログ、お問い合わせへの入口を1ページに集め、ブランドの思想と作り手のストーリーを届けるサイトにしました。",
        casesub2: "「モノ|手仕事を、2つのタグで。(2024・2025)",
        case2a: "洋服のタグ「hand work」(2024)\n手のイラストの中に、手書きの「Made by US」を重ね、下に「hand work」とロゴを配置。手仕事で作られたブランドであることを、線画と手書き文字で伝えました。",
        case2b: "刺繍のブランドタグ(2025)",
        case2c: "・課題:言葉やイメージとしてしか存在しなかったブランドの概念を、一貫した世界観を持つシンボルとして定義すること",
        case2d: "・設計:言葉のニュアンスを紐解き、オリジナルのシンボルロゴを構築。糸の質感や表現の制約がある「刺繍」ならではの美しさが活きるよう、線の太さや配置をミリ単位で最適化",
        case2e: "・成果:実際の製品タグとして使用され、ブランドに立体的な存在感と高級感を加えました",
        casesub3: "ビジュアル|世界観を、紙と画像で。(2016〜2024)",
        case3: "・展示受注会フライヤー(2016)\n　作品を身につけたモデルの写真を大きく見せ、ロゴと開催情報を左下にまとめたレイアウト。\n・展示会フライヤー(2017・名古屋/東京)\n　手書き風のタイトルと縦組みの会場・日程を、3枚の写真と重ね、紙の質感の背景で柔らかい世界観に。\n・アクセサリーのコラージュ(2024年10月)\n　書籍の世界観から着想を得たアクセサリーを、撮影写真と図面・パターンなどのテクスチャを重ねたコラージュで視覚化。(撮影:友人)\n・写真イラスト・加工(2024)\n　モノクロの写真の一部に色を残し、手描き風の図形や文字を重ねたビジュアル。(担当:写真イラスト・加工・モデル)",
        case4sub: "これまでのこと",
        case4: "・同じブランドから、2016年から現在まで、継続してご依頼をいただいています\n・刺繍のブランドタグは、実際の製品に使用されています\n・現在、公式サイトのリニューアル(全10ページほど)のご要望をいただいています",
    
    },
    {
        no: "04",
        caption1: "BRAND PARTNERSHIP",
        image1: "./assets/04.png",
        image2: "./assets/04-a.png",
        image3: "./assets/04-b.png",
        image4: "./assets/04-c.png",
        image5: "",
        image6: "",
        imageCaption1:"Screens",
        imageCaption2:"",
        imageCaption3:"",
        imageCaption4:"",
        illustrationLead:"",
        illustration1:"",
        illustration2:"",
        alt: "",
        employmentStatus: "副業",
        title: "日東工業株式会社",
        done: "同じブランドと、10年。",
        subtitle: "工場稼働監視システム",
        lead: "手仕事のアクセサリーブランドY.AAccの制作を、2016年から継続して担当。展示会のフライヤー、公式サイト、洋服のタグ、写真イラストまで、ブランドの世界観を、紙と画面とモノのタグで形にしてきました。",
        meta: "2016年04月 ～ 2020年09月",
        teamsize: "50人",
        scale: "全13ページ(公開から約1年後に、ギャラリー2ページを追加)",
        incharge: "フライヤー・タグ・ビジュアルのデザイン/公式サイトの企画・デザイン・マークアップ", 
        design: "Figma / Illustrator / Photoshop / After Effects",
        implementation: "HTML / CSS / JavaScript / jQuery / PHP",
        environment: "Visual Studio / XAMPP",
        caseStudyTitle1:"課題",
        caseStudyTitle2:"設計",
        caseStudyTitle3:"成果",
        caseStudyTitle4:"",
        casesub1: "「Web|SNSの先に、ブランドの物語を。(2021)",
        case1: "SNSでの発信が中心だったブランドの公式サイトを、企画からデザイン、マークアップまで一人で制作。オンラインストア、Instagram、Facebook、ブログ、お問い合わせへの入口を1ページに集め、ブランドの思想と作り手のストーリーを届けるサイトにしました。",
        casesub2: "「モノ|手仕事を、2つのタグで。(2024・2025)",
        case2a: "",
        case2b: "刺繍のブランドタグ(2025)",
        case2c: "・課題:言葉やイメージとしてしか存在しなかったブランドの概念を、一貫した世界観を持つシンボルとして定義すること",
        case2d: "",
        case2e: "・成果:実際の製品タグとして使用され、ブランドに立体的な存在感と高級感を加えました",
        casesub3: "",
        case4sub: "",
        case4: "",
    
    },
    {
        no: "05",
        caption1: "BRAND PARTNERSHIP",
        image1: "./assets/05.png",
        image2: "",
        image3: "./assets/05-b.png",
        image4: "",
        image5: "",
        image6: "",
        imageCaption1:"Screens",
        imageCaption2:"",
        imageCaption3:"",
        imageCaption4:"",
        illustrationLead:"",
        illustration1:"",
        illustration2:"",
        alt: "",
        employmentStatus: "副業",
        title: "トヨタテクニカルディベロップメント",
        done: "同じブランドと、10年。",
        subtitle: "AI 解析サービス",
        lead: "",
        meta: "2025年11月 ～ 2026年1月",
        teamsize: "30人",
        scale: "全13ページ(公開から約1年後に、ギャラリー2ページを追加)",
        incharge: "", 
        design: "Figma / Illustrator / Photoshop / After Effects",
        implementation: "HTML / CSS / JavaScript / jQuery / PHP",
        environment: "Visual Studio / XAMPP",
        caseStudyTitle1:"課題",
        caseStudyTitle2:"設計",
        caseStudyTitle3:"成果",
        caseStudyTitle4:"",
        casesub1: "",
        case1: "",
        casesub2: "",
        case2a: "",
        case2b: "",
        case2c: "",
        case2d: "",
        case2e: "",
        casesub3: "",
        case4sub: "",
        case4: "",
    },    
    {
        no: "06",
        caption1: "BRAND PARTNERSHIP",
        image1: "./assets/06.png",
        image2: "",
        image3: "./assets/06-b.png",
        image4: "",
        image5: "./assets/06-c.jpg",
        image6: "",
        imageCaption1:"Screens",
        imageCaption2:"",
        imageCaption3:"",
        imageCaption4:"",
        illustrationLead:"",
        illustration1:"",
        illustration2:"",
        alt: "",
        employmentStatus: "副業",
        title: "三菱重工業株式会社",
        done: "",
        subtitle: "監視Web システム",
        lead: "",
        meta: "2024年5月 ～ 2024年7月",
        teamsize: "30人",
        scale: "全13ページ(公開から約1年後に、ギャラリー2ページを追加)",
        incharge: "", 
        design: "Figma / Illustrator / Photoshop / After Effects",
        implementation: "HTML / CSS / JavaScript / jQuery / PHP",
        environment: "Visual Studio / XAMPP",
        caseStudyTitle1:"課題",
        caseStudyTitle2:"設計",
        caseStudyTitle3:"成果",
        caseStudyTitle4:"",
        casesub1: "",
        case1: "",
        casesub2: "",
        case2a: "",
        case2b: "",
        case2c: "",
        case2d: "",
        case2e: "",
        casesub3: "",
        case4sub: "",
        case4: "",
    },
       
    {
        no: "07",
        caption1: "BRAND PARTNERSHIP",
        image1: "./assets/07.png",
        image2: "",
        image3: "./assets/07-b.png",
        image4: "",
        image5: "./assets/07-c.png",
        image6: "",
        imageCaption1:"Screens",
        imageCaption2:"",
        imageCaption3:"",
        imageCaption4:"",
        illustrationLead:"",
        illustration1:"",
        illustration2:"",
        alt: "",
        employmentStatus: "副業",
        title: "東海ソフト株式会社",
        done: "",
        subtitle: "監視Web システム",
        lead: "",
        meta: "2016年12月 ～ 2020年6月",
        teamsize: "30人",
        scale: "全13ページ(公開から約1年後に、ギャラリー2ページを追加)",
        incharge: "", 
        design: "Figma / Illustrator / Photoshop / After Effects",
        implementation: "HTML / CSS / JavaScript / jQuery / PHP",
        environment: "Visual Studio / XAMPP",
        caseStudyTitle1:"課題",
        caseStudyTitle2:"設計",
        caseStudyTitle3:"成果",
        caseStudyTitle4:"",
        casesub1: "",
        case1: "",
        casesub2: "",
        case2a: "",
        case2b: "",
        case2c: "",
        case2d: "",
        case2e: "",
        casesub3: "",
        case4sub: "",
        case4: "",
    },
    {
        no: "08",
        caption1: "BRAND PARTNERSHIP",
        image1: "./assets/08.png",
        image2: "",
        image3: "./assets/08-b.png",
        image4: "",
        image5: "",
        image6: "",
        imageCaption1:"Screens",
        imageCaption2:"",
        imageCaption3:"",
        imageCaption4:"",
        illustrationLead:"",
        illustration1:"",
        illustration2:"",
        alt: "",
        employmentStatus: "副業",
        title: "株式会社産機",
        done: "",
        subtitle: "監視Web システム",
        lead: "",
        meta: "2024年3月 ～ 2024年5月",
        teamsize: "10人",
        scale: "全13ページ(公開から約1年後に、ギャラリー2ページを追加)",
        incharge: "", 
        design: "Figma / Illustrator / Photoshop / After Effects",
        implementation: "HTML / CSS / JavaScript / jQuery / PHP",
        environment: "Visual Studio / XAMPP",
        caseStudyTitle1:"課題",
        caseStudyTitle2:"設計",
        caseStudyTitle3:"成果",
        caseStudyTitle4:"",
        casesub1: "",
        case1: "",
        casesub2: "",
        case2a: "",
        case2b: "",
        case2c: "",
        case2d: "",
        case2e: "",
        casesub3: "",
        case4sub: "",
        case4: "",
    },    
    {
        no: "09",
        caption1: "BRAND PARTNERSHIP",
        image1: "./assets/09.png",
        image2: "./assets/09-a.png",
        image3: "./assets/09-b.png",
        image4: "",
        image5: "./assets/09-c.png",
        image6: "",
        imageCaption1:"Screens",
        imageCaption2:"",
        imageCaption3:"",
        imageCaption4:"",
        illustrationLead:"",
        illustration1:"",
        illustration2:"",
        alt: "",
        employmentStatus: "副業",
        title: "株式会社 トヨックス",
        done: "",
        subtitle: "監視Web システム",
        lead: "",
        meta: "2025年11月 ～ 2026年3月",
        teamsize: "10人",
        scale: "全13ページ(公開から約1年後に、ギャラリー2ページを追加)",
        incharge: "", 
        design: "Figma / Illustrator / Photoshop / After Effects",
        implementation: "HTML / CSS / JavaScript / jQuery / PHP",
        environment: "Visual Studio / XAMPP",
        caseStudyTitle1:"課題",
        caseStudyTitle2:"設計",
        caseStudyTitle3:"成果",
        caseStudyTitle4:"",
        casesub1: "",
        case1: "",
        casesub2: "",
        case2a: "",
        case2b: "",
        case2c: "",
        case2d: "",
        case2e: "",
        casesub3: "",
        case4sub: "",
        case4: "",
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
                MN<span></span>
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
                  <img src="./assets/me2.jpg" alt="中島充子 プロフィール" />
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

                        {/*---- 作成画 -----*/}
                        <div className="work-image-area">
                            <div className="work-meta">

                                {/* No */}
                                <p>Work{work.no}</p>
                                <p> / &ensp;{work.caption1}</p>
                            </div>

                            {/* メイン画面 */}
                            <div className="caption2">{work.imageCaption1}</div>
                            {work.image1 !== "" && (
                                <div className="work-image">
                                    <img src={work.image1} alt={work.alt} />
                                    {/* <span>View Project</span> */}
                                </div>
                            )}
                            
                            {/* スマホ画面 */}
                            {work.image2 !== "" && (
                                <div className="work-image target">
                                    <img src={work.image2} alt={work.alt} />
                                </div>
                            )}
                            
                            {/* サブ画面 */}
                            <div className="caption2">{work.ima}</div>
                            {work.image3 !== "" && (
                                <div className="work-flex-image">                                
                                    <div className="work-image">
                                        <img src={work.image3} alt={work.alt} />
                                    </div>
                                    <div className="work-image">                              
                                        <img src={work.image4} alt={work.alt} />
                                    </div>
                                </div>
                            )}

                            {/* 資料 */}
                            <div className="caption2">{work.imageCaption3}</div>
                            {work.image5 !== "" && (
                                <div className="work-image">
                                    <img src={work.image5} alt={work.alt} />
                                </div>
                            )}
                            
                            {/* ロゴ・イラスト */}
                            {work.caption3 !== "" && (
                                <div className="caption2">{work.imageCaption4}</div>
                            )}
                            {work.image6 !== "" && (
                            <div className="work-illustration">
                                <img src={work.image6} alt={work.alt} />
                                <div className="work-illustration-text">
                                    <div className="illustration-title">BRAND IDENTITY</div>
                                    <div className="illustration-lead">{work.illustrationLead}</div>
                                    <div className="illustration-1">{work.illustration1}</div>
                                    <div className="illustration-2">{work.illustration2}</div>
                                </div>
                            </div>
                            )}
                        </div>

                        <div className="work-detail">
                            {/* 会社名 */}
                            <div className="work-title">{work.title}</div >
                            <div className="work-done">{work.done}</div>
                            {/* サブタイトル */}
                            <div className="work-sub-title whitespace-pre-line">{work.subtitle}</div>
                            {/* リード文 */}
                            <div className="work-lead whitespace-pre-line">{work.lead}</div>

                            {/* 制作情報 */}
                            <div className="work-deatil-contents">
                                <div className="deatil-card">
                                    <div className="deatil-title">制作期間</div>
                                    <div>{work.meta}</div>
                                </div>
                                <div className="deatil-card">
                                    <div className="deatil-title">制作人数</div>
                                    <div>{work.teamsize}</div>
                                </div>
                                <div className="deatil-card">
                                    <div className="deatil-title">規模</div>
                                    <div>{work.scale}</div>
                                </div>
                                <div className="deatil-card">
                                    <div className="deatil-title">担当範囲</div>
                                    <div>{work.incharge}</div>
                                </div>
                                <div className="deatil-card">
                                    <div className="deatil-title">言語・ツール</div>
                                    <div>
                                        <div className="tool-card">
                                            <div>デザイン:</div>
                                            <div>{work.design}</div>
                                        </div>
                                        <div className="tool-card">
                                            <div>実装:</div>
                                            <div>{work.implementation}</div>
                                        </div>
                                        <div className="tool-card">
                                            <div>環境:</div>
                                            <div>{work.environment}</div>
                                         </div>
                                    </div>
                                </div>

                                {/* case1 */}
                                <div className="case-study">
                                    <div style={{ display: 'flex' }}>
                                        <div className="case-study-no">01</div>
                                        <div className="case-study-title">{work.caseStudyTitle1}</div>
                                    </div>
                                    <div className="case-study-lead">{work.casesub1}</div>
                                    <div className="case-study-text whitespace-pre-line">{work.case1}</div>
                                </div>

                                {/* case2 */}
                                <div className="case-study">
                                    <div style={{ display: 'flex' }}>
                                        <div className="case-study-no">02</div>
                                        <div className="case-study-title">{work.caseStudyTitle2}</div>
                                    </div>
                                    <div className="case-study-lead">{work.casesub2}</div>
                                    <div className="case-study-text whitespace-pre-line">{work.case2a}</div>
                                    <div className="case-study-text whitespace-pre-line">{work.case2b}</div>
                                    <div className="case-study-text whitespace-pre-line">{work.case2c}</div>
                                    <div className="case-study-text whitespace-pre-line">{work.case2d}</div>
                                    <div className="case-study-text whitespace-pre-line">{work.case2e}</div>
                                </div>
                                {/* case3 */}
                                <div className="case-study">
                                    <div style={{ display: 'flex' }}>
                                        <div className="case-study-no">03</div>
                                        <div className="case-study-title">{work.caseStudyTitle3}</div>
                                    </div>
                                    <div className="case-study-lead">{work.casesub3}</div>
                                    <div className="case-study-text whitespace-pre-line">{work.case3}</div>
                                </div>
                                {/* case4 */}

                                {work.caseStudyTitle4 !== "" && (
                                    <div className="case-study">
                                        <div style={{ display: 'flex' }}>
                                            <div className="case-study-no">04</div>
                                            <div className="case-study-title">{work.caseTitle4}</div>
                                        </div>
                                        <div className="case-study-lead">{work.case4sub}</div>
                                        <div className="case-study-text whitespace-pre-line">{work.case4}</div>
                                    </div>
                                )}

                            </div>
                        </div>
                    </div>
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
