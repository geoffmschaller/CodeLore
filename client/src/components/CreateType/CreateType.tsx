import React, { FunctionComponent, useState } from 'react';
import CreateInstruction from '../CreateInstruction/CreateInstruction';
import styles from './CreateType.module.sass';

const CreateType: FunctionComponent = () => {

	const [currentType, setCurrentType] = useState(0);

	const typeList: Array<string> = ['Tutorial', 'Walk Through', 'Article', 'Opinion'];

	return (
		<div className={styles.createType}>
			<CreateInstruction title={'2. Add a Type Tag'}>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat enim nemo corporis voluptas culpa voluptatem repudiandae, exercitationem est atque, hic delectus, omnis quasi dolore animi architecto aperiam a rerum illo?
			</CreateInstruction>
			<div className={styles.wrapper}>
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
			
		</div>
	)
}

export default CreateType;