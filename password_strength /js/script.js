
		
				function checkPasswordStrength() {
			const field = document.getElementById("field");
				const password = field.value;
				const sections = document.querySelectorAll(".strength-section");

				if (password === "") {
					sections.forEach(section => section.className = "strength-section gray");
			} else if (password.length < 8) {
					sections.forEach(section => section.className = "strength-section red");
			} else {
					let strength = 0;
				if (password.match(/[a-zA-Z]/)) strength++;
				if (password.match(/[0-9]/)) strength++;
				if (password.match(/[!@#$%^&*()\-_=+{ }[\]:;"'<>,.?/\\|~]/)) strength++;

					if (strength === 1) {
						sections[0].className = "strength-section red";
					sections[1].className = "strength-section gray";
					sections[2].className = "strength-section gray";
				} else if (strength === 2) {
						sections[0].className = "strength-section yellow";
					sections[1].className = "strength-section yellow";
					sections[2].className = "strength-section gray";
				} else {
						sections.forEach(section => section.className = "strength-section green");
				}
			}
		}
				