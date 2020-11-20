import React, {FunctionComponent, useState} from 'react';
import styles from './WriteUp.module.sass';

import Chapter from '../../components/Chapter/Chapter';
import TextBlockView from '../../components/TextBlock/TextBlock';
import ImageBlockView from '../../components/ImageBlock/ImageBlock';
import Header from '../../components/Header/Header';
import CodeLine from '../../components/CodeLine/CodeLine';
import Definition from '../../components/Definition/Definition';
import Done from '../../components/Done/Done';

import { ChapterBlock, TextBlock, CMDBlock, DefinitionBlock, ImageBlock } from '../../interfaces/WriteUp';
import { WriteUpComponentTypes } from '../../interfaces/WriteUp';

import FakeData from '../../data/FakeData';

const WriteUp: FunctionComponent = props => {

	const [currentWriteUp, setCurrentWriteUp] = useState(FakeData[0]);

	const generateBlock = (object: ChapterBlock | TextBlock | CMDBlock | DefinitionBlock | ImageBlock): React.ReactElement | null => {
		switch (object.type) {
			case WriteUpComponentTypes.Chapter:
				return <Chapter title={object.text} key={object.text}/>
			case WriteUpComponentTypes.TextBlock:
				return <TextBlockView
					text={object.text}
					highlight={object.highlight}
					key={object.text}
				/>
			case WriteUpComponentTypes.CMD:
				return <CodeLine
					code={object.text}
					key={object.text}
				/>
			case WriteUpComponentTypes.Definition:
				return <Definition
					word={object.word}
					definition={object.meaning}
					key={object.word}
				/>
			case WriteUpComponentTypes.ImageBlock:
				return <ImageBlockView
					src={object.image}
					label={object.label}
					key={object.label}
				/>
			default:
				return null
		}
	}

	return (
		<div className={styles.writeUp}>
			<Header writeUp={currentWriteUp}/>
			{
				currentWriteUp.components.map(comp => {
					return generateBlock(comp);
				})
			}
			<Done/>
		</div>
	)
}

export default WriteUp;