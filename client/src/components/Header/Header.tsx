import React, { FunctionComponent } from 'react';
import Author from '../Author/Author';
import Goal from '../Goal/Goal';
import Tags from '../Tags/Tags';
import styles from './Header.module.sass';

import WriteUp from '../../interfaces/WriteUp';
interface Props {
	writeUp: WriteUp
}

const Header: FunctionComponent<Props> = props => {
	return (
		<div className={styles.header}>
			<div className={styles.title}>{props.writeUp.title}</div>
			<Author writeUp={props.writeUp}/>
			<Tags writeUp={props.writeUp}/>
			<img src={props.writeUp.headerImage} alt=""/>
			<Goal writeUp={props.writeUp}/>
		</div>
	)
}

export default Header;