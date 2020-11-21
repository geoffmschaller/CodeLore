import React, { FunctionComponent } from 'react';
import styles from './CreateBar.module.sass';

import { ChapterBlock, TextBlock, CMDBlock, DefinitionBlock, ImageBlock, WriteUpComponentTypes } from '../../interfaces/WriteUp';

interface Props {
	add: Function
}

const CreateBar: FunctionComponent<Props> = props => {
	return (
		<div className={styles.createBar}>
			<div className={styles.item}>
				<i className="fas fa-books" onClick={() => props.add({
					type: WriteUpComponentTypes.Chapter,
					text: ''
				})}/>
			</div>
			<div className={styles.item}>
				<i className="fas fa-font-case" onClick={() => props.add({
					type: WriteUpComponentTypes.TextBlock,
					text: "This is the text",
					highlight: ['text']
				})}/>
			</div>
			<div className={styles.item}>
				<i className="fas fa-code" onClick={() => props.add({
					type: WriteUpComponentTypes.CMD,
					text: '~ npm run start'
				})}/>
			</div>
			<div className={styles.item}>
				<i className="fas fa-spell-check" onClick={ () => props.add({
					type: WriteUpComponentTypes.Definition,
					word: "Word",
					meaning: "This is the meaning"
				})}/>
			</div>
			<div className={styles.item}>
				<i className="fas fa-image" onClick={() => props.add({
					type: WriteUpComponentTypes.ImageBlock,
					image: '###',
					label: "This is the label"
				})}/>
			</div>
		</div>
	)
}

export default CreateBar;