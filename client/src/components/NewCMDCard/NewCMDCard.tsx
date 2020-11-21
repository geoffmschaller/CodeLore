import React, { FunctionComponent } from 'react';
import styles from './NewCMDCard.module.sass';

const NewCMDCard: FunctionComponent = props => {
	return (
		<div className={styles.newCMDCard}>
			<input type="text"/>
		</div>
	)
}

export default NewCMDCard;