import React, { FunctionComponent } from 'react';
import styles from './Chapter.module.sass';

interface Props {
	title: string
}

const Chapter: FunctionComponent<Props> = props => {
	return (
		<div className={styles.chapter}>
			<div className={styles.title}>{props.title}</div>
			<div className={styles.border}/>
		</div>
	)
}

export default Chapter;