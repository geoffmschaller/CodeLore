import React, { FunctionComponent, useState } from 'react';
import CreateBar from '../CreateBar/CreateBar';
import styles from './CreateComponents.module.sass';

const CreateComponents: FunctionComponent = () => {

	const [components, setComponents] = useState([]);

	return (
		<div className={styles.createComponents}>
			<div className={styles.wrapper}>
				{
					components.length < 1
						? <div className={styles.none}>Click below to add components</div>
						: ''
				}
			</div>
			<CreateBar />
		</div>
	)
}

export default CreateComponents;