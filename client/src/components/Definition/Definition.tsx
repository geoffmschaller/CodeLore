import React, { FunctionComponent } from 'react';
import styles from './Definition.module.sass';

interface Props {
	word: string,
	definition: string
}

const Definition: FunctionComponent<Props> = props => {
	return (
		<div className={styles.definition}>
			<div className={styles.open}>"</div>
			<div className={styles.word}>{props.word}</div>
			<div className={styles.meaning}>{props.definition}</div>
			<div className={styles.close}>"</div>
		</div>
	)
}

export default Definition;