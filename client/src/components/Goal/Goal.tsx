import React, { FunctionComponent } from 'react';
import styles from './Goal.module.sass';

import WriteUp from '../../interfaces/WriteUp';
interface Props {
	writeUp: WriteUp
}

const Goal: FunctionComponent<Props> = props => {
	return (
		<div className={styles.goal}>
			<span className={styles.bold}>Our Goal:</span> {props.writeUp.goal} 
		</div>
	)
}

export default Goal;