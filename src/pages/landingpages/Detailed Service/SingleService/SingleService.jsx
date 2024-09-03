import React from 'react'
import styles from './SingleService.module.css'

export default function SingleService({ photo, heading, text , pic}) {
  return (
    <div>    
            <div className={styles.single_service} >
                <div className={styles.service_image}>
                    <img src={photo} alt="" />
                </div>
                <div className={styles.service_content}>
                    <div className={styles.service_heading}>
                        {heading}
                    </div>
                    <p className={styles.service_text}>
                        {text}
                    </p>
                    <div className={styles.service_more}>
                        Veiw More
                    </div>
                </div>
            </div>
            {/* <div className={styles.service_arr}>
                <img src={pic} alt="" />
            </div> */}
    </div>
)
}
