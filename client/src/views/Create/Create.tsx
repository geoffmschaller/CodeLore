import React, { FunctionComponent } from 'react';
import styles from './Create.module.sass';
import CreateTitle from '../../components/CreateTitle/CreateTitle';
import CreateType from '../../components/CreateType/CreateType';
import CreateTags from '../../components/CreateTags/CreateTags';
import CreateGoal from '../../components/CreateGoal/CreateGoal';
import DDImage from '../../components/CreateImageHeader/CreateImageHeader';
import CreateComponents from '../../components/CreateComponents/CreateComponents';

const Create: FunctionComponent = () => {
	return (
		<div className={styles.create}>
			<CreateTitle />
			<CreateType />
			<CreateTags />
			<DDImage/>
			<CreateGoal />
			<CreateComponents/>
		</div>
	)
}

export default Create;