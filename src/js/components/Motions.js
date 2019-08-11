import React, {Component} from "react";
import { TweenMax, TimelineLite} from "gsap/TweenMax"
import ScrollMagic from 'ScrollMagic';
// import '../../../node_modules/scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
//all the css animations need gsap as dependency
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';

class Motions extends Component {
  constructor(props) {
    super(props);
    this.controller = new ScrollMagic.Controller();
  }

  componentDidMount() {
    new ScrollMagic.Scene({
      triggerElement: "#scrollStarts",
      duration: 400, // scroll distance
      offset: 200 // start this scene after scrolling for 50px
    })
      .setTween("#myElement", {
        scale: 0.5,
        color: "red"
      })
      .setPin("#myElement") // pins the element for the the scene's duration
      .addTo(this.controller); // assign the scene to the controller
  }

  render() {
    return (
      <>
        <div style={{ height: "500px", background: "orange" }}>
          Space before Scroll!
        </div>
        <div id="scrollStarts">
          Scrolling animation starts when this is in the middle ------->
        </div>
        <div style={{ height: "600px", background: "yellow" }}>
          <div
            id="wrapper"
            style={{ height: "800px", background: "lightgreen" }}
          >
            <h1 id="myElement">Hiiiiiii</h1>
          </div>
        </div>
      </>
    );
  }
}
export default Motions;

