import React, { FunctionComponent } from 'react';
import styles from './NewImageCard.module.sass';

const NewImageCard: FunctionComponent = props => {
	return (
		<div className={styles.newImageCard}>
			<div className={styles.upload}>
				<i className="fas fa-upload" />
				<div className={styles.text}>Drag & Drop <br/> Component Image Here</div>
			</div>
		</div>
	)
}

export default NewImageCard;