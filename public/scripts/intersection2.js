document.addEventListener("DOMContentLoaded", function () {
    let options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.3,
    };

    let callback = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.animate([
                    { transform: 'translate(-50px)', opacity: 0.5 },
                    { transform: 'translate(0px)', opacity: 1 }
                ],
                    {
                        duration: 900
                    })
                observer.unobserve(entry.target);
            };
        });
    };

    let observer = new IntersectionObserver(callback, options);
    let target2 = document.querySelector("#text-2");
    if (target2 != undefined) {
        observer.observe(target2);
    }

});