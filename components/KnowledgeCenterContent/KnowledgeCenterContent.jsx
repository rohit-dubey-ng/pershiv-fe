import Image from "next/image";

const KnowledgeCenterContent = () => {
  return (
    <div className="AccreditationsDetails">
      <div className="container">
        <div className="row mt-150">
          <div className="col-lg-12">
            <div className="AccreditationsTab">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#home"
                    type="button"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    Windows
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#profile"
                    type="button"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    uPVC Doors & Windows
                  </button>
                </li>

                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#profile"
                    type="button"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    Aluminium Doors & Windows
                  </button>
                </li>

                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#profile"
                    type="button"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    Glass
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="WindowsDetails">
                    <p>
                      A window is defined as an opening in the wall above the
                      floor level, whose traditional function is to provide
                      natural light, ventilation and vision. With advancements
                      in technology the role of a window has broadened to
                      include insulation against outside noise, protection from
                      storms, prevent rain water seepage and reduce rising
                      energy costs. It also breaks the monotony of the walls and
                      adds to the overall aesthetics of your home. Windows come
                      in various shapes and styles, and the right kind of window
                      can change the look of your room, home or office.
                      <span> Choosing the right type of window </span>
                      for a particular location can be quite intimidating given
                      the different styles, features and materials available in
                      the market today. Here are a few things you need to know
                      when you plan to replace those old, creaky windows.
                    </p>
                  </div>

                  <div className="SlidingWindowsWrp">
                    <div className="SlideWrp">
                      <Image
                        src="/images/assets/window.jpg"
                        alt="Windows"
                        width={60}
                        height={60}
                      />

                      <h4>Sliding Windows</h4>
                    </div>

                    <p>
                      These windows have sashes that slightly overlap each
                      other, while moving on a fixed horizontal frame. These are
                      best suited for residential and commercial spaces where
                      space saving is a must. They offer convenience and space
                    </p>
                  </div>

                  <div className="SlidingWindowsWrp">
                    <div className="SlideWrp">
                      <Image
                        src="/images/assets/open-window.jpg"
                        alt="Windows"
                        width={60}
                        height={60}
                      />

                      <h4>Casement Windows</h4>
                    </div>

                    <p>
                      These windows have their sash hinged, which enables them
                      to swing in and out, just like a door. Once again, these
                      windows are very popular with residential plots.
                    </p>
                  </div>

                  <div className="SlidingWindowsWrp">
                    <div className="SlideWrp">
                      <Image
                        src="/images/assets/door.jpg"
                        alt="Windows"
                        width={60}
                        height={60}
                      />

                      <h4>Bay Windows</h4>
                    </div>

                    <p>
                      These windows protrude out of the main walls of a room,
                      creating a hollow bay. They are best suited for spacious
                      rooms with high ceilings that offer a good scenic view and
                      also add a touch of elegance to the room.
                    </p>
                  </div>

                  <div className="SlidingWindowsWrp">
                    <div className="SlideWrp">
                      <Image
                        src="/images/assets/open.jpg"
                        alt="Windows"
                        width={60}
                        height={60}
                      />

                      <h4>Tilt And Turn Windows</h4>
                    </div>

                    <p>
                      These windows can tilt inwards for protection against rain
                      and swing in like a casement window with the help of their
                      side hinges. They are best suited when you need the slight
                      ventilation but without the outside weather elements
                      affecting your home.
                    </p>
                  </div>

                  <div className="SlidingWindowsWrp">
                    <div className="SlideWrp">
                      <Image
                        src="/images/assets/center.jpg"
                        alt="Windows"
                        width={60}
                        height={60}
                      />

                      <h4>Combination Windows</h4>
                    </div>

                    <p>
                      These windows can tilt inwards for protection against rain
                      and swing in like a casement window with the help of their
                      side hinges. They are best suited when you need the slight
                      ventilation but without the outside weather elements
                      affecting your home.
                    </p>
                  </div>

                  <div className="SlidingWindowsWrp">
                    <div className="SlideWrp">
                      <Image
                        src="/images/assets/icon.jpg"
                        alt="Windows"
                        width={60}
                        height={60}
                      />

                      <h4>Fixed Windows</h4>
                    </div>

                    <p>
                      Fixed windows are those windows with no openings and these
                      are best in spaces where little or no extra ventilation is
                      required.
                    </p>
                  </div>

                  <div className="SlidingWindowsWrp">
                    <div className="SlideWrp">
                      <Image
                        src="/images/assets/slider.jpg"
                        alt="Windows"
                        width={60}
                        height={60}
                      />

                      <h4>Single And Double Hung Windows</h4>
                    </div>

                    <p>
                      Single hung windows are fixed at the top but the bottom
                      slides up and down like a traditional sash window. Double
                      hung windows on the other hand, have a fixed bottom but
                      can be opened at the top.
                    </p>
                  </div>

                  <div className="SlidingWindowsWrp">
                    <div className="SlideWrp">
                      <Image
                        src="/images/assets/knowledge.jpg"
                        alt="Windows"
                        width={60}
                        height={60}
                      />

                      <h4>Awning Windows</h4>
                    </div>

                    <p>
                      Similar to casement windows, these windows too have a
                      hinged sash, but the hinges are at the top. Understand
                      your space and then choose a window type best suited for
                      your requirement.
                    </p>
                  </div>

                  <div className="materialWrp">
                    <h6>FRAMING MATERIAL</h6>

                    <p>
                      Wood and aluminium which had been the predominant material
                      for constructing windows in the past have given way to
                      uPVC (Un-plasticised Poly Vinyl Chloride frames) - a
                      new-age material. Earlier, buildings were not constructed
                      keeping in mind expansion in the size of doors and windows
                      in summers, erosion during the monsoons and exposure to UV
                      radiation and aesthetics. <span>uPVC windows</span> have
                      changed all that and minimised the effect of these
                      unwelcome intrusions. Moreover, materials like uPVC are
                      low-maintenance, aesthetically attractive,
                      energy-efficient, come in a wide range of colours, do away
                      with the need to periodically paint the window and door
                      frames - and don't warp.
                    </p>
                  </div>

                  <div className="materialWrp">
                    <h6>COMPONENTS OF WINDOW</h6>

                    <p>Following are the main components of windows</p>

                    <div className="frameWrp">
                      <h6>Outer Frame</h6>

                      <p>
                        This is an immovable part of the window fixed into the
                        aperture that was built into the wall when house was
                        constructed
                      </p>
                    </div>

                    <div className="frameWrp">
                      <h6>Sash</h6>

                      <p>
                        This is typically an open-able part of the window,
                        although sometimes it can be fixed too (depending on the
                        requirement). It is used to hold the glass
                      </p>
                    </div>

                    <div className="frameWrp">
                      <h6>Trim</h6>

                      <p>
                        Usually used for covering the openings or the gaps
                        between window frame and the wall, a trim also doubles
                        up as a styling accessory for the window making it
                        visually more appealing. Trims can be applied to both
                        exterior and interior of the window
                      </p>
                    </div>

                    <div className="frameWrp">
                      <h6>Glazing</h6>

                      <p>
                        This is the glass portion of the window and is often
                        referred to as glazing. Two or three glasses can also be
                        combined together to improve thermal and sound
                        insulation. Different varieties of glasses are available
                        and you can choose the one that meets your requirements
                      </p>
                    </div>

                    <div className="frameWrp">
                      <h6>Transome</h6>

                      <p>
                        These are horizontal bars that divide the window's outer
                        frame
                      </p>
                    </div>

                    <div className="frameWrp">
                      <h6>Mullion</h6>

                      <p>
                        These are vertical bars that divide the window's outer
                        frame
                      </p>
                    </div>

                    <div className="frameWrp">
                      <h6>Midrail</h6>

                      <p>
                        It refers to the dividers (horizontal or vertical) in
                        window sash
                      </p>
                    </div>

                    <div className="frameWrp">
                      <h6>Sill</h6>

                      <p>
                        It is the horizontal part at the bottom of the window
                      </p>
                    </div>

                    <div className="frameWrp">
                      <h6>Grill</h6>

                      <p>
                        These are usually metal bars that are clamped inside the
                        window frame or onto the wall to protect against theft.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <div className="WindowsDetails">
                    <p>
                      One of the most versatile polymers found in the world is
                      PVC or Polyvinyl Chloride, and uPVC, a material that is
                      gaining more and more popularity by the day, is based on
                      this polymer. PVC is also one of the most commonly used
                      polymers that find application in almost all facets of our
                      life. It is known to be used in a range of fields, from
                      daily use to even a variety of life-saving equipment. PVC
                      offers a certain level of flexibility that makes it well
                      suited for several applications. Using a unique
                      formulation, this flexibility is leveraged to prepare a
                      special blend, uPVC, which is used in doors and windows as
                      well. The full form of 'U' in uPVC is unplasticised. The
                      uPVC material is used widely as a framing material because
                      of the presence of Unplasticised Polyvinyl Chloride in the
                      polymer; the term is also the widely accepted full form of
                      uPVC. As a framing material, uPVC offers unmatched
                      quality, requires very little maintenance and is available
                      in a number of colour options. With the numerous benefits
                      of uPVC doors and windows, uPVC has managed to garner a
                      50% market share in countries like the USA and UK. In
                      these countries, it is also known as vinyl siding or
                      vinyl.
                    </p>
                  </div>

                  <div className="WindowsBenifits">
                    <div className="BenifitWrp">
                      <h6>BENEFITS OF uPVC DOORS & WINDOWS:</h6>

                      <p>
                        What is best about <span>uPVC doors</span> and windows
                        is that their performance characteristics are unmatched.
                        There are several special characteristics that define
                        uPVC, meaning that their benefits too are significant:
                      </p>
                    </div>

                    <ul>
                      <li>IT REQUIRES LESS ENERGY DURING PRODUCTION</li>
                      <li>OFFERS RAIN INSULATION</li>
                      <li>IT IS RESISTANT TO CHEMICALS</li>
                      <li>HAS MANY COMMERCIAL APPLICATIONS</li>
                      <li>IT IS RECYCLABLE</li>
                      <li>OFFERS UV PROTECTION</li>
                      <li>REQUIRES NO PAINTING OR EXTRA MAINTENANCE</li>
                      <li>PROVIDES SOUND INSULATION</li>
                      <li>RESISTANT TO SALTWATER</li>
                      <li>CAN MATCH ALL ARCHITECTURAL REQUIREMENTS</li>
                      <li>OFFERS WIND INSULATION</li>
                      <li>HIGHLY RESISTANT TO IMPACT</li>
                      <li>IT IS ENVIRONMENT-FRIENDLY</li>
                      <li>PROTECTS AGAINST ENVIRONMENTAL INFLUENCES</li>
                      <li>IT IS FIRE-RETARDANT</li>
                      <li>OFFERS PROTECTION AGAINST INSECTS</li>
                    </ul>

                    <div className="BenifitWrp mt-20">
                      <h6>uPVC FORMULATION:</h6>

                      <p>
                        uPVC is prepared with a unique formulation that involves
                        the addition of stabilisers and modifiers to PVC. This
                        helps in making the polymer a bit more rigid, meaning
                        that uPVC can then be used in window and door frames as
                        well.
                      </p>
                    </div>

                    <div className="BenifitWrp mt-20">
                      <h6>PVC:</h6>

                      <p>
                        In the blend composition of the polymer, PVC forms a
                        major portion, which is approximately 80-85% Unlike the
                        other polymer, PVC is a heat-sensitive component and
                        requires some additives so it can be processed. This
                        polymer has versatile properties due to which it can
                        either be made as soft as rubber or as hard as
                        engineered plastics. This versatility of PVC is achieved
                        with additives, such as impact modifiers, fillers, UV
                        stabilisers, lubricants, pigments, processing aids,
                        plasticisers and more. All these are added to the
                        material during the blending process.
                      </p>
                    </div>

                    <div className="BenifitWrp mt-20">
                      <h6>STABILIZER - HEAT & LIGHT:</h6>

                      <p>
                        When it comes to formulating uPVC for doors and windows,
                        what is to be remembered is that PVC cannot be processed
                        alone as it is heat sensitive. So, a heat stabiliser is
                        used in to improve the stability of the polymer and make
                        it processable. Also, what is important for the uPVC
                        formulation is to use a sufficient amount of stabiliser
                        to prevent degradation of the PVC material. If there is
                        a lack of sufficient stabiliser used during the process,
                        it may lead to early discolouration of the material when
                        it is exposed to sunlight. Keeping in mind the harsh
                        climatic conditions and high temperatures experienced
                        during a major portion of the year, it is important for
                        the window or door profile to be able to endure the
                        continuous heat and UV. This is applicable for all
                        profiles that are used in the tropical zone. To make
                        sure that the profile is well-balanced, light
                        stabilisers should be used in a recommended dosage.
                      </p>
                    </div>

                    <div className="BenifitWrp mt-20">
                      <h6>PROCESSING AIDS:</h6>

                      <p>
                        Processing aids are generally acrylic-based materials
                        that help in enhancing the melt strength of the material
                        at the time of fusion. They also ensure that the profile
                        extrusion is smooth and that the material has a uniform
                        cross-section.
                      </p>
                    </div>

                    <div className="BenifitWrp mt-20">
                      <h6>IMPACT MODIFIER:</h6>

                      <p>
                        Polymers typically tend to get brittle on exposure to
                        lower temperatures or UV radiations. Impact modifiers
                        that are acrylic-based are used to ensure that the
                        profile retains its impact strength even after it is
                        exposed to a low temperature or to UV light. If the
                        profile receives an insufficient dosage or if a low-cost
                        impact modifier like CPE is used, it will lose its
                        impact resistance over time, becoming brittle and
                        cracking either at the time of fabrication,
                        installation, or operation.
                      </p>
                    </div>

                    <div className="BenifitWrp mt-20">
                      <h6>LUBRICANTS:</h6>

                      <p>
                        During the extrusion process, these additives are used
                        to help in manoeuvring the processability of PVC.
                        Insufficient or excessive use of lubricants can result
                        in defective products.
                      </p>
                    </div>

                    <div className="BenifitWrp mt-20">
                      <h6>PIGMENTS - TITANIUM DI-OXIDE:</h6>

                      <p>
                        Titanium Dioxide is quite expensive and is used as the
                        white pigment to impart a natural white colour to the
                        PVC profile. It provides much-needed UV stability to the
                        product, which enhances its durability over the years.
                        Also, the dosage of the pigments for PVC depends on the
                        amount of UV radiation in the region. Usually, the range
                        of pigment dosage is from 4 parts for climates like
                        Europe to 10 parts for the harsher climatic conditions
                        in places like India or Arizona. This pigment is also
                        known to provide opacity to products. Other organic and
                        inorganic pigments may also be used to add colour to
                        products but may not offer as much stability against UV.
                      </p>
                    </div>

                    <div className="BenifitWrp mt-20">
                      <h6>FILLERS:</h6>

                      <p>
                        Fillers are the inorganic minerals that are used in a
                        PVC blend. The usage of fillers in PVC enhances the
                        mechanical properties of PVC, like the impact strength
                        and tensile strength. If used in the right proportions,
                        they help increase the mechanical strength of the
                        product but if used in excess they can impair the
                        durability.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="tab-pane fade"
                  id="profile-tab"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <div className="WindowsBenifits">
                    <div className="BenifitWrp">
                      <h6>OVERVIEW:</h6>

                      <p>
                        Aluminium is one of the most popular fenestration
                        materials that are being used in the manufacture of
                        modern windows and doors, thanks to its high strength to
                        density ratio and lightweight nature. In addition to
                        these properties, aluminium is also known to be a
                        versatile and sustainable material. The life of
                        aluminium frames is longer, so the user gets to enjoy
                        its superior charm for a longer duration. If an
                        aluminium unit is coated with powder, it offers a
                        guaranteed lifespan of over 30 years. When anodised, the
                        lifespan of the product can extend by another 5 years.
                      </p>

                      <p>
                        Since 1930, aluminium has been used in construction and
                        has become a preferred choice for developers as well as
                        home buyers. Keeping all these factors in mind, it won´t
                        be wrong to say that aluminium is a stylish, elegant,
                        and superior looking material that offers a number of
                        advantages.
                      </p>
                    </div>

                    <div className="BenifitWrp mt-20">
                      <h6>
                        BENEFITS OF THE ALUMINIUM SERIES OF WINDOWS AND DOORS
                      </h6>

                      <p>
                        With a base material like aluminium, glass products like
                        windows and doors are the answer to attractive and
                        energy-efficient doors and windows for both residential
                        and commercial establishments. These products are
                        lighter, more durable, and affordable, which makes them
                        a better choice. Here are the important benefits of
                        installing aluminium fixtures in your establishment: -
                      </p>

                      <div className="aluminumSeries">
                        <h6>A. THERMAL EFFICIENCY</h6>

                        <p>
                          Aluminium window and door profiles are known to be one
                          of the most energy-efficient products. They always
                          meet or exceed the efficiency standards set by
                          concerned authorities. These windows and doors also
                          play a significant role in regulating the room
                          temperature during summers and winters.
                        </p>
                      </div>

                      <div className="aluminumSeries">
                        <h6>B. REDUCES CARBON FOOTPRINT</h6>

                        <p>
                          Aluminium window and door profiles are known to be one
                          of the most energy-efficient products. They always
                          meet or exceed the efficiency standards set by
                          concerned authorities. These windows and doors also
                          play a significant role in regulating the room
                          temperature during summers and winters.
                        </p>
                      </div>

                      <div className="aluminumSeries">
                        <h6>C. DURABILITY</h6>

                        <p>
                          Aluminium profiles are weatherproof, corrosion
                          resistant, UV resistant, and lighter when compared to
                          other products that are used to make window and door
                          frames. With elongated product life, these fixtures
                          deliver optimum performance throughout their lifespan.
                        </p>
                      </div>

                      <div className="aluminumSeries">
                        <h6>D. LOWER MAINTENANCE</h6>

                        <p>
                          The weatherproof quality of aluminium makes these
                          doors and windows low maintenance in nature throughout
                          their lifespan. Using a mild soap solution or at times
                          only dusting is needed. However, if the doors or
                          windows face UV rays constantly throughout the day,
                          you must clean them more often.
                        </p>
                      </div>

                      <div className="aluminumSeries">
                        <h6>E. FLEXIBILITY IN DESIGN</h6>

                        <p>
                          There are several options that you can choose from
                          when it comes to aluminium windows and doors for your
                          apartment. Aluminium as a material is highly flexible
                          which makes manufacturing various designs quick and
                          easy. In addition to that, the availability of a
                          number of glass options and finishes makes it a
                          cost-effective and highly preferable framing option.
                          Also, with the properties of aluminium, it can be
                          easily rolled, forged, and cast to make windows and
                          doors in different shapes, designs, and sizes.
                        </p>
                      </div>

                      <div className="aluminumSeries">
                        <h6>F. LIGHTWEIGHT</h6>

                        <p>
                          As aluminium is a lightweight material, it is easier
                          to handle on-site and during transportation.
                        </p>
                      </div>

                      <div className="aluminumSeries">
                        <h6>G. RECYCLABILITY</h6>

                        <p>
                          Aluminium is also known to be a green and sustainable
                          product as it has one of the highest recycling rates
                          for end of life products and lesser energy
                          requirement. This is one of the features that
                          differentiate it from other materials that are used
                          for manufacturing frames for windows and doors.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeCenterContent;
