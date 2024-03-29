
export default {};

export const plays = [];

export const config = {
    'pieces':{
        'peao':{
            name:"peao",
            cordinates:{
                a:{
                    x:[0,1,2,3,4,5,6,7],
                    y:[6,6,6,6,6,6,6,6]
                },
                b:{
                    x:[0,1,2,3,4,5,6,7],
                    y:[1,1,1,1,1,1,1,1]
                }
            },
            images:{
                a:'./assets/peaoA.png',
                b:'./assets/peaoB.png'
            }
        },
        'torre':{
            name:"torre",
            cordinates:{
                a:{
                    x:[7,0],
                    y:[7,7]
                },
                b:{
                    x:[0,7],
                    y:[0,0]
                },
            },
            images:{
                a:'./assets/torreA.png',
                b:'./assets/torreB.png'
            }
        },
        'cavalo':{
            name:"cavalo",
            cordinates:{
                a:{
                    x:[1,6],
                    y:[7,7]
                },
                b:{
                    x:[1,6],
                    y:[0,0]
                },
            },
            images:{
                a:'./assets/cavaloA.png',
                b:'./assets/cavaloB.png'
            }
        },
        'bispo':{
            name:"bispo",
            cordinates:{
                a:{
                    x:[2,5],
                    y:[7,7]
                },
                b:{
                    x:[2,5],
                    y:[0,0]
                },
            },
            images:{
                a:'./assets/bispoA.png',
                b:'./assets/bispoB.png'
            }
        },
        'rainha':{
            name:"rainha",
            cordinates:{
                a:{
                    x:[3],
                    y:[7]
                },
                b:{
                    x:[3],
                    y:[0]
                },
            },
            images:{
                a:'./assets/rainhaA.png',
                b:'./assets/rainhaB.png'
            }
        },
        'rei':{
            name:"rei",
            cordinates:{
                a:{
                    x:[4],
                    y:[7]
                },
                b:{
                    x:[4],
                    y:[0]
                },
            },
            images:{
                a:'./assets/reiA.png',
                b:'./assets/reiB.png'
            }
        }
    }
}


// export const movements = {
//     "peao": (piece) => {
//         if(piece)
//         return {
//             x:piece.size + piece.x,
//             y:y
//         };
//     }
// }