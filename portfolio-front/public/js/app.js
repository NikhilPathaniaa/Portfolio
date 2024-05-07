
// mobile view dark to light function

    function darkToLight() {
    $(window).on("load", function () {
      var themeToggleDarkIcon = document.getElementById(
        "theme-toggle-dark-icon"
      );
      var themeToggleLightIcon = document.getElementById(
        "theme-toggle-light-icon"
      );
      var themeToggleBtn = document.getElementById("theme-toggle");
      // Change the icons inside the button based on previous settings
      if (
        localStorage.getItem("color-theme") === "dark" ||
        (!("color-theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        themeToggleLightIcon?.classList?.remove("hidden");
      } else {
        themeToggleDarkIcon?.classList?.remove("hidden");
      }
      themeToggleBtn?.addEventListener("click", function () {
        // toggle icons inside button

        themeToggleDarkIcon.classList.toggle("hidden");
        themeToggleLightIcon.classList.toggle("hidden");

        // if set via local storage previously

        if (localStorage.getItem("color-theme")) {
          if (localStorage.getItem("color-theme") === "light") {
            document.documentElement.classList.add("dark");
            localStorage.setItem("color-theme", "dark");
          } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("color-theme", "light");
          }

          // if NOT set via local storage previously
        } else {
          if (document.documentElement.classList.contains("dark")) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("color-theme", "light");
          } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("color-theme", "dark");
          }
        }
      });
    });
  }  
// set dark theme for home one

    function setDark () {
      $(window).on("load", function () {
        const darkButton = document.getElementById("dark");
        var themeToggleDarkIcon = document.getElementById(
          "theme-toggle-dark-icon"
        );
        var themeToggleLightIcon = document.getElementById(
          "theme-toggle-light-icon"
        );
        // set dark mode
        darkButton?.addEventListener("click", () => {
          console.log("Dark clicked");
          themeToggleLightIcon?.classList.remove("hidden");
          themeToggleDarkIcon?.classList.add("hidden");
          // if set via local storage previously
          if (localStorage.getItem("color-theme")) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("color-theme", "dark");

            // if NOT set via local storage previously
          } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("color-theme", "dark");
          }
        });
      });
    }

    // set light theme for home one

     function setLite () {
      $(window).on("load", function () {
        const lightButton = document.getElementById("light");
        var themeToggleDarkIcon = document.getElementById(
          "theme-toggle-dark-icon"
        );
        var themeToggleLightIcon = document.getElementById(
          "theme-toggle-light-icon"
        );
        lightButton?.addEventListener("click", () => {
          console.log("light clicked");
          themeToggleDarkIcon?.classList.remove("hidden");
          themeToggleLightIcon?.classList.add("hidden");
          // if set via local storage previously
          if (localStorage.getItem("color-theme")) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("color-theme", "light");

            // if NOT set via local storage previously
          } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("color-theme", "light");
          }
        });
      });
    }

    // dark to light function for mobile devices

    function darkToLightMobile () {
      $(window).on("load", function () {
        var themeToggleDarkIconMobile = document.getElementById(
          "theme-toggle-dark-icon-mobile"
        );
        var themeToggleLightIconMobile = document.getElementById(
          "theme-toggle-light-icon-mobile"
        );
        var themeToggleBtnMobile = document.getElementById(
          "theme-toggle-mobile"
        );
        // Change the icons inside the button based on previous settings
        if (
          localStorage.getItem("color-theme") === "dark" ||
          (!("color-theme" in localStorage) &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
          themeToggleLightIconMobile?.classList?.remove("hidden");
        } else {
          themeToggleDarkIconMobile?.classList?.remove("hidden");
        }
        themeToggleBtnMobile?.addEventListener("click", function () {
          // toggle icons inside button
          themeToggleDarkIconMobile.classList.toggle("hidden");
          themeToggleLightIconMobile.classList.toggle("hidden");

          // if set via local storage previously
          if (localStorage.getItem("color-theme")) {
            if (localStorage.getItem("color-theme") === "light") {
              document.documentElement.classList.add("dark");
              localStorage.setItem("color-theme", "dark");
            } else {
              document.documentElement.classList.remove("dark");
              localStorage.setItem("color-theme", "light");
            }

            // if NOT set via local storage previously
          } else {
            if (document.documentElement.classList.contains("dark")) {
              document.documentElement.classList.remove("dark");
              localStorage.setItem("color-theme", "light");
            } else {
              document.documentElement.classList.add("dark");
              localStorage.setItem("color-theme", "dark");
            }
          }
        });
      });
    }
