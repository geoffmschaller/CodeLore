import WriteUp from '../interfaces/WriteUp';
import { WriteUpType } from '../constants/enums';
import { WriteUpComponentTypes } from '../constants/enums';
import Image from '../assets/images/test_one.png';
import Image2 from '../assets/images/test_two.png';


const FakeData: Array<WriteUp> = [
	{
		id: 1,
		title: 'What the Heck is npm, and How Do I Use It?',
		author: "Geoff Schaller",
		github: 'https://github.com/geoffmschaller',
		stars: 10,
		bookmarks: 32,
		chats: 7,
		type: WriteUpType.Tutorial,
		tags: ['npm', 'javascript', 'writeup', 'cmd line', 'project', 'writeup', 'js', 'html', 'css', 'sass', 'react redux', 'react router', 'react redux', 'thunk', 'async', 'await', 'asynchronous'],
		headerImage: 'https://zdnet2.cbsistatic.com/hub/i/2019/10/15/54d57679-a8a4-483a-930c-dc701f67334a/npm.png',
		goal: 'Learn how npm works and create a new project using it.',
		components: [
			{
				type: WriteUpComponentTypes.Chapter,
				text: '1. What is npm?'
			},
			{
				type: WriteUpComponentTypes.TextBlock,
				highlight: ['npm'],
				text: 'npm is confusing, that’s what. If you’re only just venturing beyond HTML and CSS (and maybe some jQuery) then npm is a bit of a jump! Here’s the basics… '
			},
			{
				type: WriteUpComponentTypes.Chapter,
				text: '2. Launch Server'
			},
			{
				type: WriteUpComponentTypes.TextBlock,
				highlight: ['npm'],
				text: 'The letters npm stand for “node package manager”. When you are working on a JavaScript project, you can use npm to install other people’s code packages into your own project. Your project might be a web project like a website or web app, or it could be a server-side project using node. Any JavaScript project can use npm to pull in packages of existing code. '
			},
			{
				type: WriteUpComponentTypes.TextBlock,
				highlight: ['npm'],
				text: 'npm is a tool you install on your computer. It’s part of node, so install the LTS version of Node to get both the node and npm commands in your command line. It must be installed on every computer where you want to work on your project, so if you move your files around using a USB drive don’t forget that part! '
			},
			{
				type: WriteUpComponentTypes.CMD,
				text: '~ npm run start'
			},
			{
				type: WriteUpComponentTypes.TextBlock,
				highlight: ['npm'],
				text: 'You use npm from the command line to install, uninstall or update packages. By “package” I mean any piece of code which someone has chosen to publish on npm. '
			},
			{
				type: WriteUpComponentTypes.Definition,
				word: 'Package (verb)',
				meaning: 'any piece of code which someone has chosen to publish on npm'
			},
			{
				type: WriteUpComponentTypes.Chapter,
				text: '3. Create A New Project'
			},
			{
				type: WriteUpComponentTypes.TextBlock,
				highlight: ['browse'],
				text: 'There are thousands of packages published on npm. You can browse them on npmjs.com, but usually you will find recommended packages by searching on Google or following blog posts. Some packages are only suitable for web projects, and some are only suitable for node projects. '
			},
			{
				type: WriteUpComponentTypes.ImageBlock,
				image: Image,
				label: 'Look at the cool code snippet above'
			},
			{
				type: WriteUpComponentTypes.TextBlock,
				highlight: ['especially'],
				text: 'Each time you open your project on a different computer, you may have to reinstall all your packages. This is especially true if you are moving between Mac and Windows. This is because not all packages are cross-compatible, and sometimes need a version downloaded for the specific system you are using it on. '
			},
			{
				type: WriteUpComponentTypes.ImageBlock,
				image: Image2,
				label: 'Look at the cool code snippet above'
			},
			{
				type: WriteUpComponentTypes.TextBlock,
				highlight: ['first', 'time'],
				text: 'When you open a project for the first time or on a different computer, reinstall all your packages: '
			},
		]
	}
]

export default FakeData;