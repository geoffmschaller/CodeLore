import React, { FunctionComponent } from 'react';
import styles from './NewCard.module.sass';

interface Props {
	remove: any,
	index: number,
	swap: Function,
	set: Function
}

const NewCard: FunctionComponent<Props> = props => {

	const drag = (event: React.DragEvent, index: number) => {
		props.set(index);
	}

	const entering = (event: React.DragEvent, index: number) => {
		event.preventDefault();
		//console.log(event)
	}

	const leaving = (event: React.DragEvent, index: number) => {
		event.preventDefault();
		//console.log(event)
	}

	const drop = (event: React.DragEvent, index: number) => {
		props.swap(index);
	}
	
	return (
		<div
			className={styles.newCard}
			onDragStart={(e) => drag(e, props.index)}
			onDragEnter={(e) => entering(e, props.index)}
			onDragExit={(e) => leaving(e, props.index)}
			onDragOver={(e) => e.preventDefault()}
			onDrop={(e) => drop(e, props.index)}
			draggable
		>
			<div className={styles.close}>
				<i className="fas fa-times" onClick={props.remove}/>
			</div>
			{props.children}
		</div>
	)
}

export default NewCard;