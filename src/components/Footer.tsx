import { BsFacebook, BsLinkedin, BsTwitter } from 'react-icons/bs'
import Link from 'next/link'
import { getCookie, hasCookie } from 'cookies-next'
import Rgp from './Rgp'
import { RGPD_COOKIE } from '@/pages/api/projects'
import { useEffect, useState } from 'react'


export default function Footer() {

    const [isRgpd, setIsRgpd] = useState(false);



    useEffect(() => {
        setIsRgpd(hasCookie(RGPD_COOKIE));
    }, []);

    return (
        <>
            <footer className='footer'>

            </footer>
            {
                !isRgpd ? <Rgp /> : null

            }
        </>
    )
}
