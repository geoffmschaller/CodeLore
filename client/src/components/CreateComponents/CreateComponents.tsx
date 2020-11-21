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

	const [components, setComponents] = useState<Array<ChapterBlock | TextBlock | CMDBlock | DefinitionBlock | ImageBlock | null>>([]);
	const [draggedComponent, setDraggedComponent] = useState(-1);

	const generateCard = (element: ChapterBlock | TextBlock | CMDBlock | DefinitionBlock | ImageBlock | null): React.ReactElement | null => {
		if (element === null) return null;
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

	const swap = (target: number) => {
		if (draggedComponent >= 0) {
			if (target >= components.length) {
				var k = target - components.length + 1;
				while (k--) {
					components.push(null);
				}
			}
			components.splice(target, 0, components.splice(draggedComponent, 1)[0]);
			setComponents([...components]);
		}
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
							return <NewCard
								key={index}
								remove={() => remove(index)}
								index={index}
								swap={swap}
								set={setDraggedComponent}
							>
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