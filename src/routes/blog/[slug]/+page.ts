import type { Post } from '$lib/_types';
import { error } from '@sveltejs/kit';

export async function load({ params }): Promise<{
	content: any;
	meta: Post;
}> {
	try {
		const post = await import(`../../../posts/${params.slug}.md`);

		return {
			content: post.default,
			meta: post.metadata
		};
	} catch (e) {
		error(404, `Could not find ${params.slug}`);
	}
}
