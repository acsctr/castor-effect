document.addEventListener("DOMContentLoaded", function () {
    let options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
    };

    let callback = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.animate([
                    { transform: 'translate(-50px)', opacity: 0 },
                    { transform: 'translate(0px)', opacity: 1 }
                ],
                    {
                        duration: 800
                    })
                observer.unobserve(entry.target);
            };
        });
    };

    let observer = new IntersectionObserver(callback, options);
    let target = document.querySelector("#castor");
    if (target != undefined) {
        observer.observe(target);
    }
});