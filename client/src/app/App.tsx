import React, {FunctionComponent} from 'react';
import WriteUp from '../views/WriteUp/WriteUp';
import Create from '../views/Create/Create';
import styles from './App.module.sass';

const App: FunctionComponent = () => {
	return (
		<div className={styles.app}>
			<Create />
			<WriteUp/>
		</div>
	);
}

export default App;
