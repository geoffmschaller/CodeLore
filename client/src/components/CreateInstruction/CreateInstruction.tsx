import React, { FunctionComponent } from 'react';
import styles from './CreateInstruction.module.sass';

interface Props {
	title: string
}

const CreateInstruction: FunctionComponent<Props> = props => {
	return (
		<div className={styles.createInstruction}>
			<div className={styles.title}>{props.title}</div>
			<div className={styles.description}>{props.children}</div>
		</div>
	)
}

export default CreateInstruction;