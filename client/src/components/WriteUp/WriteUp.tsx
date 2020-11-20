import React, {FunctionComponent} from 'react';
import styles from './WriteUp.module.sass';

import Chapter from '../Chapter/Chapter';
import TextBlock from '../TextBlock/TextBlock';

import TEST_IMAGE from '../../assets/images/test_one.png';
import TEST_IMAGE_TWO from '../../assets/images/test_two.png';

import ImageBlock from '../ImageBlock/ImageBlock';
import Header from '../Header/Header';
import CodeLine from '../CodeLine/CodeLine';
import Definition from '../Definition/Definition';
import Done from '../Done/Done';

const WriteUp: FunctionComponent = props => {
	return (
		<div className={styles.writeUp}>
			<Header />
			<Chapter title={"What is npm?"} />
			<TextBlock
				text='npm is confusing, that’s what. If you’re only just venturing beyond HTML and CSS (and maybe some jQuery) then npm is a bit of a jump! Here’s the basics…'
				highlight={['npm']}
			/>
			<Chapter title={"Launch Server"} />
			<TextBlock
				text='The letters npm stand for “node package manager”. When you are working on a JavaScript project, you can use npm to install other people’s code packages into your own project. Your project might be a web project like a website or web app, or it could be a server-side project using node. Any JavaScript project can use npm to pull in packages of existing code.'
				highlight={['npm']}
			/>
			<TextBlock
				text='npm is a tool you install on your computer. It’s part of node, so install the LTS version of Node to get both the node and npm commands in your command line. It must be installed on every computer where you want to work on your project, so if you move your files around using a USB drive don’t forget that part!'
				highlight={['npm']}
			/>
			<CodeLine code={"npm run start"}/>
			<TextBlock
				text='You use npm from the command line to install, uninstall or update packages. By “package” I mean any piece of code which someone has chosen to publish on npm.'
				highlight={['npm']}
			/>
			<Definition word={'Package (verb)'} definition={'any piece of code which someone has chosen to publish on npm'}/>
			<Chapter title={"Create A New Project"} />
			<TextBlock
				text='There are thousands of packages published on npm. You can browse them on npmjs.com, but usually you will find recommended packages by searching on Google or following blog posts. Some packages are only suitable for web projects, and some are only suitable for node projects.'
				highlight={['packages']}
			/>
			<ImageBlock src={TEST_IMAGE} label={'Look at the cool code snippet above.'} />
			<TextBlock
				text='Each time you open your project on a different computer, you may have to reinstall all your packages. This is especially true if you are moving between Mac and Windows. This is because not all packages are cross-compatible, and sometimes need a version downloaded for the specific system you are using it on.'
				highlight={['cross-compatible,', 'especially']}
			/>
			<ImageBlock src={TEST_IMAGE_TWO} label={'Look at the cool code snippet above.'} />
			<TextBlock
				text='When you open a project for the first time or on a different computer, reinstall all your packages:'
				highlight={[]}
			/>
			<Done/>
		</div>
	)
}

export default WriteUp;