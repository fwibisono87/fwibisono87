<script lang="ts">
	import Modal from '../components/modal.svelte';
	import CarbonCalendar from '~icons/carbon/calendar';
	import CarbonFolder from '~icons/carbon/folder';
	import CarbonIdea from '~icons/carbon/idea';
	import CarbonLaunch from '~icons/carbon/launch';

	type Tech = {
		desc: string;
		title: string;
		img: string;
		url: string;
		lastUsed?: string;
		projects?: string[];
		whyILike?: string;
	};

	export let tech: Tech;

	let showModal = false;

	const handleToggleModal = () => {
		showModal = !showModal;
	};

	const hasProjects = (projects?: string[]): projects is string[] => {
		return Array.isArray(projects) && projects.length > 0;
	};
</script>

<div class="w-full">
	<button
		type="button"
		class="group retro-card flex h-full min-h-[10rem] w-full flex-col items-center justify-center gap-3 px-3 py-4 text-center transition duration-200 hover:-translate-y-1 focus-visible:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8fd0ff]/70"
		title={tech.title}
		on:click={handleToggleModal}
		aria-label={`Open ${tech.title} details`}
	>
		<div class="flex h-16 w-16 items-center justify-center">
			<img
				src={tech.img}
				class="mx-auto my-auto max-h-16 max-w-16 sepia transition duration-300 group-hover:sepia-0 group-focus-visible:sepia-0"
				alt={tech.title}
			/>
		</div>
		<span class="text-sm font-semibold uppercase tracking-[0.08em] text-slate-100"
			>{tech.title}</span
		>
	</button>
	<Modal title={tech.title} open={showModal} on:close={handleToggleModal}
		><svelte:fragment slot="body">
			<div class="flex flex-col gap-4 text-slate-200">
				<div class="flex flex-col items-center gap-4 sm:flex-row sm:items-start sm:gap-6">
					<img src={tech.img} alt={tech.title} class="my-auto max-h-24 w-24" />
					<div class="flex flex-col gap-3">
						<p class="text-left leading-relaxed">
							{@html tech.desc}
						</p>
						{#if tech.url}
							<a
								class="retro-button inline-flex w-fit items-center gap-2 px-3 py-2 text-sm font-medium"
								href={tech.url}
								target="_blank"
								rel="noreferrer"
							>
								<CarbonLaunch class="h-4 w-4" />
								Open Official Site
							</a>
						{/if}
					</div>
				</div>

				{#if tech.lastUsed || hasProjects(tech.projects) || tech.whyILike}
					<div class="retro-divider mt-1" />
				{/if}

				{#if tech.lastUsed}
					<section class="retro-card px-4 py-3">
						<p
							class="inline-flex items-center gap-2 font-mono text-[0.66rem] uppercase tracking-[0.12em] text-[#a3d6ff]"
						>
							<CarbonCalendar class="h-4 w-4" />
							Last Used
						</p>
						<p class="mt-2 text-sm text-slate-100 sm:text-base">{tech.lastUsed}</p>
					</section>
				{/if}

				{#if hasProjects(tech.projects) || tech.whyILike}
					<section class="retro-card overflow-hidden">
						<div class="grid gap-px bg-[#5f86bd]/35 sm:grid-cols-2">
							{#if hasProjects(tech.projects)}
								<div class="bg-[#091b3f]/85 px-4 py-4">
									<p
										class="inline-flex items-center gap-2 font-mono text-[0.66rem] uppercase tracking-[0.12em] text-[#a3d6ff]"
									>
										<CarbonFolder class="h-4 w-4" />
										Projects
									</p>
									<ul class="mt-3 space-y-1.5 text-sm text-slate-100">
										{#each tech.projects as projectName}
											<li class="flex items-start gap-2">
												<span class="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[#8bc6ff]/80" />
												<span class="leading-relaxed">{projectName}</span>
											</li>
										{/each}
									</ul>
								</div>
							{/if}

							{#if tech.whyILike}
								<div class="bg-[#081936]/85 px-4 py-4">
									<p
										class="inline-flex items-center gap-2 font-mono text-[0.66rem] uppercase tracking-[0.12em] text-[#a3d6ff]"
									>
										<CarbonIdea class="h-4 w-4" />
										Why I Like It
									</p>
									<p
										class="mt-3 border-l-2 border-[#7eb9ff]/70 pl-3 text-sm leading-relaxed text-slate-200"
									>
										{tech.whyILike}
									</p>
								</div>
							{/if}
						</div>
					</section>
				{/if}
			</div>
		</svelte:fragment></Modal
	>
</div>
