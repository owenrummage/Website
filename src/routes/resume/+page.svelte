<script>
	import ContactSection from '$lib/components/ContactSection.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
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
		<h2 class="mb-2 text-2xl font-semibold">Experience</h2>
		<ul class="space-y-4 text-neutral-300">
			<li class="flex flex-col gap-1">
				<div class="flex items-center justify-between">
					<span class="font-bold">Networking & Systems Administration</span>
					<div class="ml-4 flex gap-1">
						<span class="inline-block h-3 w-3 rounded-full bg-purple-500"></span>
						<span class="inline-block h-3 w-3 rounded-full bg-purple-500"></span>
						<span class="inline-block h-3 w-3 rounded-full bg-purple-500"></span>
						<span class="inline-block h-3 w-3 rounded-full bg-purple-500"></span>
						<span class="inline-block h-3 w-3 rounded-full bg-neutral-700"></span>
					</div>
				</div>
				<span class="text-sm text-neutral-400"
					>NixLabs Networks – Focused on innovative solutions in networking and systems
					administration.</span
				>
			</li>
			<li class="flex flex-col gap-1">
				<div class="flex items-center justify-between">
					<span class="font-bold">Web Development (Svelte & TailwindCSS)</span>
					<div class="ml-4 flex gap-1">
						<span class="inline-block h-3 w-3 rounded-full bg-purple-500"></span>
						<span class="inline-block h-3 w-3 rounded-full bg-purple-500"></span>
						<span class="inline-block h-3 w-3 rounded-full bg-purple-500"></span>
						<span class="inline-block h-3 w-3 rounded-full bg-neutral-700"></span>
						<span class="inline-block h-3 w-3 rounded-full bg-neutral-700"></span>
					</div>
				</div>
				<span class="text-sm text-neutral-400"
					>Built and maintained personal portfolio and web apps using modern frameworks.</span
				>
			</li>
			<li class="flex flex-col gap-1">
				<div class="flex items-center justify-between">
					<span class="font-bold">Programming & Automation</span>
					<div class="ml-4 flex gap-1">
						<span class="inline-block h-3 w-3 rounded-full bg-purple-500"></span>
						<span class="inline-block h-3 w-3 rounded-full bg-purple-500"></span>
						<span class="inline-block h-3 w-3 rounded-full bg-purple-500"></span>
						<span class="inline-block h-3 w-3 rounded-full bg-purple-500"></span>
						<span class="inline-block h-3 w-3 rounded-full bg-neutral-700"></span>
					</div>
				</div>
				<span class="text-sm text-neutral-400"
					>Experience with scripting, automation, and contributing to open source projects.</span
				>
			</li>
			<li class="flex flex-col gap-1">
				<div class="flex items-center justify-between">
					<span class="font-bold">Creative Production (Film, AV, Music)</span>
					<div class="ml-4 flex gap-1">
						<span class="inline-block h-3 w-3 rounded-full bg-purple-500"></span>
						<span class="inline-block h-3 w-3 rounded-full bg-purple-500"></span>
						<span class="inline-block h-3 w-3 rounded-full bg-neutral-700"></span>
						<span class="inline-block h-3 w-3 rounded-full bg-neutral-700"></span>
						<span class="inline-block h-3 w-3 rounded-full bg-neutral-700"></span>
					</div>
				</div>
				<span class="text-sm text-neutral-400"
					>Hands-on experience in film making, live AV, and music production.</span
				>
			</li>
		</ul>
	</section>
	<section class="mb-8">
		<h2 class="mb-2 text-2xl font-semibold">Technologies</h2>
		<ul class="flex flex-wrap gap-3 text-neutral-300">
			<li class="flex items-center gap-2 rounded bg-neutral-800 px-3 py-1">
				<img
					src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
					alt="Linux"
					class="h-5 w-5"
				/>
				<span>Linux</span>
			</li>
			<li class="flex items-center gap-2 rounded bg-neutral-800 px-3 py-1">
				<img
					src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg"
					alt="Bash"
					class="h-5 w-5"
				/>
				<span>Bash</span>
			</li>
			<li class="flex items-center gap-2 rounded bg-neutral-800 px-3 py-1">
				<img
					src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
					alt="Python"
					class="h-5 w-5"
				/>
				<span>Python</span>
			</li>
			<li class="flex items-center gap-2 rounded bg-neutral-800 px-3 py-1">
				<img
					src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
					alt="JavaScript"
					class="h-5 w-5"
				/>
				<span>JavaScript</span>
			</li>
			<li class="flex items-center gap-2 rounded bg-neutral-800 px-3 py-1">
				<img
					src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg"
					alt="Svelte"
					class="h-5 w-5"
				/>
				<span>Svelte</span>
			</li>
			<li class="flex items-center gap-2 rounded bg-neutral-800 px-3 py-1">
				<img
					src="https://raw.githubusercontent.com/devicons/devicon/refs/tags/v2.16.0/icons/tailwindcss/tailwindcss-original.svg"
					alt="TailwindCSS"
					class="h-5 w-5"
				/>
				<span>TailwindCSS</span>
			</li>
			<li class="flex items-center gap-2 rounded bg-neutral-800 px-3 py-1">
				<img
					src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
					alt="Docker"
					class="h-5 w-5"
				/>
				<span>Docker</span>
			</li>
			<li class="flex items-center gap-2 rounded bg-neutral-800 px-3 py-1">
				<img
					src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
					alt="Git"
					class="h-5 w-5"
				/>
				<span>Git</span>
			</li>
			<li class="flex items-center gap-2 rounded bg-neutral-800 px-3 py-1">
				<img
					src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg"
					alt="Nginx"
					class="h-5 w-5"
				/>
				<span>Nginx</span>
			</li>
			<li class="flex items-center gap-2 rounded bg-neutral-800 px-3 py-1">
				<img
					src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
					alt="Node.js"
					class="h-5 w-5"
				/>
				<span>Node.js</span>
			</li>
		</ul>
	</section>

	<section class="mb-8">
		<h2 class="mb-2 text-2xl font-semibold">Work History</h2>
		<ul class="space-y-4 text-neutral-300">
			<li class="flex flex-col gap-1">
				<div class="flex items-center justify-between">
					<span class="font-bold">Owner and Operator</span>
					<span class="text-sm text-neutral-400">NixLabs Networks</span>
				</div>
				<span class="text-sm text-neutral-400">2021 – Present</span>
				<ul class="mt-1 list-inside list-disc space-y-1 text-sm text-neutral-400">
					<li>Designed, deployed, and maintained secure network infrastructure for clients.</li>
					<li>Automated system administration tasks using Bash and Python scripts.</li>
					<li>Provided technical support and troubleshooting for Linux-based environments.</li>
				</ul>
			</li>
			<li class="flex flex-col gap-1">
				<div class="flex items-center justify-between">
					<span class="font-bold">Field Technician</span>
					<span class="text-sm text-neutral-400">Metro Nashville Public Schools</span>
				</div>
				<span class="text-sm text-neutral-400">2023 - 2023</span>
				<ul class="mt-1 list-inside list-disc space-y-1 text-sm text-neutral-400">
					<li>Installed, configured, and maintained computer hardware and networking equipment</li>
					<li>
						Troubleshot and resolved technical issues for staff and students, ensuring no downtime.
					</li>
					<li>Assisted with device imaging, software deployment, and inventory management.</li>
				</ul>
			</li>
			<li class="flex flex-col gap-1">
				<div class="flex items-center justify-between">
					<span class="font-bold">Director of Systems Architecture</span>
					<span class="text-sm text-neutral-400">FyraLabs LLC</span>
				</div>
				<span class="text-sm text-neutral-400">2021-2022</span>
				<ul class="mt-1 list-inside list-disc space-y-1 text-sm text-neutral-400">
					<li>
						Led the design and implementation of scalable cloud and on-premises infrastructure.
					</li>
					<li>
						Developed automation solutions for deployment, monitoring, and maintenance of systems.
					</li>
					<li>
						Collaborated with development teams to ensure secure and efficient system architecture.
					</li>
				</ul>
			</li>
		</ul>
	</section>
	<ContactSection />
</main>

<Footer />
