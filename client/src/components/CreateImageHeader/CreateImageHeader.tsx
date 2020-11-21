import React, { FunctionComponent } from 'react';
import CreateInstruction from '../CreateInstruction/CreateInstruction';
import styles from './CreateImageHeader.module.sass';

const CreateImageHeader: FunctionComponent = () => {
	return (
		<div className={styles.createHeaderImage}>
			<CreateInstruction title={'4. Add A Header Image'}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, itaque. Nobis odio eaque suscipit officia, id similique quam iste doloribus nesciunt dicta vel magni et. Exercitationem delectus esse accusantium ipsam.
			</CreateInstruction>
			<div className={styles.upload}>
				<i className="fas fa-upload" />
				<div className={styles.text}>Drag & Drop <br/> Main Header Image Here</div>
			</div>
		</div>
	)
}

export default CreateImageHeader;