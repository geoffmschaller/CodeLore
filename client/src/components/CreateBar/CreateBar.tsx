import React, { FunctionComponent } from 'react';
import styles from './CreateBar.module.sass';

import { ChapterBlock, TextBlock, CMDBlock, DefinitionBlock, ImageBlock, WriteUpComponentTypes } from '../../interfaces/WriteUp';

interface Props {
	add: Function
}

const CreateBar: FunctionComponent<Props> = props => {
	return (
		<div className={styles.createBar}>
			<div className={styles.item} onClick={() => props.add({
					type: WriteUpComponentTypes.Chapter,
					text: ''
				})}>
				<i className="fas fa-books"/>
			</div>
			<div className={styles.item} onClick={() => props.add({
					type: WriteUpComponentTypes.TextBlock,
					text: "This is the text",
					highlight: ['text']
				})}>
				<i className="fas fa-font-case" />
			</div>
			<div className={styles.item} onClick={() => props.add({
					type: WriteUpComponentTypes.CMD,
					text: '~ npm run start'
				})}>
				<i className="fas fa-code" />
			</div>
			<div className={styles.item} onClick={ () => props.add({
					type: WriteUpComponentTypes.Definition,
					word: "Word",
					meaning: "This is the meaning"
				})}>
				<i className="fas fa-spell-check" />
			</div>
			<div className={styles.item} onClick={() => props.add({
					type: WriteUpComponentTypes.ImageBlock,
					image: '###',
					label: "This is the label"
				})}>
				<i className="fas fa-image" />
			</div>
		</div>
	)
}

export default CreateBar;