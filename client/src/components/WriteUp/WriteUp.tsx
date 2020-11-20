import React, {FunctionComponent, useState} from 'react';
import styles from './WriteUp.module.sass';

import Chapter from '../Chapter/Chapter';
import TextBlockView from '../TextBlock/TextBlock';
import ImageBlockView from '../ImageBlock/ImageBlock';
import Header from '../Header/Header';
import CodeLine from '../CodeLine/CodeLine';
import Definition from '../Definition/Definition';
import Done from '../Done/Done';

import { ChapterBlock, TextBlock, CMDBlock, DefinitionBlock, ImageBlock } from '../../interfaces/WriteUpComponent';
import { WriteUpComponentTypes } from '../../constants/enums';

import FakeData from '../../data/FakeData';

const WriteUp: FunctionComponent = props => {

	const [currentWriteUp, setCurrentWriteUp] = useState(FakeData[0]);

	const generateBlock = (object: ChapterBlock | TextBlock | CMDBlock | DefinitionBlock | ImageBlock): React.ReactElement | null => {
		switch (object.type) {
			case WriteUpComponentTypes.Chapter:
				return <Chapter title={object.text} />
			case WriteUpComponentTypes.TextBlock:
				return <TextBlockView
					text={object.text}
					highlight={object.highlight}
				/>
			case WriteUpComponentTypes.CMD:
				return <CodeLine code={object.text} />
			case WriteUpComponentTypes.Definition:
				return <Definition
					word={object.word}
					definition={object.meaning}
				/>
			case WriteUpComponentTypes.ImageBlock:
				return <ImageBlockView
					src={object.image}
					label={object.label}
				/>
			default:
				return null
		}
	}

	return (
		<div className={styles.writeUp}>
			<Header writeUp={currentWriteUp}/>
			{
				currentWriteUp.components.map((comp, index) => {
					return generateBlock(comp);
				})
			}
			<Done/>
		</div>
	)
}

export default WriteUp;