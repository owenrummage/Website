<script>
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';

	// Fake GitHub projects data
	const projects = [
		{
			title: 'SysadminAcademy',
			description: 'A website that teaches you how to be a systems administeator.',
			stars: 124,
			link: 'https://sysadmin.academy'
		},
		{
			title: 'xtctrl',
			description:
				'A library used to interact with the Mackie Control protocol, specifically the Behringer X-Touch in Typescript.',
			stars: 0,
			link: 'https://github.com/owenrummage/xtctrl'
		},
		{
			title: 'SVIdentity',
			description: 'A svelte based simple as f*** identity management system.',
			stars: 56,
			link: 'https://github.com/owenrummage/SVIdentity'
		},
		{
			title: 'CommandMoney',
			description: 'A command line tool for managing money.',
			stars: 102,
			link: 'https://github.com/owenrummage/CommandMoney'
		},
		{
			title: 'PlaytimeRewards',
			description:
				'A minecraft plugin to psychologically manipulate your players into playing more.',
			stars: 39,
			link: 'https://github.com/owenrummage/PlaytimeRewards'
		}
	];
</script>

<Header />
<main class="w-full max-w-3xl flex-1">
	<section class="mb-8 space-y-4">
		<h2 class="mb-2 text-2xl font-semibold">About Me</h2>
		<p class="text-neutral-300">
			Technologist with a strong foundation in networking, systems administration, and web
			development, currently contributing to innovative solutions at NixLabs Networks. Experienced
			in programming, automation, and creative production, with a proven ability to blend technical
			expertise and artistic vision. Adept at tackling complex challenges, learning new
			technologies, and collaborating with others to deliver impactful results.
		</p>
	</section>

	<section class="mb-8">
		<h2 class="mb-2 text-2xl font-semibold">Projects</h2>
		<div class="grid grid-cols-1 gap-6 rounded-lg p-4 sm:grid-cols-2">
			{#each projects as project (project.title)}
				<a
					href={project.link}
					target="_blank"
					rel="noopener"
					class="group flex flex-col items-stretch justify-between rounded-lg border border-neutral-800 bg-neutral-900 p-5 shadow transition-colors hover:border-purple-500"
				>
					<div class="flex flex-1 flex-col">
						<span class="mb-2 text-lg font-bold transition-colors group-hover:text-purple-400"
							>{project.title}</span
						>
						<p class="flex-1 text-sm text-neutral-300">{project.description}</p>
					</div>
					<div class="mt-4 flex items-center gap-1">
						<svg class="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
							<path
								d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z"
							/>
						</svg>
						<span class="text-sm font-medium text-neutral-400">{project.stars}</span>
					</div>
				</a>
			{/each}
		</div>
	</section>
</main>

<Footer />
