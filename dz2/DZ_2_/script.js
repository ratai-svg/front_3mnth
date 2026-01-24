const counters = document.querySelectorAll("[data-counter]");
if (counters) {
    counters.forEach((counter) => {
        counter.addEventListener("click", (event) => {
            const target = event.target;
            if (target.closest(".counter__button")) {
                let value = parseInt(
                    target.closest(".counter").querySelector("input").value
                );

                if (target.classList.contains("counter__button_plus")) {
                    value++;
                    target
                        .closest(".counter")
                        .querySelector("input")
                        .classList.add("plus");
                    target
                        .closest(".counter")
                        .querySelector("input")
                        .classList.remove("minus");
                } else {
                    if (value > 0) {
                        
                        value--;
                        target
                            .closest(".counter")
                            .querySelector("input")
                            .classList.add("minus");
                        target
                            .closest(".counter")
                            .querySelector("input")
                            .classList.remove("plus");
                    }
                }

                target.closest(".counter").querySelector("input").value = value;
            }
        });
    });
}
