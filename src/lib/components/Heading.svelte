<script>
	import ProfilePhoto from '$lib/assets/me.jpeg';
</script>

<div class="flex flex-row justify-between">
	<span>
		<a href="/" class="text-4xl font-bold">Owen Rummage</a>
		<h1 class="font-purple-500 mt-2 text-xl">Programmer and Systems Admin</h1>
		<span class="flex flex-row gap-4">
			<a href="/resume" class="font-bold">Resume</a>
			<a href="https://github.com/owenrummage">GitHub</a>
			<a href="https://www.linkedin.com/in/owen-rummage-335035245/">Linkedin</a>
			<a href="https://bsky.app/profile/rummage.cc">Bluesky</a>
		</span>
	</span>
	<img src={ProfilePhoto} alt="Profile Photo" class="h-24 w-24 rounded-full" />
</div>
