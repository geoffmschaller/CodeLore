import React, { FunctionComponent, useState } from 'react';
import CreateBar from '../CreateBar/CreateBar';
import styles from './CreateComponents.module.sass';
import NewCard from '../NewCard/NewCard';
import NewChapterCard from '../NewChapterCard/NewChapterCard';

import { ChapterBlock, TextBlock, CMDBlock, DefinitionBlock, ImageBlock, WriteUpComponentTypes } from '../../interfaces/WriteUp';
import NewTextBlockCard from '../NewTextBlockCard/NewTextBlockCard';
import NewCMDCard from '../NewCMDCard/NewCMDCard';
import NewDefinitionCard from '../NewDefinitionCard/NewDefinitionCard';
import NewImageCard from '../NewImageCard/NewImageCard';
import CreateInstruction from '../CreateInstruction/CreateInstruction';

const CreateComponents: FunctionComponent = () => {

	const [components, setComponents] = useState<Array<ChapterBlock | TextBlock | CMDBlock | DefinitionBlock | ImageBlock>>([]);

	const generateCard = (element: ChapterBlock | TextBlock | CMDBlock | DefinitionBlock | ImageBlock): React.ReactElement | null => {
		switch (element.type) {
			case WriteUpComponentTypes.Chapter:
				return <NewChapterCard />
			case WriteUpComponentTypes.TextBlock:
				return <NewTextBlockCard />
			case WriteUpComponentTypes.CMD:
				return <NewCMDCard />
			case WriteUpComponentTypes.Definition:
				return <NewDefinitionCard />
			case WriteUpComponentTypes.ImageBlock:
				return <NewImageCard />
			default:
				return null
		}
	}

	const remove = (index: number) => {
		components.splice(index, 1);
		setComponents([...components]);
	}

	const add = (element: ChapterBlock | TextBlock | CMDBlock | DefinitionBlock | ImageBlock) => {
		components.push(element);
		setComponents([...components]);
	}

	return (
		<div className={styles.createComponents}>
			<CreateInstruction title={'6. Add Write Up Components'}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae consequuntur dignissimos voluptatibus hic earum, voluptates culpa ex quam exercitationem at necessitatibus deleniti! Maiores perspiciatis sit quae vitae esse vero amet?
			</CreateInstruction>
			<div className={styles.wrapper}>
				{
					components.length < 1
						? <div className={styles.none}>
							Click Below To Add Components To
							<br />
							Your Write Up
							<br />
							<i className="fas fa-chevron-down"/>
							</div>
						: components.map((comp, index) => {
							return <NewCard key={index} remove={() => remove(index)}>
								{generateCard(comp)}
							</NewCard>
						})
				}
			</div>
			<CreateBar add={add}/>
		</div>
	)
}

export default CreateComponents;