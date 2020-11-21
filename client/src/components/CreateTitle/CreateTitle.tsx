import React, { FunctionComponent } from 'react';
import CreateInstruction from '../CreateInstruction/CreateInstruction';
import styles from './CreateTitle.module.sass';

const CreateTitle: FunctionComponent = props => {
	return (
		<div className={styles.title}>
			<CreateInstruction title={'1. Create a Cool Title'}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa dolorem iusto quae sequi, a odio cum libero eligendi nesciunt voluptatum inventore error molestiae animi enim perspiciatis? Distinctio doloremque earum exercitationem?
			</CreateInstruction>
			<input type='text' placeholder='Add Title Here ...'/>
		</div> 
	)
}

export default CreateTitle;