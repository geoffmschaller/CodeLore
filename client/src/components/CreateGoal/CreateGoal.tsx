import React, { FunctionComponent } from 'react';
import styles from './CreateGoal.module.sass';

const CreateGoal: FunctionComponent = () => {
	return (
		<div className={styles.createGoal}>
			<input type='text' placeholder="What's the goal?"/>
		</div>
	)
}

export default CreateGoal;