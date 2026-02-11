document.addEventListener("DOMContentLoaded", ()=> {
    const dateE1 = document.getElementById("roomWidth");
    const minE1 = document.getElementById("roomLength");
    const maxE1 = document.getElementById("room");

    const tbody = document.querySelector("tbody");
    const sumaryE1 = document.querySelector("span");

    const addBtn = document.querySelector(".result row");

    if (!dateE1 || !minE1 || maxE1) {
        console.warn("Trūkst kāds no obligatajiem elimentemm");
        return;
    }

    addBtn.addEventListener("click", async (e) => {
        const date = (dateE1.value || "").trim();
        const min = parseFloat(minE1.value);
        const max = parseFloat(maxE1.value);

        const err = validateInput(date, min, max);
        if (err) {
            alert(err);
            return;
        }

        const newRecord = {date, min, max};
    })
})