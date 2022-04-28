import React from "react";
import style from "./Relogio.module.scss"

export default function Relogio() {
    return (
        // Sempre necessario apresentar Tag pai no XML
        // React.Fragment Burla o XML e finge que tem uma tag pai
        // Criado pelo proprio REACT
        // Essa é uma das formas
        <React.Fragment>
            <span className={style.relogioNumero}>0</span>
            <span className={style.relogioNumero}>0</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>0</span>
            <span className={style.relogioNumero}>0</span>
        </React.Fragment>
        // ou usar <></>

    )
}