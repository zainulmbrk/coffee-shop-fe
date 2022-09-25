import React from 'react'
import Image from 'next/image'
import { Detector } from 'react-detect-offline'
import wifi from '../../../assets/img/no-wifi.png'
import styles from './Check.module.css'
const CheckConnection = props => {
    return (
        <>
            <Detector render={({ online }) => (
                online ? props.children :
                    <div className={styles.noInternet}>
                        <Image alt="noInternet" src={wifi} width={100} height={100} />
                        <h4>No Connection</h4>
                        <p>Please Check Your Connection</p>
                    </div>
            )} />
        </>
    )
}

export default CheckConnection