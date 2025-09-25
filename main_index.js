function toggleDropdown() {
            const dropdown = document.getElementById("dropdownOptions");
            dropdown.style.display = dropdown.style.display === "flex" ? "none" : "flex";
        }

        function openForm(type) {
            document.getElementById("postFormContainer").classList.remove("hidden");
            document.getElementById("formTitle").innerText = `Post ${type === 'lost' ? 'Lost' : 'Found'} Item`;
            document.getElementById("postItemForm").dataset.type = type;
            document.getElementById("dropdownOptions").style.display = "none";
        }

        function closeForm() {
            document.getElementById("postFormContainer").classList.add("hidden");
            document.getElementById("postItemForm").reset();
        }

        document.getElementById("postItemForm").addEventListener("submit", function (e) {
            e.preventDefault();

            const form = e.target;
            const type = form.dataset.type;
            const name = form.itemName.value;
            const desc = form.description.value;
            const question = form.question.value;
            const itemType = form.itemType.value;
            const imageFile = form.image.files[0];

            const date=new Date().toLocaleDateString()
            const time=new Date().toLocaleTimeString()

            const reader = new FileReader();
            reader.onload = function (event) {
                const card = document.createElement("div");
                card.className = "card";
                card.innerHTML = `
                   ${imageFile ? `<img src="${event.target.result}" alt="Uploaded Image">` : ""}
                   <h3>${name} (${type})</h3>
                   <p><strong>Type:</strong> ${itemType}</p>
                   <p><strong>Description:</strong> ${desc}</p>
                   <p><strong>Question:</strong> ${question}</p>
                   <p><strong>Date posted:</strong> ${date} ${time}</p>
            
                `;       
                //
                if(type==='lost'){
                  document.querySelector("#lost-item-list").appendChild(card);
                }else if(type==='found'){
                    document.querySelector("#found-item-list").appendChild(card);
                }
                // document.getElementById("itemsContainer").appendChild(card);
                closeForm();
            };

            if (imageFile) {
                reader.readAsDataURL(imageFile);
            } else {
                reader.onload({ target: { result: "" } });
            }
        });
