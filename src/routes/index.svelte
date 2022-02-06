<script>
	import Base from '../components/base.svelte';
</script>

<Base>
	<div slot="main" class="text-white mx-12">
		<div class="flex flex-col">
			<h1 class="font-extralight text-9xl">portfolio</h1>
			<div class="flex flex-row ">
				<Links direction="flex-col mr-12 ml-1" size="11" />
				<div class="flex flex-row">
					<div class="bg-stabilo text-black w-96 p-12">
						<h2 class="text-4xl mb-3">Meet Francis</h2>
						<p>
							I'm Francis, a computer science undergraduate student. Faculty of Computer Science,
							Universitas Indonesia
						</p>
					</div>
					<div class="mx-auto">
						<section>
							<img
								class="w-96 rounded-tr-[50%]"
								src="https://s3.ap-northeast-1.wasabisys.com/fws-public/website/francis.jpg"
							/>
						</section>
					</div>
				</div>
			</div>
		</div>
        <div class="flex flex-row">
            <h2 class="font-extralight text-9xl">education</h2>
        </div>
	</div>
</Base>
