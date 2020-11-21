import React, { FunctionComponent } from 'react';
import styles from './NewCMDCard.module.sass';

const NewCMDCard: FunctionComponent = props => {
	return (
		<div className={styles.newCMDCard}>
			<input type="text" placeholder={'Add Code Line Here ...'}/>
		</div>
	)
}

export default NewCMDCard;