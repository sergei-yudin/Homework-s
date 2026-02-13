const form = document.getElementById("form");
const send = document.getElementById("send");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const fileInput = document.getElementById("file");
    const file = fileInput.files[0];

    if (!file) {
        alert("Выберите файл!")
        return;
    }

    const formData = new FormData();
    formData.append("file", file);

    const progress = document.getElementById("progress");

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload");

    xhr.upload.addEventListener("progress", (e) => {
        if (e.lengthComputable) {
            const percent = e.loaded / e.total;
            progress.value = percent;
        }
    });



    xhr.addEventListener("load", (e) => {

        if (xhr.status === 200) {
            progress.value = 0;
        }
    })

    xhr.send(formData);

})