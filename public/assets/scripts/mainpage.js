// Находим кнопку и блок с подробностями по их идентификаторам
const showDetailsBtn = document.getElementById("showDetailsBtn");
const detailsBlock = document.getElementById("detailsBlock");

// Добавляем обработчик события клика по кнопке
showDetailsBtn.addEventListener("click", function () {
    // Переключаем класс для изменения видимости блока с подробностями
    detailsBlock.classList.toggle("filter__hidden");
});

const btn = document.querySelector(".filter__filter__btn");
const modal = document.querySelector(".filter__modal-window-box");
const sort_btn = document.querySelector(".filter__modal_sort");
const sort_modal = document.querySelector(".filter__modal_sort_window");
const sort_button_pointer = document.querySelector(".filter__modal_sort");

btn.addEventListener("click", () => {
    modal.classList.toggle("filter__modal-window-box_active");
});

sort_btn.addEventListener("click", () => {
    sort_modal.classList.toggle("filter__modal_sort_window_active");
    sort_button_pointer.classList.toggle("filter__modal_sort_active");
});

document
    .querySelectorAll(".filter__menu-section__row_sort")
    .forEach((container) => {
        let isDown = false;
        let startX;
        let scrollLeft;

        container.addEventListener("mousedown", (e) => {
            isDown = true;
            container.classList.add("active");
            startX = e.pageX - container.offsetLeft;
            scrollLeft = container.scrollLeft;
        });

        container.addEventListener("mouseleave", () => {
            isDown = false;
            container.classList.remove("active");
        });

        container.addEventListener("mouseup", () => {
            isDown = false;
            container.classList.remove("active");
        });

        container.addEventListener("mousemove", (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - container.offsetLeft;
            const walk = (x - startX) * 3;
            container.scrollLeft = scrollLeft - walk;
        });
    });

    const datesContainer = document.querySelector(".filter__modal_window_dates");

    document.addEventListener("DOMContentLoaded", function() {
        const datesContainer = document.querySelector(".filter__modal_window_dates_container");
    
        if (datesContainer) {
            let isDown = false;
            let startX;
            let scrollLeft;
    
            datesContainer.addEventListener("mousedown", (e) => {
                isDown = true;
                startX = e.pageX - datesContainer.offsetLeft;
                scrollLeft = datesContainer.scrollLeft;
            });
    
            datesContainer.addEventListener("mouseleave", () => {
                isDown = false;
            });
    
            datesContainer.addEventListener("mouseup", () => {
                isDown = false;
            });
    
            datesContainer.addEventListener("mousemove", (e) => {
                if (!isDown) return;
                e.preventDefault();
                const x = e.pageX - datesContainer.offsetLeft;
                const walk = (x - startX) * 3;
                datesContainer.scrollLeft = scrollLeft - walk;
            });
    
            datesContainer.addEventListener("wheel", (e) => {
                e.preventDefault();
                const delta = Math.max(-1, Math.min(1, (e.deltaY || -e.detail)));
                datesContainer.scrollLeft -= delta * 40;
            });
        }
    });
    