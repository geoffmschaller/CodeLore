import React, { FunctionComponent } from 'react';
import CreateInstruction from '../CreateInstruction/CreateInstruction';
import styles from './CreateGoal.module.sass';

const CreateGoal: FunctionComponent = () => {
	return (
		<div className={styles.createGoal}>
			<CreateInstruction title={'5. Add a Write Up Goal'}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, earum vitae dolore saepe nobis quidem repellendus quo, ipsa eum non blanditiis temporibus vel molestias architecto! Ducimus accusamus sit velit voluptates?
			</CreateInstruction>
			<input type='text' placeholder="Add Write Up Goal Here ..."/>
		</div>
	)
}

export default CreateGoal;