const contenido = document.querySelector('.main-container__content')
		
document.querySelector('.button--click').addEventListener('click', () => {
	fetch('https://randomuser.me/api/')
	.then( res => res.json() )
	.then( data => {
		const date = new Date(data.results[0].dob.date);
		const dateFull = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
		contenido.innerHTML = `
			<div class="thumbnail">
				<img src="${data.results[0].picture.large}" alt="">
			</div>
			<div class="row row-detail">
				<div class="col-lg-6">
					<span>Hi, My name is</span>
					<h3>${data.results[0].name.first} ${data.results[0].name.last}</h3>
				</div>
				<div class="col-lg-6">
					<span>My email address is</span>
					<h3>${data.results[0].email}</h3>
				</div>
				<div class="col-lg-6">
					<span>My birthday is</span>
					<h3>${dateFull}</h3>
				</div>
				<div class="col-lg-6">
					<span>My address is</span>
					<h3>${data.results[0].location.street.number} ${data.results[0].location.street.name}</h3>
				</div>
				<div class="col-lg-6">
					<span>My phone number is</span>
					<h3>${data.results[0].phone}</h3>
				</div>
				<div class="col-lg-6">
					<span>My Country</span>
					<h3>${data.results[0].location.country}</h3>
				</div>
			</div>
		`
	})
})