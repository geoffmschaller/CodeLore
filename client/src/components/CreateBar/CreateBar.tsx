import React, { FunctionComponent } from 'react';
import styles from './CreateBar.module.sass';

const CreateBar: FunctionComponent = props => {
	return (
		<div className={styles.createBar}>
			<div className={styles.item}>
				<i className="fas fa-books"/>
			</div>
			<div className={styles.item}>
				<i className="fas fa-font-case"/>
			</div>
			<div className={styles.item}>
				<i className="fas fa-code"/>
			</div>
			<div className={styles.item}>
				<i className="fas fa-spell-check"/>
			</div>
			<div className={styles.item}>
				<i className="fas fa-image"/>
			</div>
		</div>
	)
}

export default CreateBar;