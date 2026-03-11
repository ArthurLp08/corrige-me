
import styles from './styles.module.css';
import { FaBars } from "react-icons/fa"
import { IoCloseSharp } from "react-icons/io5";
import { useState } from 'react';
import { signOut } from 'next-auth/react';

export default function Header() {

    const [sanfona, setSanfona] = useState(false);

    return (
        <header className={styles.header}>
            <div className={styles.container}>


                <a href='/' className={styles.headerTitle}>Corrige-Me*</a>
                <div className={styles.sanfona}>

                    <button onClick={() => { setSanfona(!sanfona) }} className={styles.sanfonaBotão}>{sanfona ? (
                        <IoCloseSharp size={24} />
                    ) : (

                        <FaBars size={20} />
                    )

                    }</button>

                    {sanfona ? (
                        <div className={styles.sanfonaContainer}>
                        <div className={styles.sanfonaConteudo}>
                            <a href="/">
                                Painel
                            </a>
                            <a href="/corrigir">
                                Escrever
                            </a>
                            <a href="/historico">
                                Minhas Redações
                            </a>
                            <button onClick={() => signOut()}>Sair</button>
                        </div>
                        </div>
                    ) : (
                        <></>
                    )}

                </div>
            </div>
        </header>
    )
}