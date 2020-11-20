import React, { FunctionComponent } from 'react';
import styles from './Author.module.sass';

import WriteUp from '../../interfaces/WriteUp';
interface Props {
	writeUp: WriteUp
}

const Author: FunctionComponent<Props> = props => {
	return (
		<div className={styles.authorBar}>
			<div className={styles.author}>
				By: {props.writeUp.author}
			</div>
			<div className={styles.social}>
				<div className={[styles.item, styles.github].join(' ')}>
					<i className="fab fa-github"/>
				</div>
				<div className={[styles.item, styles.stars].join(' ')}>
					<i className="fal fa-stars" /> {props.writeUp.stars}
				</div>
				<div className={[styles.item, styles.bookmark].join(' ')}>
					<i className="fal fa-bookmark"/> {props.writeUp.bookmarks}
				</div>
				<div className={[styles.item, styles.chat].join(' ')}>
					<i className="fal fa-comments-alt"/> {props.writeUp.chats}
				</div>
				<div className={styles.item}>
					<div className={styles.type}>Tutorial</div>
				</div>
			</div>
			
		</div>
	)
}

export default Author;