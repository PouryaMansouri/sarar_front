import React from "react";

function InstagramPart() {
  return (
    <section
      className="pb-8 mt-10 mb-10 instagram-section pt-7 "
      data-animation-options="{
                        'delay': '.2s',
                        'duration': '.5s'
                    }"
    >
      <h2 className="title title-simple">Our Instagram</h2>
      <div
        className="owl-carousel owl-theme row cols-xl-5 cols-lg-4 cols-sm-3 cols-2"
        data-owl-options="{
                            'items': 5,
                            'nav': false,
                            'dots': false,
                            'margin': 20,
                            'autoplay': true,
                            'responsive': {
                                '0': {
                                    'items': 2
                                },
                                '576': {
                                    'items': 3
                                },
                                '992': {
                                    'items': 4
                                },
                                '1200': {
                                    'items': 5
                                }
                            }
                        }"
      >
        <figure className="instagram">
          <a href="#">
            <img
              src="images/demos/demo2/instagram/1.jpg"
              alt="Instagram"
              width={220}
              height={220}
            />
          </a>
        </figure>
        <figure className="instagram">
          <a href="#">
            <img
              src="images/demos/demo2/instagram/2.jpg"
              alt="Instagram"
              width={220}
              height={220}
            />
          </a>
        </figure>
        <figure className="instagram">
          <a href="#">
            <img
              src="images/demos/demo2/instagram/3.jpg"
              alt="Instagram"
              width={220}
              height={220}
            />
          </a>
        </figure>
        <figure className="instagram">
          <a href="#">
            <img
              src="images/demos/demo2/instagram/4.jpg"
              alt="Instagram"
              width={220}
              height={220}
            />
          </a>
        </figure>
        <figure className="instagram">
          <a href="#">
            <img
              src="images/demos/demo2/instagram/5.jpg"
              alt="Instagram"
              width={220}
              height={220}
            />
          </a>
        </figure>
      </div>
    </section>
  );
}

export default InstagramPart;
