window.onload = function () {
  lax.init();

  // Add a driver that we use to control our animations
  lax.addDriver("scrollY", function () {
    return window.scrollY;
  });

  // Add animation bindings to elements
  lax.addElements(".selector", {
    scrollY: {
      translateX: [
        ["elInY", "elCenterY", "elOutY"],
        [0, "screenWidth/2", "screenWidth"],
      ],
    },
  });

  lax.addElements(".presents", {
    scrollY: {
      "letter-spacing": [
        [0, "screenHeight"],
        [5, 150],
        {
          cssUnit: "px",
        },
      ],
      opacity: [
        ["screenHeight*0.25", "screenHeight*0.75"],
        [1, 0],
      ],
      translateX: [
        [0, "screenHeight"],
        [0, 80],
      ],
    },
  });
  lax.addElements(".letter-i", {
    scrollY: {
      translateY: [
        [-400, 0],
        [500, 0],
      ],
      translateX: [
        [0, "screenHeight"],
        [0, 400],
      ],
      opacity: [
        [0, "screenHeight/2"],
        [0, 1],
      ],
    },
  });
  lax.addElements(".letter-t", {
    scrollY: {
      translateY: [
        [-400, 0],
        [500, 0],
      ],
      translateX: [
        ["screenHeight", 0],
        [400, 800],
      ],
      opacity: [
        [0, "screenHeight/2"],
        [0, 1],
      ],
    },
  });

  lax.addElements(".letter-o", {
    scrollY: {
      translateY: [
        [-300, 0, 100],
        [300, 0, 100],
      ],
      scale: [
        [100, "screenHeight"],
        [0.25, 10],
      ],
      opacity: [
        [0, "screenHeight/2", "screenHeight"],
        [0, 1, 0],
      ],
    },
  });
};
