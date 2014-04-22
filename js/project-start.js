// INITIALISATION OF THE FANCY BOX (LIVE BOX)
var api = jQuery('.megafolio-container').megafoliopro({
    filterChangeAnimation: "fade", // fade, rotate, scale, rotatescale, pagetop, pagebottom,pagemiddle
    filterChangeSpeed: 600, // Speed of Transition
    filterChangeRotate: 10, // If you ue scalerotate or rotate you can set the rotation (99 = random !!)
    filterChangeScale: 0.6, // Scale Animation Endparameter
    delay: 20,
    defaultWidth: 980,
    paddingHorizontal: 10,
    paddingVertical: 10,
    layoutarray: [6] // Defines the Layout Types which can be used in the Gallery. 2-9 or "random". You can define more than one, like {5,2,6,4} where the first items will be orderd in layout 5, the next comming items in layout 2, the next comming items in layout 6 etc... You can use also simple {9} then all item ordered in Layout 9 type.

});