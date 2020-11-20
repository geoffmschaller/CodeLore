import React, { FunctionComponent } from 'react';
import styles from './Author.module.sass';

const Author: FunctionComponent = props => {
	return (
		<div className={styles.authorBar}>
			<div className={styles.author}>
				By: Geoff Schaller
			</div>
			<div className={styles.social}>
				<div className={[styles.item, styles.github].join(' ')}>
					<i className="fab fa-github"/>
				</div>
				<div className={[styles.item, styles.stars].join(' ')}>
					<i className="fal fa-stars"/> 10
				</div>
				<div className={[styles.item, styles.bookmark].join(' ')}>
					<i className="fal fa-bookmark"/> 32
				</div>
				<div className={[styles.item, styles.chat].join(' ')}>
					<i className="fal fa-comments-alt"/> 7
				</div>
				<div className={styles.item}>
					<div className={styles.type}>Tutorial</div>
				</div>
			</div>
			
		</div>
	)
}

export default Author;