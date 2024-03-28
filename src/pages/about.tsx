/* eslint-disable react/no-unescaped-entities */
import { Main } from "@/components";
import { Button } from "@/components/ux";
import Image from "next/image";


export default function About() {


    return (
        <Main
            pageTitle="Page À propos"
            pageDescription="Cette page vous donne un aperçu de qui nous sommes et de ce que nous faisons. Nous aimons partager notre histoire, nos valeurs et nos objectifs avec nos utilisateurs. Vous découvrirez également des informations sur notre équipe, nos réalisations et nos projets futurs. Nous sommes fiers de notre travail et nous espérons que vous apprécierez en apprendre davantage sur nous. N'hésitez pas à nous contacter si vous avez des questions ou des commentaires."
            className="about"


        >
            <h1 className="about__title title">A propos</h1>
            <p>Tydevelopper, une auto-entreprise à la Réunion, excelle dans la conception sur mesure de sites internet dédiés aux entreprises réunionnaises et au-delà. Nos solutions personnalisées s'adaptent aux besoins spécifiques de chaque client, garantissant une présence en ligne efficace et pertinente.</p>
            <h2>Des aides à votre dispositions !</h2>
            <p>Nous sommes également agréés pour les chèques numériques de la région Réunion , permettant de rembourser jusqu'à 80% du coût du projet après investissement du client.</p>
            <div>
                <link rel="stylesheet" href="" title="FaceBook" />
                <link rel="stylesheet" href="" title="Instagram" />
                <Button text={"Contactez"} onClick={function (): void {
                    throw new Error("Function not implemented.");
                }}></Button>

            </div>
        </Main >
    )
}
