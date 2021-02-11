import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [{
        link: "/docs/doc1",
        title: "ABRT Administration",
        image: "img/logo.svg",
        description: "Guide with pre-requisites, installation, and configuration steps for all the BI Hub components - BI Hub Server, Web, and Agents",
    },
    {
        link: "/docs/admin-guide/getting-started/welcome",
        title: "Reports",
        image: "img/logo.svg",
        description: "Guide with administration tasks like configuring agents, authentication, adding users and reports, and on-going maintenance",
    },
    {
        link: "/docs/user-guide/onboard-info",
        title: "Segments",
        image: "img/logo.svg",
        description: "User Guide on how to configure every section in the BI Hub application such as the Dashboard, Reports, Hub folders, and BI Platform.",
    },
];

function Feature({ image, title, description, link }) {
    const imgUrl = useBaseUrl(image);
    const linkUrl = useBaseUrl(link);

    return (
      <Link className={classnames("col col--4")} to={linkUrl}>
        <div className={styles.features}>
          <div className="text--center">
            <img className={styles.featureImage} src={imgUrl} alt={title} />
          </div>
          <h3> {title} </h3> <p> {description} </p>
        </div>
      </Link>
    );
}

function Home() {
    const context = useDocusaurusContext();
    const { siteConfig = {} } = context;
    return (
      <Layout
        title={`${siteConfig.title} - BI Hub Documentation`}
        description="Your BI Search Engine."
      >
        <header className={classnames("hero hero--primary", styles.heroBanner)}>
          <div className="container">
            <h1 className="hero__title"> {siteConfig.title} </h1>
            <p className="hero__subtitle"> {siteConfig.tagline} </p>
          </div>
        </header>
        <main>
          
          {features && features.length && (
            <section className={classnames(styles.mainContainer)}>
              <div className="container">
                <div className="row">
                  {
                    features.map((props, idx) => (
                      <Feature key={idx}{...props}/>
                    )
                    )
                  }                  
                </div>
              </div>
            </section>
          )}
        </main>
      </Layout>
    );
}

export default Home;