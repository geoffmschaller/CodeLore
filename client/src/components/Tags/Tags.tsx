import React, { FunctionComponent } from 'react';
import styles from './Tags.module.sass';

const Tags: FunctionComponent = props => {

	const tags = ['npm', 'javascript', 'writeup', 'cmd line', 'project', 'writeup', 'js', 'html', 'css', 'sass', 'react', 'redux', 'react router', 'react redux', 'thunk', 'async', 'await', 'asynchronous']

	return (
		<div className={styles.tags}>
			{
				tags.map((el, index) => {
					return <div className={styles.item}><a href='#'>{el}</a> {index === tags.length - 1 ? '' : <i className="fas fa-circle"/>}</div>
				})
			}
		</div>
	)
}

export default Tags;