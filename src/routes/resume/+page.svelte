<script lang="ts">
	import Heading from '$lib/components/Heading.svelte';

	let skills = {
		tools: [
			{ name: 'Enterprise Networking (Cisco/Arista)', skill: 4 },
			{ name: 'Ansible & Terraform', skill: 2 },
			{ name: 'VyOS and OPNSense', skill: 3 },
			{ name: 'Containerization (Docker/Kubernetes)', skill: 4 },
			{ name: 'Git and DevOps', skill: 2 },
			{ name: 'OpenStack and CloudStack', skill: 2 },
			{ name: 'Ceph', skill: 2 },
			{ name: 'VMware vSAN', skill: 1 }
		],
		languages: [
			{ name: 'Python', skill: 4 },
			{ name: 'GoLang', skill: 2 },
			{ name: 'TypeScript', skill: 4 },
			{ name: 'HTML', skill: 3 },
			{ name: 'CSS', skill: 2 }
		]
	};

	let experience = [
		{
			title: 'Director of IT',
			company: 'NixLabs Networks',
			location: 'Nashville, TN',
			dates: 'Mar 2019 - Present',
			responsibilities: [
				'Designed, implemented, and managed enterprise-grade network infrastructure.',
				'Developed and maintained BGP peering relationships to enhance network reliability.',
				'Led the technical strategy for cloud and colocation services, ensuring high availability.',
				'Managed security and compliance for hosted infrastructure and customer environments.',
				'Automated network and server deployments using Ansible and Terraform.'
			]
		},
		{
			title: 'Technical Specialist',
			company: 'Computer House',
			location: 'Nashville, TN',
			dates: 'Jun 2023 - Aug 2023',
			responsibilities: [
				'Repaired and troubleshot customer computers, including hardware replacements and OS reinstalls.',
				'Configured and deployed enterprise networks and servers for contract clients.',
				'Managed inventory and sales in a physical storefront, providing expert customer service.',
				'Provided technical support and consultation for small business clients.'
			]
		},
		{
			title: 'IT Support Intern',
			company: 'Metro Nashville Public Schools',
			location: 'Nashville, TN',
			dates: 'Jan 2023 - Jul 2023',
			responsibilities: [
				'Deployed and maintained Windows systems using Windows Deployment Services (WDS).',
				'Provided hardware and software troubleshooting for faculty and staff across multiple schools.',
				'Assisted with network maintenance and Active Directory administration.',
				'Supported classroom technology, including projectors, printers, and smart boards.'
			]
		},
		{
			title: 'System Architect',
			company: 'Fyra Labs',
			type: 'Part-time',
			location: 'Remote',
			dates: 'Mar 2022 - October 2022',
			responsibilities: [
				'Designed and deployed scalable cloud architectures for various applications.',
				'Implemented load balancing and CDN solutions using Cloudflare and HAProxy.',
				'Developed automation scripts to streamline cloud infrastructure management.',
				'Ensured system security and compliance with best practices for cloud deployments.'
			]
		}
	];
</script>

<svelte:head>
	<title>Owen Rummage - Resume</title>
</svelte:head>

