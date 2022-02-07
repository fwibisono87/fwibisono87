<script>
	export let direction = 'flex-row';
	export let addClass = '';
	export let size = '6';
	const links = [
		{
			name: 'Email',
			icon: '/img/email.svg',
			link: 'mailto:fws8787@gmail.com'
		},
		{
			name: 'Instagram',
			icon: '/img/instagram.svg',
			link: 'https://www.instagram.com/fwibisono87'
		},
		{
			name: 'Gitlab',
			icon: '/img/gitlab.svg',
			link: 'https://gitlab.com/fwibisono87'
		},
		{
			name: 'Github',
			icon: '/img/github.svg',
			link: 'https://github.com/fwibisono87'
		},
		{
			name: 'LinkedIn',
			icon: '/img/linkedin.svg',
			link: 'https://www.linkedin.com/in/francis-wibisono/'
		}
	];
</script>

<template>
	<div class="flex {direction} {addClass} gap-4 justify-evenly">
		{#each links as link}
			<a href={link.link}>
				<img src={link.icon} class="w-{size} h-{size}" alt={link.name} />
			</a>
		{/each}
	</div>
</template>
