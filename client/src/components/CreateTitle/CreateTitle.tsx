import React, { FunctionComponent } from 'react';
import styles from './CreateTitle.module.sass';

const CreateTitle: FunctionComponent = props => {
	return (
		<div className={styles.title}>
			<input type='text' placeholder='What is the title?'/>
		</div>
	)
}

export default CreateTitle;