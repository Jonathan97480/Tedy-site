/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
import { Main } from '@/components'

import { Button, Modal } from '@/components/ux'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import mockup_pc from '../images/cover/MockupPc.jpeg'
import bg_services from '../images/cover/bg_services.jpeg'

import Link from 'next/link'
import { getProjects, Project } from './api/projects'
import { setProject } from '@/redux/slice/projectSlice'


export default function Home() {

    const dispatch = useDispatch()

    const [projects, setProjects] = useState<Project[]>([])
    const projectsRedux = useSelector((state: any) => state.Project.project)

    useEffect(() => { }, [])


    return (
        <Main
            pageTitle={"Page d'accueille"}
            className='home hp-m'
            pageDescription={``}

        >
            <section>
                <div>
                    <small>Tydevelopper</small>
                    <h1>Un site internet à l'image de votre <span>entreprise.</span> </h1>
                    <p>Explorez une approche personnalisée de la création de sites web, façonnée pour mettre en valeur l'authenticité de votre entreprise</p>
                    <Link

                        href='/contact'

                        title='Lien qui redirige vers la page de contact'
                    >
                        contact
                    </Link>
                    <Link href={"#all_project"}>Projets</Link>
                </div>
                <div>
                    <Image src={mockup_pc} alt="mockup pc" width={500} height={500}></Image>
                </div>

            </section>
            <section id='"#all_project"'>
                <h2>Derniers projets</h2>
                <small>Exploration de notre univers</small>
                <div>{/* TODO:Carousel */}</div>
            </section>
            <section>
                <h2>Nos principales services</h2>
                <small>Création de sites internet</small>
                <div>
                    <div>
                        <div>
                            <h3>Site one page</h3>
                            <p>Un site one page est une solution web concise et efficace, condensant toutes les informations essentielles sur une seule page, offrant une expérience fluide et intuitive à l'utilisateur.</p>
                        </div>
                        <div>
                            <h3>Site E-commerce</h3>
                            <p>Un site e-commerce est une plateforme en ligne où vous pouvez acheter une variété de produits et services, similaire à un magasin physique mais accessible via internet.</p>
                        </div>
                        <div>
                            <h3>Site vitrine</h3>
                            <p>Un site vitrine est comme une vitrine de magasin en ligne : ouvert 24h/24, 7j/7, il expose vos produits et services de manière attractive et accessible en tout temps.</p>
                        </div>

                    </div>
                    <div>
                        <Image src={bg_services} alt="services" width={500} height={500}></Image>
                    </div>
                </div>
            </section>
            <section>
                {/* Todo carousel */}
                <div>
                    <div>
                        <h2>Responsive design</h2>
                        <p>Le responsive design est une approche de conception de sites web qui vise à offrir une expérience utilisateur fluide sur tous les appareils, des smartphones, tablettes et ordinateurs.</p>
                    </div>
                    <div>
                        <Image src={bg_services} alt="services" width={500} height={500}></Image>
                    </div>
                </div>
            </section>

            <section>
                <div>

                    <h2>Pourquoi avoir un site internet ? </h2>
                    <small>Un site internet a de nombreuse avantages que les gens ignorent </small>

                    <p> Vous avais une entreprise et pas de site internet ?
                        Vous penser que les réseaux sociaux sont assez pour votre entreprise ? Voici quelque detail afin de comprendre limportance d’un site internet</p>
                    <Link

                        href='/contact'

                        title="Lien qui redirige vers la page de mentions l'egals"
                    >
                        J’ai d’autres question ?
                    </Link>
                </div>
                <div>
                    <span><p>Améliore votre visibilité</p></span>
                    <span><p>Rajoute une touche de crédibilité</p></span>
                    <span><p>Source de rentabilité</p></span>
                    <span><p>Propre à vos gouts</p></span>

                </div>
            </section>

            <section>
                <h2>Prêt à démarrer votre projet ? </h2>
                <p>Contactez-nous et découvrez ce que nous pouvons réaliser ensemble</p>
                <Link

                    href='/contact'

                    title='Lien qui redirige vers la page de contact'
                >
                    contact
                </Link>

            </section>

        </Main>
    )
}