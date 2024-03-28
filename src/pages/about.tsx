/* eslint-disable react/no-unescaped-entities */
import { Main } from "@/components";
import Image from "next/image";


export default function About() {

    const schema = {
        '@context': 'https://schema.org',
        '@type': 'About',
        siteUrl: 'https://site.jon-dev.fr',
        name: 'Jon_dev',
        pageUrl: 'https://site.jon-dev.fr/about',
        companyName: 'Jon_dev',
        companySpecialization: 'développement web et mobile pour les petites et moyennes entreprises',
        workMode: 'télétravail',
        regionSupport: 'agréé au chèque numérique de la Région',
        supportPercentage: '80%',
        services: ['création de sites vitrines', 'sites e-commerce', 'applications web sur mesure', 'développement d\'applications mobiles'],
        mission: 'comprendre les besoins de nos clients pour les aider à atteindre leurs objectifs en utilisant les dernières technologies',
        contact: ['jon.dev974@gmail.com', 'https://www.linkedin.com/in/gauvin-jonathan/', 'https://www.facebook.com/jon.dev974/', 'https://www.instagram.com/jon97480/'],


    }
    return (
        <Main
            pageTitle="Page À propos"
            pageDescription="Cette page vous donne un aperçu de qui nous sommes et de ce que nous faisons. Nous aimons partager notre histoire, nos valeurs et nos objectifs avec nos utilisateurs. Vous découvrirez également des informations sur notre équipe, nos réalisations et nos projets futurs. Nous sommes fiers de notre travail et nous espérons que vous apprécierez en apprendre davantage sur nous. N'hésitez pas à nous contacter si vous avez des questions ou des commentaires."
            className="about"
            schema={schema}

        >
            <h1 className="about__title title">À-propos de nous</h1>

        </Main >
    )
}
