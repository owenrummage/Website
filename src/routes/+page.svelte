<script>
	import ContactSection from '$lib/components/ContactSection.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
</script>

<Header />
<main class="w-full max-w-xl flex-1">
	<section class="mb-8 space-y-4">
		<h2 class="mb-2 text-2xl font-semibold">About Me</h2>
		<p class="text-neutral-300">
			Hello! My name is Owen Rummage, and I'm a 20-year-old technologist with a passion for building
			and exploring new ideas. I currently work at NixLabs Networks, where I focus on innovative
			solutions in networking and systems administration.
		</p>
		<p class="text-neutral-300">
			Outside of my professional work, I spend much of my time programming and experimenting with
			new technologies. I'm also deeply interested in creative pursuits like film making, live AV
			production, and music production, which allow me to blend technical skills with artistic
			expression.
		</p>
		<p class="text-neutral-300">
			Whether I'm writing code, producing music, or working behind the scenes at live events, I
			enjoy tackling challenges and learning something new every day. I'm always eager to connect
			with others who share my enthusiasm for technology and creativity.
		</p>
	</section>
	<ContactSection />
</main>

<Footer />
