document.addEventListener("DOMContentLoaded", function () {


    /* =========================================
       MOBILE MENU
    ========================================= */

    const menuToggle =
        document.getElementById("menuToggle");

    const sidebar =
        document.getElementById("sidebar");


    if (menuToggle && sidebar) {

        menuToggle.addEventListener(
            "click",
            function () {

                const isOpen =
                    sidebar.classList.toggle(
                        "mobile-open"
                    );


                menuToggle.setAttribute(
                    "aria-expanded",
                    isOpen
                );


                menuToggle.textContent =
                    isOpen ? "✕" : "☰";

            }
        );


        const navLinks =
            sidebar.querySelectorAll(
                ".nav-link"
            );


        navLinks.forEach(function (link) {

            link.addEventListener(
                "click",
                function () {

                    sidebar.classList.remove(
                        "mobile-open"
                    );


                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );


                    menuToggle.textContent = "☰";

                }
            );

        });

    }



    /* =========================================
       THEME
    ========================================= */

    const themeToggle =
        document.getElementById(
            "themeToggle"
        );


    const themeToggleMobile =
        document.getElementById(
            "themeToggleMobile"
        );


    function updateThemeIcon() {

        const isLight =
            document.body.classList.contains(
                "light-mode"
            );


        if (themeToggle) {

            themeToggle.textContent =
                isLight ? "☀" : "☾";

        }


        if (themeToggleMobile) {

            themeToggleMobile.textContent =
                isLight ? "☀" : "☾";

        }

    }


    function toggleTheme() {

        document.body.classList.toggle(
            "light-mode"
        );


        const isLight =
            document.body.classList.contains(
                "light-mode"
            );


        localStorage.setItem(
            "portfolio-theme",
            isLight ? "light" : "dark"
        );


        updateThemeIcon();

    }


    if (themeToggle) {

        themeToggle.addEventListener(
            "click",
            toggleTheme
        );

    }


    if (themeToggleMobile) {

        themeToggleMobile.addEventListener(
            "click",
            toggleTheme
        );

    }


    const savedTheme =
        localStorage.getItem(
            "portfolio-theme"
        );


    if (savedTheme === "light") {

        document.body.classList.add(
            "light-mode"
        );

    }


    updateThemeIcon();



    /* =========================================
       PROJECT YEAR FILTER
    ========================================= */

    const yearFilters =
        document.querySelectorAll(
            ".year-filter"
        );


    const projectGroups =
        document.querySelectorAll(
            ".filter-group"
        );


    const noProjects =
        document.getElementById(
            "noProjects"
        );


    if (
        yearFilters.length &&
        projectGroups.length
    ) {

        yearFilters.forEach(function (filter) {

            filter.addEventListener(
                "click",
                function () {

                    const selectedYear =
                        filter.dataset.year;


                    /* Update active button */

                    yearFilters.forEach(
                        function (button) {

                            button.classList.remove(
                                "active"
                            );

                        }
                    );


                    filter.classList.add(
                        "active"
                    );


                    /* Show / hide years */

                    let visibleGroups = 0;


                    projectGroups.forEach(
                        function (group) {

                            const groupYear =
                                group.dataset.yearGroup;


                            if (
                                selectedYear === "all" ||
                                selectedYear === groupYear
                            ) {

                                group.style.display =
                                    "block";

                                visibleGroups++;

                            } else {

                                group.style.display =
                                    "none";

                            }

                        }
                    );


                    /* No results */

                    if (noProjects) {

                        noProjects.style.display =
                            visibleGroups === 0
                                ? "block"
                                : "none";

                    }

                }
            );

        });

    }

});