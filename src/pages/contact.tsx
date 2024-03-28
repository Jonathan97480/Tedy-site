/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */
import { Main } from "@/components";
import React, { useState } from "react";
import { BsFacebook, BsLinkedin, BsTwitter } from 'react-icons/bs';
import Image from "next/image";
import { BiLoader } from 'react-icons/bi';
import { event } from "nextjs-google-analytics";
import { saveFormContactSend } from "./api/projects";

interface SubmitAction {
    submit: boolean,
    submitMessage: string,
    success: boolean,
    successMessage: string,
    error: boolean,
    errorMessage: string
}

export default function Contact() {

    const [submitAction, setSubmitAction] = useState<SubmitAction>({
        submit: false,
        submitMessage: "Envoi en cours...",
        success: false,
        successMessage: "L'envoi du formulaire est confirmer notre équipe prendra contact avec vous dans les 48 heures",
        error: false,
        errorMessage: "L'envoi du formulaire à échoué veuillez réessayé plus tard ou contactez-nous par téléphone"

    })
    const submitForm = (_event: any) => {
        _event.preventDefault();

        setSubmitAction({ ...submitAction, submit: true })

        const form: HTMLFormElement = document.getElementById("my-form") as HTMLFormElement;
        const data = new FormData(_event.target);


        const newData = new FormData();
        newData.append("email", data.get("email") as string);
        newData.append("message", data.get("name") as string + " <br>" + data.get("message") as string);

        fetch(_event.target.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                setSubmitAction({ ...submitAction, submit: false, success: true })
                event("submit_form", {
                    category: "Contact",
                    label: `message envoyer avec succès par ${data.get("name") as string} `,
                });

                saveFormContactSend({
                    data: {
                        email: data.get("email") as string,
                        name: data.get("name") as string,
                        message: data.get("message") as string
                    }

                })

                form.reset()
            } else {
                response.json().then(data => {
                    setSubmitAction({ ...submitAction, submit: false, error: true })
                    event("submit_form", {
                        category: "Contact",
                        label: `message envoi erreur par ${data.get("name") as string} `,
                    });
                })
            }
        }).catch(error => {
            setSubmitAction({ ...submitAction, submit: false, error: true })
            event("submit_form", {
                category: "Contact",
                label: `message envoi erreur par ${data.get("name") as string} `,
            });
        });
    }



    return (
        <Main
            pageTitle="Page de contact"
            pageDescription={`Besoin de nous contacter? Vous pouvez nous trouver sous les noms d'utilisateur "jon dev", "jon-dev", ou "jon.dev".N'hésitez pas à nous envoyer un message si vous avez des questions ou des commentaires. Nous sommes là pour vous aider!`}
            className="contact"
        >
            <h1>Contact</h1>
        </Main >
    )
}
