/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
import { Main } from '@/components'

import { Button, Modal } from '@/components/ux'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import bg_remarque from '../images/cover/remarque.webp'
import bg_services from '../images/cover/services.webp'
import bg_projet from '../images/cover/projet.webp'
import bg_wireframe from '../images/cover/wireframe.webp'
import bg_maquette from '../images/cover/maquette.webp'
import bg_development from '../images/cover/development.webp'
import bg_lancement from '../images/cover/start.webp'
import bg_woman from '../images/cover/woman_projet.webp'
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
            <h1>HOme</h1>

        </Main>
    )
}