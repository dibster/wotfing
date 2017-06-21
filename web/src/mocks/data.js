function testLogin() {
	return {
		id: 1234567,
		key: "ABCDEFGH",
		name: "Dib"
	};
}

function testFings() {
	return [
		{
			code: "qiwuey",
			timestamp: 1495352563,
			thumb: "https://content.screencast.com/users/Dashenhurst/folders/Jing/media/16fc91a8-1fe1-4e45-ab3f-9b9b0d82cb79/00001471.png",
			pic: "https://content.screencast.com/users/Dashenhurst/folders/Jing/media/16fc91a8-1fe1-4e45-ab3f-9b9b0d82cb79/00001471.png",
			categories: [],
			places: ["kitchen"],
			notify: 12
		},
		{
			code: "qiwue2",
			timestamp: 1495006963,
			thumb: "https://content.screencast.com/users/Dashenhurst/folders/Jing/media/9fc86baf-8a5e-477e-a1af-b614fe5838aa/00001473.png",
			pic: "https://content.screencast.com/users/Dashenhurst/folders/Jing/media/9fc86baf-8a5e-477e-a1af-b614fe5838aa/00001473.png",
			categories: [],
			places: ["kitchen"],
			notify: 14
		}
	];
}

export { testLogin, testFings };
