import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
    {
        link: "/docs/",
        title: "ABRT Administration",
        image: "img/admin.svg",
        description: "Report infrastructure administration and Users and Groups management",
    },
    {
        link: "/docs/user-mode/welcome",
        title: "User Guide",
        image: "img/reports.svg",
        description: "Access ABRT Web and Mobile reports and raise support ticket.",
    },
];

function Feature({ image, title, description, link }) {
    const imgUrl = useBaseUrl(image);
    const linkUrl = useBaseUrl(link);

    return ( <
        Link className = { classnames("col") }
        to = { linkUrl } >
        <
        div className = { styles.features } >
        <
        div className = "text--center" >
        <
        img className = { styles.featureImage }
        src = { imgUrl }
        alt = { title }
        /> < /
        div > <
        h3 > { title } < /h3> <
        p > { description } < /p> < /
        div > <
        /Link>
    );
}

function Home() {
    const context = useDocusaurusContext();
    const { siteConfig = {} } = context;
    return ( <
        Layout title = { `${siteConfig.title} - Agilent Documentation` }
        description = "Integrated BIHub platform for ABRT Reports." >
        <
        header className = { classnames("hero hero--primary", styles.heroBanner) } >
        <
        div className = "container" >
        <
        h1 className = "hero__title" > { siteConfig.title } < /h1> <
        p className = "hero__subtitle" > { siteConfig.tagline } < /p> < /
        div > <
        /header> <
        main > {
            features && features.length && ( <
                section className = { classnames(styles.mainContainer) } >
                <
                div className = "container" >
                <
                div className = "row" > {
                    features.map((props, idx) => ( <
                        Feature key = { idx } {...props }
                        />
                    ))
                } <
                /div> < /
                div > <
                /section>
            )
        } <
        /main> < /
        Layout >
    );
}

export default Home;
