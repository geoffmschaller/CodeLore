export enum WriteUpType {
	Tutorial
}

export enum WriteUpComponentTypes {
	Chapter,
	TextBlock,
	CMD,
	Definition,
	ImageBlock
}

export interface Block {
	type: WriteUpComponentTypes
}

export interface ChapterBlock extends Block {
	type: WriteUpComponentTypes.Chapter,
	text: string
}

export interface TextBlock extends Block {
	type: WriteUpComponentTypes.TextBlock,
	text: string
	highlight: Array<string>
}

export interface CMDBlock extends Block{
	type: WriteUpComponentTypes.CMD,
	text: string
}

export interface DefinitionBlock extends Block {
	type: WriteUpComponentTypes.Definition,
	word: string,
	meaning: string
}

export interface ImageBlock extends Block {
	type: WriteUpComponentTypes.ImageBlock,
	image: string,
	label: string
}
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