<script>
	import CarbonEmail from '~icons/carbon/email';
	import CarbonLogoGithub from '~icons/carbon/logo-github';
	import CarbonLogoLinkedin from '~icons/carbon/logo-linkedin';
	import CarbonLogoInstagram from '~icons/carbon/logo-instagram';
	import CarbonCamera from '~icons/carbon/camera';
	import CarbonHashtag from '~icons/carbon/hashtag';
</script>

<div class="flex flex-col gap-3 justify-around">
	<div class="flex flex-row flex-wrap gap-3 justify-center lg:justify-start">
		<a
			href="mailto:code@franciswibisono.com"
			target="_blank"
			rel="noreferrer"
			aria-label="Send email"
			class="retro-icon-link p-2.5"
		>
			<CarbonEmail class="h-6 w-6" />
		</a>
		<a
			href="https://www.github.com/fwibisono87"
			target="_blank"
			rel="noreferrer"
			aria-label="Open GitHub"
			class="retro-icon-link p-2.5"
		>
			<CarbonLogoGithub class="h-6 w-6" />
		</a>
		<a
			href="https://www.linkedin.com/in/francis-wibisono/"
			target="_blank"
			rel="noreferrer"
			aria-label="Open LinkedIn"
			class="retro-icon-link p-2.5"
		>
			<CarbonLogoLinkedin class="h-6 w-6" />
		</a>
		<a
			href="https://www.instagram.com/fwibisono87"
			target="_blank"
			rel="noreferrer"
			aria-label="Open Instagram"
			class="retro-icon-link p-2.5"
		>
			<CarbonLogoInstagram class="h-6 w-6" />
		</a>
	</div>
	<div class="flex flex-row flex-wrap gap-3 justify-center lg:justify-start">
		<a href="/photos" rel="noreferrer" aria-label="Open photos" class="retro-icon-link p-2.5">
			<CarbonCamera class="h-6 w-6" />
		</a>
		<a
			href="/hashtag"
			rel="noreferrer"
			aria-label="Open hashtag helper"
			class="retro-icon-link p-2.5"
		>
			<CarbonHashtag class="h-6 w-6" />
		</a>
	</div>
</div>
