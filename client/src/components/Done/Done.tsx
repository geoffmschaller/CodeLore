import React, { FunctionComponent } from 'react';
import styles from './Done.module.sass';

const Done: FunctionComponent = () => {
	return (
		<div className={styles.done}>
			<i className="fal fa-check-square"></i>
			<div className={styles.text}>Complete!</div>
		</div>
	)
}

export default Done;