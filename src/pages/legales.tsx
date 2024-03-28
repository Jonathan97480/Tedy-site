/* eslint-disable react/no-unescaped-entities */
import { Main } from "@/components";
import Link from "next/link";

export default function Legales() {
    return (
        <Main
            pageTitle="Page Mentions légales"
            pageDescription="Cette page contient les informations légales importantes concernant notre site web. Il comprend des informations sur les propriétaires du site, les conditions d'utilisation, les politiques de confidentialité, les marques déposées et les lois applicables. Veuillez prendre le temps de lire attentivement ces informations avant d'utiliser notre site. Nous nous efforçons de fournir une expérience en ligne transparente et éthique pour nos utilisateurs."
            className="legals"
        >
            <h1>Mention légal</h1>

            <div>
                <h2>Ty developper</h2>
                <Link type="" href={""}>23 rue Thomas Sankara La Possession 97419</Link>
                <p>Siret : 91351316400016</p>
                <p><span>Numéro :</span><Link href={""}>
                    06 92 14 24 32
                </Link></p>
                <p><span>Mail : </span><Link href={""}>tydevelopper@gmail.com</Link></p>
            </div>

            <div>
                <h2>Hébergeur du site :</h2>
                <p>OVH SAS2 rue Kellermann – 59100 Roubaix+33 (0)8 203 203 63http://www.ovh.fr/</p>
            </div>
            <div>
                <h2>Informations légales</h2>
                <p>Le site Tydevelopper et éditée par la société Tydevelopper immatriculé au SIRET 91351316400016, domicilié au 23 rue Thomas Sankara 97419 la Réunion.</p>
            </div>
            <div>
                <h2>Contenues</h2>
                <p>Les informations contenues sur le site sont fournies à titre indicatif et ne sont pas exhaustives. Elles peuvent être modifiées ou mises à jour sans préavis. Tydevelopper ne peut en aucun cas être tenue responsable des dommages directs ou indirects, tels que, notamment, préjudice matériel, perte de données ou de programme, préjudice financier, résultant de l'accès ou de l'utilisation de ce site ou de tous sites qui lui sont liés.</p>
            </div>
            <div>
                <h2>Marques et logos</h2>
                <p>Les marques et logos figurant sur le site sont des marques déposées par les sociétés qui en sont propriétaires. Toute reproduction ou utilisation de ces marques ou logos, sans l'accord préalable et écrit des propriétaires, est strictement interdite</p>
            </div>
            <div>
                <h2>Image externe</h2>
                <p>Certain image proviennent du site <Link href={"https://fr.freepik.com/"}>https://fr.freepik.com/</Link> . Image accueil : DCStudio</p>
            </div>
        </Main >
    )
}
