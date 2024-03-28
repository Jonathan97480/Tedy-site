/* eslint-disable react/no-unescaped-entities */
import { Main } from "@/components";
import { Button } from "@/components/ux";
import Image from "next/image";
import Link from "next/link";
import bg_404 from '../images/cover/404.jpeg'


export default function page404() {
    return (
        <Main
            pageTitle="404"
            pageDescription="Oh non! Il semble que vous ayez atterri sur une page qui n'existe pas. Ne vous inquiétez pas, cela arrive à tout le monde. Vous pouvez retourner à la page d'accueil en cliquant sur le lien ci-dessous, ou utiliser la barre de navigation pour trouver ce que vous cherchez. Si vous avez besoin d'aide supplémentaire, n'hésitez pas à nous contacter. Nous sommes là pour vous aider!"
            className="page404 "

        >
            <section>
                <div>
                    <Image src={bg_404} alt="404" width={500} height={500}></Image>
                </div>
                <div>
                    <h1>OOPS</h1>
                    <h1>Désolé mais la page que vous rechercher n’existe pas ou n’existe plus</h1>
                    <div>
                        <Link

                            href='/'

                            title='Lien qui redirige vers la page Home'
                        >
                            contact
                        </Link>
                        <Link

                            href='/contact'

                            title='Lien qui redirige vers la page de contact'
                        >
                            contact
                        </Link>

                    </div>
                </div>
            </section>
        </Main>
    )
}
