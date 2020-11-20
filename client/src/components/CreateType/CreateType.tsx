import React, { FunctionComponent, useState } from 'react';
import styles from './CreateType.module.sass';

const CreateType: FunctionComponent = () => {

	const [currentType, setCurrentType] = useState(0);

	const typeList: Array<string> = ['Tutorial', 'Walk Through', 'Article', 'Opinion'];

	return (
		<div className={styles.createType}>
			{
				typeList.map((t, index) => {
					return <div
						className={[styles.type, index === currentType ? styles.selected : ''].join(' ')}
						onClick={(() => setCurrentType(index))}
						key={index}
					>{t}</div>
				})
			}
		</div>
	)
}

export default CreateType;