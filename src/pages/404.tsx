/* eslint-disable react/no-unescaped-entities */
import { Main } from "@/components";
import Image from "next/image";
import Link from "next/link";


export default function page404() {
    return (
        <Main
            pageTitle="404"
            pageDescription="Oh non! Il semble que vous ayez atterri sur une page qui n'existe pas. Ne vous inquiétez pas, cela arrive à tout le monde. Vous pouvez retourner à la page d'accueil en cliquant sur le lien ci-dessous, ou utiliser la barre de navigation pour trouver ce que vous cherchez. Si vous avez besoin d'aide supplémentaire, n'hésitez pas à nous contacter. Nous sommes là pour vous aider!"
            className="page404 "

        >
            <div>404</div>
        </Main>
    )
}
