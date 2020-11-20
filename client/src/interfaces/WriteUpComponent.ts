import { WriteUpComponentTypes } from '../constants/enums';

export interface ChapterBlock {
	type: WriteUpComponentTypes.Chapter,
	text: string
}

export interface TextBlock {
	type: WriteUpComponentTypes.TextBlock,
	text: string
	highlight: Array<string>
}

export interface CMDBlock {
	type: WriteUpComponentTypes.CMD,
	text: string
}

export interface DefinitionBlock {
	type: WriteUpComponentTypes.Definition,
	word: string,
	meaning: string
}

export interface ImageBlock {
	type: WriteUpComponentTypes.ImageBlock,
	image: string,
	label: string
}