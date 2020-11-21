import React, { FunctionComponent } from 'react';
import styles from './NewDefinitionCard.module.sass';

const NewDefinitionCard: FunctionComponent = props => {
	return (
		<div className={styles.newDefinitionCard}>
			<input type="text" />
			<input type="text"/>
		</div>
	)
}

export default NewDefinitionCard;