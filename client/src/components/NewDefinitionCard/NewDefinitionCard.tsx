import React, { FunctionComponent } from 'react';
import styles from './NewDefinitionCard.module.sass';

const NewDefinitionCard: FunctionComponent = props => {
	return (
		<div className={styles.newDefinitionCard}>
			<input className={styles.word} type="text" placeholder={'Add Word Here ...'}/>
			<input className={styles.meaning} type="text" placeholder={'Add Definition Here ...'}/>
		</div>
	)
}

export default NewDefinitionCard;