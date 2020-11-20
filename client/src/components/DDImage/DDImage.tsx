import React, { FunctionComponent } from 'react';
import styles from './DDImage.module.sass';

const DDImage: FunctionComponent = () => {
	return (
		<div className={styles.dDImage}>
			<i className="fas fa-upload" />
			<div className={styles.text}>Drop Main Header Image Here</div>
		</div>
	)
}

export default DDImage;