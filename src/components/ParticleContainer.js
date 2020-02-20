import React, {Component} from 'react';
import Particles from 'react-particles-js';


class ParticlesContainer extends Component {
render() {
    return ( 
        <Particles 
            params={
                {
                    "particles": {
                      "number": {
                        "value": 237,
                        "density": {
                          "enable": true,
                          "value_area": 631.3181133058181
                        }
                      },
                      "color": {
                        "value": "#4b0de1"
                      },
                      "shape": {
                        "type": "circle",
                        "stroke": {
                          "width": 0,
                          "color": "#000000"
                        },
                        "polygon": {
                          "nb_sides": 5
                        },
                        "image": {
                          "src": "img/github.svg",
                          "width": 100,
                          "height": 100
                        }
                      },
                      "opacity": {
                        "value": 0.5,
                        "random": false,
                        "anim": {
                          "enable": false,
                          "speed": 1,
                          "opacity_min": 0.1,
                          "sync": false
                        }
                      },
                      "size": {
                        "value": 3,
                        "random": true,
                        "anim": {
                          "enable": false,
                          "speed": 40,
                          "size_min": 0.1,
                          "sync": false
                        }
                      },
                      "line_linked": {
                        "enable": true,
                        "distance": 142.0465754938091,
                        "color": "#a7a4d2",
                        "opacity": 0.4,
                        "width": 1
                      },
                      "move": {
                        "enable": true,
                        "speed": 6.313181133058181,
                        "direction": "none",
                        "random": true,
                        "straight": false,
                        "out_mode": "bounce",
                        "bounce": false,
                        "attract": {
                          "enable": false,
                          "rotateX": 600,
                          "rotateY": 1200
                        }
                      }
                    },
                    "interactivity": {
                      "detect_on": "window",
                      "events": {
                        "onhover": {
                          "enable": false,
                          "mode": "repulse"
                        },
                        "onclick": {
                          "enable": true,
                          "mode": "push"
                        },
                        "resize": true
                      },
                      "modes": {
                        "grab": {
                          "distance": 400,
                          "line_linked": {
                            "opacity": 1
                          }
                        },
                        "bubble": {
                          "distance": 323.67632367632365,
                          "size": 27.972027972027973,
                          "duration": 3.276723276723277,
                          "opacity": 1,
                          "speed": 3
                        },
                        "repulse": {
                          "distance": 231.76823176823177,
                          "duration": 0.4
                        },
                        "push": {
                          "particles_nb": 4
                        },
                        "remove": {
                          "particles_nb": 2
                        }
                      }
                    },
                    "retina_detect": false
                  }
        } />
    )
}
}

export default ParticlesContainer;