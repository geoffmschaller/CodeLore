import React, { FunctionComponent } from 'react';
import styles from './ImageBlock.module.sass';

interface Props {
	src: string,
	label: string
}

const ImageBlock: FunctionComponent<Props> = props => {
	return (
		<div className={styles.imageBlock}>
			<img src={props.src} alt="" />
			<div className={styles.label}>{props.label}</div>
		</div>
	)
}

export default ImageBlock;