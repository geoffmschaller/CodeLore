import React, { FunctionComponent, useState } from 'react';
import CreateInstruction from '../CreateInstruction/CreateInstruction';
import styles from './CreateImageHeader.module.sass';

const CreateImageHeader: FunctionComponent = () => {

	const [qualifiedUpload, setQualifiedUpload] = useState('');

	const drop = (event: React.DragEvent) => {
		event.preventDefault();
		setQualifiedUpload('');
	}

	const enter = (event: React.DragEvent) => {
		event.preventDefault();
		const upload = event.dataTransfer.items[0];
		const types = ['image/png', 'image/jpg', 'image/jpeg', 'image/JPG', 'image/JPEG', 'image/svg'];
		if (upload.kind === 'file' && types.includes(upload.type)) {
			setQualifiedUpload(styles.qualified);
		} else {
			setQualifiedUpload(styles.error);
		}
	}

	const exit = (event: React.DragEvent) => {
		event.preventDefault();
		setQualifiedUpload('');
	}
	
	return (
		<div className={styles.createHeaderImage}>
			<CreateInstruction title={'4. Add A Header Image'}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, itaque. Nobis odio eaque suscipit officia, id similique quam iste doloribus nesciunt dicta vel magni et. Exercitationem delectus esse accusantium ipsam.
			</CreateInstruction>
			<div
				className={[styles.upload, qualifiedUpload].join(' ')}
				onDragEnter={(e) => enter(e)}
				onDragExit={(e) => exit(e)}
				onDragOver={(e) => e.preventDefault()}
				onDrop={(e) => drop(e)}
				draggable
			>
				<i className="fas fa-upload" />
				<div className={styles.text}>Drag & Drop <br/> Main Header Image Here</div>
			</div>
		</div>
	)
}

export default CreateImageHeader;