import React, { FunctionComponent, useState } from 'react';
import CreateInstruction from '../CreateInstruction/CreateInstruction';
import styles from './CreateTags.module.sass';

const CreateTags: FunctionComponent = () => {

	const [currentTags, setCurrentTags] = useState([
		'npm', 'react', 'html', 'css', 'sass'
	]);

	const [currentInput, setCurrentInput] = useState('');

	const removeFromTags = (index: number) => {
		currentTags.splice(index, 1);
		setCurrentTags([...currentTags]);
	}

	const addTag = () => {
		if (currentInput != '') {
			if(!currentTags.includes(currentInput.toLowerCase()))
				setCurrentTags([...currentTags, currentInput.toLowerCase()]);
			setCurrentInput('');
		}
	}

	return (
		<div className={styles.createTags}>
			<CreateInstruction title={'3. Add Article Tags'}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus laudantium pariatur doloremque voluptas atque modi mollitia molestiae ipsa! Soluta magni quo ab et, unde ullam maxime magnam alias eveniet? Architecto.
			</CreateInstruction>
			<div className={styles.tagHolder}>
				{
					currentTags.map((tag, index) => {
						return <div
							className={styles.tag}
							onClick={() => removeFromTags(index)}
							key={index}
						>
							<div className={styles.name}>{tag}</div>
							<div className={styles.remove}>
								<i className="fas fa-times"/>
							</div>
						</div>
					})
				}
			</div>
			<div className={styles.addTag}>
				<div className={styles.tagInput}>
					<input
						type='text'
						placeholder={"Add New Tag Here ..."}
						value={currentInput}
						onChange={(e) => setCurrentInput(e.target.value)}
					/>
				</div>
				<div className={styles.addButton} onClick={() => addTag()}>
					<i className="fas fa-plus"/>
				</div>
			</div>
		</div>
	)
}

export default CreateTags;