import React, { FunctionComponent } from 'react';
import styles from './CodeLine.module.sass';

interface Props {
	code: string
}

const CodeLine: FunctionComponent<Props> = props => {

	let val: Array<string> = props.code.split(' ');

	return (
		<div className={styles.codeLine}>
			{'~'} <span className={styles.bold}> {val[0]}</span> {val.slice(1, props.code.length).join(' ')}
		</div>
	)
}

export default CodeLine;