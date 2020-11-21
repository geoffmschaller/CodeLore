import React, { FunctionComponent } from 'react';
import styles from './NewTextBlockCard.module.sass';

const NewTextBlockCard: FunctionComponent = props => {
	return (
		<div className={styles.newTextBlockCard}>
			<textarea />
		</div>
	)
}

export default NewTextBlockCard;