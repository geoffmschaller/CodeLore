import React, { FunctionComponent } from 'react';
import styles from './Tags.module.sass';

import WriteUp from '../../interfaces/WriteUp';
interface Props {
	writeUp: WriteUp
}

const Tags: FunctionComponent<Props> = props => {
	return (
		<div className={styles.tags}>
			{
				props.writeUp.tags.map((el, index) => {
					return <div
						className={styles.item}
						key={index}
					>
						<a href='#'>{el}</a> {index === props.writeUp.tags.length - 1 ? '' : <i className="fas fa-circle" />}
					</div>
				})
			}
		</div>
	)
}

export default Tags;