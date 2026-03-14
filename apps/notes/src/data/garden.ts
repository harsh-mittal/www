import { type CollectionEntry, getCollection } from "astro:content";

export async function getAllNotes(): Promise<CollectionEntry<"garden">[]> {
	return await getCollection("garden", ({ data }) => {
		return import.meta.env.PROD ? !data.draft : true;
	});
}

export function getNoteTopic(note: CollectionEntry<"garden">): string {
	const parts = note.id.split("/");
	return parts.length > 1 ? parts[0]! : "uncategorized";
}

export function groupNotesByTopic(notes: CollectionEntry<"garden">[]) {
	return Object.groupBy(notes, (note) => getNoteTopic(note));
}

export function getAllTags(notes: CollectionEntry<"garden">[]) {
	return notes.flatMap((note) => [...note.data.tags]);
}

export function getUniqueTags(notes: CollectionEntry<"garden">[]) {
	return [...new Set(getAllTags(notes))];
}
