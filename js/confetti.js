// import { tsParticles } from "tsparticles-engine";

console.log("confetti.js entrance")

document.addEventListener('DOMContentLoaded', function() {
    // // Initialize tsParticles without using an emitter initially
    // tsParticles.load("tsparticles", {
    //     fullScreen: { enable: true },
    //     particles: {
    //         number: { value: 0 },
    //         color: { value: ["#ff0000", "#00ff00", "#0000ff"] },
    //         shape: { type: ["circle", "square"] },
    //         size: { value: { min: 5, max: 10 } },
    //         move: {
    //             enable: true,
    //             speed: { min: 10, max: 30 },
    //             outModes: { default: "destroy" }
    //         },
    //         opacity: {
    //             value: { min: 0, max: 1 },
    //             animation: {
    //                 enable: true,
    //                 speed: 0.5,
    //                 startValue: "max",
    //                 destroy: "min"
    //             }
    //         },
    //         life: {
    //             duration: {
    //                 sync: true,
    //                 value: 2
    //             }
    //         }
    //     },
    //     detectRetina: true,
    // });

    // document.addEventListener("click", function(event) {
    //     console.log("clicked")
    //     const particles = tsParticles.domItem(0);
    //     console.log(particles)
    //     // Add particles at the click position
    //     particles.particles.addParticle({
    //         position: { x: event.clientX, y: event.clientY },
    //         color: { value: ["#ff0000", "#00ff00", "#0000ff"] },
    //         shape: { type: ["circle", "square"] },
    //         size: { value: { min: 5, max: 10 } },
    //         move: {
    //             enable: true,
    //             speed: { min: 10, max: 30 },
    //             outModes: { default: "destroy" }
    //         },
    //         opacity: {
    //             value: { min: 0, max: 1 },
    //             animation: {
    //                 enable: true,
    //                 speed: 0.5,
    //                 startValue: "max",
    //                 destroy: "min"
    //             }
    //         },
    //         life: {
    //             duration: {
    //                 sync: true,
    //                 value: 2
    //             }
    //         }
    //     });
    // });



    tsParticles.load({
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "emitter"
            }
          },
          modes: {
            emitters: {
              direction: "random",
              spawnColor: {
                value: ["#FF0000"],// change color
                animation: {
                  h: {
                    enable: true,
                    offset: {
                      min: -1.4,
                      max: 1.4
                    },
                    speed: 2,
                    sync: false
                  },
                  l: {
                    enable: true,
                    offset: {
                      min: 20,
                      max: 80
                    },
                    speed: 2,
                    sync: false
                  }
                }
              },
              life: {
                count: 1,
                duration: 0.1,
                delay: 0.6
              },
              rate: {
                delay: 0.1,
                quantity: 50
              },
              size: {
                width: 0,
                height: 0
              }
            }
          }
        },
        particles: {
          number: {
            value: 0
          },
          color: {
            value: ["#ff0000","#007B7B"]
          },
          shape: {
            type: ["circle", "square"],
            options: {}
          },
          opacity: {
            value: { min: 0, max: 1 },
            animation: {
              enable: true,
              speed: 7, // change disappear mode
              startValue: "max",
              destroy: "min"
            }
          },
          size: {
            value: { min: 2, max: 3 }
          },
          life: {
            count: 1,
            duration: {
                value: {
                    min: 1,
                    max: 10
                }
            }
          },
          move: {
            enable: true,
            gravity: {
              enable: true
            },
            drift: {
              min: -2,
              max: 2
            },
            speed: { min: 10, max: 20 },
            decay: 0.1,
            direction: "none",
            random: false,
            straight: false,
            outModes: {
              default: "destroy",
              top: "none"
            }
          },
          rotate: {
            value: {
              min: 0,
              max: 360
            },
            direction: "random",
            move: true,
            animation: {
              enable: true,
              speed: 60
            }
          },
          tilt: {
            direction: "random",
            enable: true,
            move: true,
            value: {
              min: 0,
              max: 360
            },
            animation: {
              enable: true,
              speed: 60
            }
          },
          roll: {
            darken: {
              enable: true,
              value: 25
            },
            enable: true,
            speed: {
              min: 15,
              max: 25
            }
          },
          wobble: {
            distance: 30,
            enable: true,
            move: true,
            speed: {
              min: -15,
              max: 15
            }
          }
        },
        detectRetina: true
      });
});
