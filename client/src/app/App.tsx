import React, {FunctionComponent} from 'react';
import WriteUp from '../components/WriteUp/WriteUp';
import styles from './App.module.sass';

const App: FunctionComponent = () => {
	return (
		<div className={styles.app}>
			<WriteUp/>
		</div>
	);
}

export default App;
