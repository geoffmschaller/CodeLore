import React, { FunctionComponent } from 'react';
import styles from './Goal.module.sass';

const Goal: FunctionComponent = props => {
	return (
		<div className={styles.goal}>
			<span className={styles.bold}>Our Goal:</span> Learn how npm works and create a new project using it. 
		</div>
	)
}

export default Goal;