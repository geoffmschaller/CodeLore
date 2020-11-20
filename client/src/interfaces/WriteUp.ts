import { WriteUpType } from '../constants/enums';
import {ChapterBlock, TextBlock, CMDBlock, DefinitionBlock, ImageBlock} from '../interfaces/WriteUpComponent';

interface WriteUp {
	id: number,
	title: string,
	author: string,
	github: string,
	stars: number,
	bookmarks: number,
	chats: number,
	type: WriteUpType,
	tags: Array<string>,
	headerImage: string,
	goal: string,
	components: Array<ChapterBlock | TextBlock | CMDBlock | DefinitionBlock | ImageBlock>
}

export default WriteUp;