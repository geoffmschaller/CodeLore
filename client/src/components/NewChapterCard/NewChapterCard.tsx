import React, { FunctionComponent } from 'react';
import styles from './NewChapterCard.module.sass';

const NewChapterCard: FunctionComponent = props => {
	return (
		<div className={styles.newChapterCard}>
			<input type="text" placeholder={"Add Chapter Title Here ..."}/>
		</div>
	)
}

export default NewChapterCard;