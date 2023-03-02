import styles from './Ad.module.css'
import { useState } from 'react'

export default function Ad() {

    const [popup, setPopup] = useState(true);

    return(
        <>
            {
                popup ? 
                    <div className={styles.container}>
                        <div className={}>
                            <div></div>
                            <h1>Welcome</h1>
                        </div>
                    </div>
                    : <></>
            }
        </>
    )
}