import rss from "@astrojs/rss";
import { getAllNotes } from "@/data/garden";
import { siteConfig } from "@/site.config";

export const GET = async () => {
	const notes = await getAllNotes();

	return rss({
		title: siteConfig.title,
		description: siteConfig.description,
		site: import.meta.env.SITE,
		items: notes.map((note) => ({
			title: note.data.title,
			description: note.data.description ?? note.data.title,
			pubDate: note.data.publishDate,
			link: `${note.id}/`,
		})),
	});
};