<div class="flex max-w-screen-lg flex-col space-y-4 p-4">
	<Heading />
	<div class="h-2" />
	<h2 class="mt-6 text-xl font-bold">About Me</h2>

	<p class="text-neutral-800 dark:text-neutral-300">
		I am a dedicated and highly motivated Systems Administrator with a strong foundation in cloud
		infrastructure, open-source technologies, and large-scale deployment management. With a lifelong
		passion for technology, I have been actively working with computers since the age of six and
		have been a committed Linux user since I was eight. My deep-rooted interest in open-source
		software has driven me to explore, implement, and optimize various cloud platforms and system
		architectures.
	</p>
	<p class="text-neutral-800 dark:text-neutral-300">
		Currently, I am pursuing an Associate of Applied Sciences in Computer Information Technology at
		Nashville State, further strengthening my expertise in systems administration, networking, and
		software development. My professional experience centers around designing, deploying, and
		managing large-scale cloud environments utilizing industry-leading virtualization and cloud
		orchestration technologies such as VMware, Proxmox, KVM, and OpenStack.
	</p>
	<p class="text-neutral-800 dark:text-neutral-300">
		Throughout my career, I have managed high-availability environments with load balancing,
		redundancy, and failover mechanisms to ensure minimal downtime. I have also automated
		infrastructure provisioning and configuration management using tools such as Ansible and
		Terraform to enhance deployment efficiency. My expertise extends to optimizing system
		performance and security by implementing proactive monitoring solutions, incident response
		procedures, and best practices for system hardening.
	</p>
	<p class="text-neutral-800 dark:text-neutral-300">
		My work in networking and security has involved configuring and managing enterprise-grade
		network infrastructure, including BGP, OSPF, and SDN solutions for multi-homed environments. I
		have implemented robust security measures, including role-based access control, network
		segmentation, and intrusion detection systems, while developing Zero Trust security frameworks
		that enforce least privilege access and multi-layered authentication methodologies.
	</p>
	<p class="text-neutral-800 dark:text-neutral-300">
		I am currently seeking employment opportunities in systems administration and cloud
		infrastructure, where I can leverage my expertise in large-scale deployments, automation, and
		security. My passion lies in designing and maintaining efficient, reliable, and secure systems
		that empower businesses and open-source initiatives alike. I thrive in environments that embrace
		innovation, collaboration, and continuous learning. If you are looking for a highly motivated,
		detail-oriented professional with a strong technical background in cloud computing and
		open-source technologies, I would love to connect and discuss potential opportunities.
	</p>

	<hr />

	<h2 class="mt-6 text-xl font-bold">Work Experience</h2>
	<div class="space-y-4">
		{#each experience as job}
			<div class="pb-4">
				<h3 class="text-lg font-bold">{job.title} - {job.company}</h3>
				<p class="text-neutral-400">{job.dates} ({job.location})</p>
				<ul class="mt-2 list-inside list-disc text-neutral-800 dark:text-neutral-300">
					{#each job.responsibilities as task}
						<li>{task}</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>

	<hr />
	<h2 class="mt-6 text-xl font-bold">Tools and Technologies</h2>

	<div class="mt-6 grid grid-cols-1 gap-12 md:grid-cols-4">
		<div class="col-span-2">
			<h3 class="font-bold">Infrastructure Tools</h3>
			<ul class="list-inside list-disc">
				{#each skills.tools as item}
					<li class="flex flex-row justify-between">
						<p>{item.name}</p>
						{#if item.skill > 2}
							<p class="font-bold text-green-500 hover:cursor-pointer hover:text-green-600">
								Proficient
							</p>
						{:else if item.skill == 2}
							<p class="font-bold text-yellow-500 hover:cursor-pointer hover:text-yellow-600">
								Intermediate
							</p>
						{:else}
							<p class="font-bold text-red-500 hover:cursor-pointer hover:text-red-600">Beginner</p>
						{/if}
					</li>
				{/each}
			</ul>
		</div>
		<div class="col-span-2">
			<h3 class="font-bold">Programming Languages</h3>
			<ul class="list-inside list-disc">
				{#each skills.languages as item}
					<li class="flex flex-row justify-between">
						<p>{item.name}</p>
						{#if item.skill > 2}
							<p class="font-bold text-green-500 hover:cursor-pointer hover:text-green-600">
								Proficient
							</p>
						{:else if item.skill == 2}
							<p class="font-bold text-yellow-500 hover:cursor-pointer hover:text-yellow-600">
								Intermediate
							</p>
						{:else}
							<p class="font-bold text-red-500 hover:cursor-pointer hover:text-red-600">Beginner</p>
						{/if}
					</li>
				{/each}
			</ul>
		</div>
	</div>
	<hr />
	<h2 class="mt-6 text-xl font-bold">Contact Me</h2>
	<p>
		Should you be interested in contacting me for business purposes you may use any of the contact
		methods below!
	</p>

	<div class="flex flex-row justify-center gap-12">
		<p>Email: <a href="mailto:owen@rummage.cc">owen@rummage.cc</a></p>
		<p>Phone: <a href="#">N/A</a></p>
	</div>
</div>
