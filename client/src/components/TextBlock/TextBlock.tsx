import React, {FunctionComponent} from 'react';
import styles from './TextBlock.module.sass';

interface Props {
	text: string,
	highlight: Array<string>
}

const TextBlock: FunctionComponent<Props> = props => {

	const values: Array<string> = props.text.split(' ');

	return (
		<div className={styles.textBlock}>
			{
				values.map((el, index) => {
					return props.highlight.includes(el)
						? <span key={index} className={styles.bold}>{el} </span>
						: <span key={index}>{el} </span>
				})
			}
		</div>
	)
}

export default TextBlock; 