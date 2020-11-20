import React, { FunctionComponent } from 'react';
import Author from '../Author/Author';
import Goal from '../Goal/Goal';
import Tags from '../Tags/Tags';
import styles from './Header.module.sass';

const Header: FunctionComponent = props => {
	return (
		<div className={styles.header}>
			<div className={styles.title}>What the Heck is NPM, and How Do I Use It?</div>
			<Author />
			<Tags/>
			<img src="https://zdnet2.cbsistatic.com/hub/i/2019/10/15/54d57679-a8a4-483a-930c-dc701f67334a/npm.png" alt=""/>
			<Goal />
		</div>
	)
}

export default Header;