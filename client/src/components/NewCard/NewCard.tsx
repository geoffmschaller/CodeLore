import React, { FunctionComponent } from 'react';
import styles from './NewCard.module.sass';

interface Props {
	remove: any
}

const NewCard: FunctionComponent<Props> = props => {
	return (
		<div className={styles.newCard}>
			<div className={styles.close} onClick={props.remove}>
				<i className="fas fa-times"/>
			</div>
			{props.children}
		</div>
	)
}

export default NewCard;