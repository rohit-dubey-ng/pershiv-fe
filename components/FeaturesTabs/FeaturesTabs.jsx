import Image from "next/image";

const FeaturesTabs = () => {
  return (
    <>
      <div className="featuresTabsWrp">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div
                className="nav flex-column nav-pills me-3"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <button
                  className="nav-link active tabsWrp"
                  id="v-pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-home"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-home"
                  aria-selected="true"
                >
                  Energy Efficient
                </button>
                <button
                  className="nav-link tabsWrp"
                  id="v-pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-profile"
                  aria-selected="false"
                >
                  Noise Insulation
                </button>
                <button
                  className="nav-link tabsWrp"
                  id="v-pills-messages-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-messages"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-messages"
                  aria-selected="false"
                >
                  Rainwater Insulation
                </button>
                <button
                  className="nav-link tabsWrp"
                  id="v-pills-settings-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-settings"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-settings"
                  aria-selected="false"
                >
                  Storm Resistant
                </button>

                <button
                  className="nav-link tabsWrp"
                  id="v-pills-Maintenance-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-Maintenance"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-Maintenance"
                  aria-selected="false"
                >
                  Low Maintenance
                </button>

                <button
                  className="nav-link tabsWrp"
                  id="v-pills-insects-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-insects"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-insects"
                  aria-selected="false"
                >
                  Insect Protection
                </button>

                <button
                  className="nav-link tabsWrp"
                  id="v-pills-dust-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-dust"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-dust"
                  aria-selected="false"
                >
                  Dust Resistant
                </button>

                <button
                  className="nav-link tabsWrp"
                  id="v-pills-Homesecurity-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-Homesecurity"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-Homesecurity"
                  aria-selected="false"
                >
                  Enhanced Security
                </button>

                <button
                  className="nav-link tabsWrp"
                  id="v-pills-openings-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-openings"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-openings"
                  aria-selected="false"
                >
                  Ample Natural Light
                </button>

                <button
                  className="nav-link tabsWrp"
                  id="v-pills-Effortless-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-Effortless"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-Effortless"
                  aria-selected="false"
                >
                  Elegant and Effortless Operation
                </button>

                <button
                  className="nav-link tabsWrp"
                  id="v-pills-freedom-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-freedom"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-freedom"
                  aria-selected="false"
                >
                  Design Flexibility
                </button>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="tab-content" id="v-pills-tabContent">
                <div
                  className="tab-pane tabDetails fade show active"
                  id="v-pills-home"
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab"
                  tabindex="0"
                >
                  <Image
                    width={900}
                    height={500}
                    src="/images/assets/electric.jpg"
                    alt="media"
                    className="lazy-img mb-40 lg-mt-20 lg-mb-20 rounded"
                  />
                  <div className="row">
                    <div className="col-lg-12">
                      <p>
                        High electricity bills and varying room temperatures can
                        make life difficult. At Pershiv we design windows to
                        keep your home insulated naturally, which reduces heat
                        transfer and helps you save on the heavy electricity
                        costs while staying comfortable throughout the year.
                      </p>
                    </div>
                    <div className="col-lg-6 mb-3">
                      <div className="card">
                        <div className="card-header">
                          <span>Reduce Heat Transfer by 30-40%</span>
                        </div>
                        <div className="card-body">
                          <p className="m-0 p-0">
                            Our windows are designed with multi-chambered
                            profiles and airtight seals, that maintain the
                            temperature indoors. This keeps the home cool in
                            summer and warm in winter.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 mb-3">
                      <div className="card">
                        <div className="card-header">
                          <span>Cut Energy Consumption by 20-25%</span>
                        </div>
                        <div className="card-body">
                          <p className="p-0 m-0">
                            With insulated windows, air conditioners or heaters
                            don’t have to work as hard. This leads to
                            considerable savings on the electricity bills.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 mb-3">
                      <div className="card">
                        <div className="card-header">
                          <span>Eco-Friendly Solution</span>
                        </div>
                        <div className="card-body">
                          <p className="m-0 p-0">
                            By reducing heat transfer and cutting energy usage,
                            our windows help reduce your carbon footprint.
                            Creating such energy-efficient windows is our big
                            step towards a greener and more sustainable future.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-bg-light p-3 rounded mt-3">
                    <h6 className="fs-5">RESULT:</h6>
                    <p className="fs-6 mb-0">
                      Enjoy a comfortable, cost-effective, and environment
                      friendly home with Pershiv’s energy-efficient designs
                    </p>
                  </div>
                </div>

                <div
                  className="tab-pane tabDetails fade"
                  id="v-pills-profile"
                  role="tabpanel"
                  aria-labelledby="v-pills-profile-tab"
                  tabindex="0"
                >
                  {/* <strong>CREATE YOUR OWN PEACEFUL RETREAT</strong> */}

                  <Image
                    width={900}
                    height={500}
                    src="/images/assets/electric.jpg"
                    alt="media"
                    className="lazy-img mt-40 mb-40 lg-mt-20 lg-mb-20 "
                  />

                  <div className="row">
                    <div className="col-lg-12">
                      <p>
                        Living in a loud noisy environment is stressful, and
                        makes it hard to focus, relax, or sleep. Pershiv Windows
                        are designed to block unwanted noise, giving you a
                        peaceful and quiet home environment.
                      </p>
                    </div>

                    <div className="col-lg-6 col-md-6 mb-3">
                      <div className="card  rounded">
                        <div className="card-header">
                          <span>Block Up to 90% of Outside Noise</span>
                        </div>
                        <div className="card-body">
                          <p className="m-0 p-0">
                            Pershiv Windows have thick profiles and
                            double-sealed systems that significantly reduce
                            noise from traffic, construction, or other external
                            sources, creating a quieter indoor environment.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 mb-3">
                      <div className="card  rounded">
                        <div className="card-header">
                          Enhanced Soundproofing with Double Glazing
                        </div>
                        <div className="card-body">
                          <p className="m-0 p-0">
                            Our double glazed options adds to the sound
                            insulation, making your home a peaceful retreat even
                            in noisy neighborhoods.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 mb-3">
                      <div className="card  rounded">
                        <div className="card-header">
                          Improves Indoor Comfort
                        </div>
                        <div className="card-body">
                          <p className="m-0 p-0">
                            Enjoy uninterrupted focus, better sleep, and
                            relaxing family time in a calm home atmosphere.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="text-bg-light p-3 rounded mt-3">
                        <h6 className="fs-5">RESULT:</h6>
                        <p className="fs-6 mb-0">
                          A quiet and peaceful home where you can focus, relax,
                          and recharge, in your own space and with your family.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="tab-pane tabDetails fade"
                  id="v-pills-messages"
                  role="tabpanel"
                  aria-labelledby="v-pills-messages-tab"
                  tabindex="0"
                >
                  <Image
                    width={900}
                    height={500}
                    src="/images/assets/rainwater.jpg"
                    alt="media"
                    className="lazy-img mt-40 mb-40 lg-mt-20 lg-mb-20 "
                  />
                  <div className="row">
                    <div className="col-lg-12">
                      <p>
                        Heavy rains can lead to indoor leakage, damaging walls,
                        floors, and furniture. Pershiv Windows come with smart
                        drainage systems that keep your home dry and protected,
                        even during the heaviest rains.
                      </p>
                    </div>

                    <div className="col-lg-6 col-md-6 mb-3">
                      <div className="card  rounded">
                        <div className="card-header">
                          Special Rain Track Design
                        </div>
                        <div className="card-body">
                          <p className="m-0 p-0">
                            Pershiv Windows come with a rain track system that
                            efficiently drains water outside, even during heavy
                            rainfall, keeping your home dry.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 mb-3">
                      <div className="card  rounded">
                        <div className="card-header">
                          Sloped Sills for Extra Protection
                        </div>
                        <div className="card-body">
                          <p className="m-0 p-0">
                            The sloped sill design prevents water from getting
                            into your home, protecting walls, floors, and
                            furniture from damage.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 mb-3">
                      <div className="card  rounded">
                        <div className="card-header">Withstand Heavy Rains</div>
                        <div className="card-body">
                          <p className="m-0 p-0">
                            Our products are built to handle extreme monsoon
                            conditions, ensuring reliable protection and
                            comfort.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div class="text-bg-light p-3 rounded mt-3">
                        <h6 class="fs-5">RESULT:</h6>
                        <p class="fs-6 mb-0">
                          A dry and safe home, no matter how heavy the rains
                          are.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="tab-pane tabDetails fade"
                  id="v-pills-settings"
                  role="tabpanel"
                  aria-labelledby="v-pills-settings-tab"
                  tabindex="0"
                >
                  <Image
                    width={900}
                    height={500}
                    src="/images/assets/drawing.jpg"
                    alt="media"
                    className="lazy-img mt-40 mb-40 lg-mt-20 lg-mb-20 "
                  />
                  {/* <strong>
                    NO MORE WHISTLING SOUNDS OR RATTLING OF WINDOWS AND DOORS
                  </strong> */}
                  <div className="row">
                    <div className="col-lg-12">
                      <p>
                        Strong winds and extreme weather can cause damage and
                        safety concerns. Pershiv Windows are built to withstand
                        such conditions, making sure your home remains secure
                        and protected.
                      </p>
                    </div>

                    <div className="col-lg-6 col-md-6 mb-3">
                      <div className="card  rounded">
                        <div className="card-header">
                          Withstand Wind Speeds of Up to 250 km/h
                        </div>
                        <div className="card-body">
                          <p className="m-0 p-0">
                            Pershiv Windows are reinforced with strong materials
                            to handle extreme weather conditions and strong
                            winds, offering unmatched durability.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 mb-3">
                      <div className="card  rounded">
                        <div className="card-header">
                          Enhanced Structural Strength
                        </div>
                        <div className="card-body">
                          <p className="m-0 p-0">
                            Our designs include multi-point locking systems and
                            robust frames, ensuring stability during harsh
                            weather conditions.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 mb-3">
                      <div className="card  rounded">
                        <div className="card-header">
                          Reliable in Tough Weather
                        </div>
                        <div className="card-body">
                          <p className="m-0 p-0">
                            Our products are built to handle extreme monsoon
                            conditions, ensuring reliable protection and
                            comfort.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div class="text-bg-light p-3 rounded mt-3">
                        <h6 class="fs-5">RESULT:</h6>
                        <p class="fs-6 mb-0">
                          A safe and protected home, even during the harshest
                          weather conditions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="tab-pane tabDetails fade"
                  id="v-pills-Maintenance"
                  role="tabpanel"
                  aria-labelledby="v-pills-Maintenance-tab"
                  tabindex="0"
                >
                  {/* <strong>
                    SECURE YOUR PEACE OF MIND WITH FENESTA WINDOWS AND DOORS
                  </strong> */}
                  <Image
                    width={900}
                    height={500}
                    src="/images/assets/windows.jpg"
                    alt="media"
                    className="lazy-img mt-40 mb-40 lg-mt-20 lg-mb-20 "
                  />

                  <div className="row">
                    <div className="col-lg-12">
                      <p>
                        Frequent cleaning and maintenance is very time-consuming
                        and exhausting for anyone. Pershiv Windows are designed
                        in a way that they resist dust, stains, and fading. This
                        makes it easier to maintain and keep them looking new
                        for a long time.
                      </p>
                    </div>

                    <div className="col-lg-6 col-md-6 mb-3">
                      <div className="card  rounded">
                        <div className="card-header">
                          Resistance to Stains and Dust
                        </div>
                        <div className="card-body">
                          <p className="m-0 p-0">
                            The high-quality materials we use in Pershiv
                            products help keep them low maintenance as they are
                            highly dust and stain resistant.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 mb-3">
                      <div className="card  rounded">
                        <div className="card-header">
                          Durable and Long-Lasting
                        </div>
                        <div className="card-body">
                          <p className="m-0 p-0">
                            Our windows are built to last, with minimal need for
                            repairs or replacements over time.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 mb-3">
                      <div className="card  rounded">
                        <div className="card-header">Easy to Clean</div>
                        <div className="card-body">
                          <p className="m-0 p-0">
                            The smooth surfaces make cleaning quick and easy,
                            saving your time and effort, to focus on better
                            things.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div class="text-bg-light p-3 rounded mt-3">
                        <h6 class="fs-5">RESULT:</h6>
                        <p class="fs-6 mb-0">
                          Spend less time on maintenance and enjoy what matters
                          more than maintaining your windows.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="tab-pane tabDetails fade"
                  id="v-pills-insects"
                  role="tabpanel"
                  aria-labelledby="v-pills-insects-tab"
                  tabindex="0"
                >
                  <Image
                    width={900}
                    height={500}
                    src="/images/assets/home.jpg"
                    alt="media"
                    className="lazy-img mt-40 mb-40 lg-mt-20 lg-mb-20 "
                  />
                  {/* <strong>
                    PROTECT YOUR HOME FROM INSECTS WITHOUT COMPROMISING ON
                    VENTILATION
                  </strong> */}

                  <div className="row">
                    <div className="col-lg-12">
                      <p>
                        Keeping insects out and fresh air in can be a difficult
                        thing to achieve. Pershiv Windows come with built-in
                        mesh screens that prevent mosquitoes and other pests
                        from entering your home.
                      </p>
                    </div>

                    <div className="col-lg-6 col-md-6 mb-3">
                      <div className="card  rounded">
                        <div className="card-header">
                          Built-in Insect Screens
                        </div>
                        <div className="card-body">
                          <p className="m-0 p-0">
                            Pershiv Windows include fine mesh screens that allow
                            fresh air to flow in while keeping mosquitoes,
                            flies, and other pests out.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 mb-3">
                      <div className="card  rounded">
                        <div className="card-header">
                          Durable and Long-Lasting Mesh
                        </div>
                        <div className="card-body">
                          <p className="m-0 p-0">
                            The insect screens are made from high-quality
                            materials that resist wear and tear, ensuring they
                            last for a longer time.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 mb-3">
                      <div className="card  rounded">
                        <div className="card-header">
                          Breathe Easy Without Worry
                        </div>
                        <div className="card-body">
                          <p className="m-0 p-0">
                            Keep your home pest-free while enjoying natural
                            ventilation and a comfortable living space.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div class="text-bg-light p-3 rounded mt-3">
                        <h6 class="fs-5">RESULT:</h6>
                        <p class="fs-6 mb-0">
                          A fresh, pest-free home with no interruptions from
                          unwanted insects.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="tab-pane tabDetails fade"
                  id="v-pills-dust"
                  role="tabpanel"
                  aria-labelledby="v-pills-dust-tab"
                  tabindex="0"
                >
                  {/* <strong>
                    KEEP YOUR HOME CLEAN AND SAFE FOR AND LEAD A HEALTHIER LIFE
                  </strong> */}

                  <Image
                    width={900}
                    height={500}
                    src="/images/assets/healthcare.jpg"
                    alt="media"
                    className="lazy-img mt-40 mb-40 lg-mt-20 lg-mb-20 "
                  />

                  <div className="row">
                    <div className="col-lg-12">
                      <p>
                        Dust can make your home look dirty, affect your family’
                        health and affect indoor air quality. Pershiv Windows
                        are designed with airtight seals that keep dust out,
                        maintaining a clean and healthy home for your family.
                      </p>
                    </div>

                    <div className="col-lg-6 col-md-6 mb-3">
                      <div className="card  rounded">
                        <div className="card-header">
                          Airtight Seals Prevent Dust Entry
                        </div>
                        <div className="card-body">
                          <p className="m-0 p-0">
                            Pershiv Windows feature airtight seals that stop
                            dust from entering your home, even in dry or busy
                            areas.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 mb-3">
                      <div className="card  rounded">
                        <div className="card-header">Cleaner Indoor Spaces</div>
                        <div className="card-body">
                          <p className="m-0 p-0">
                            With less dust settling indoors, your home stays
                            cleaner for longer, reducing the need for frequent
                            cleaning.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 mb-3">
                      <div className="card  rounded">
                        <div className="card-header">
                          Improves Indoor Air Quality
                        </div>
                        <div className="card-body">
                          <p className="m-0 p-0">
                            By keeping dust out, Pershiv helps create a
                            healthier living environment, especially for those
                            with allergies or respiratory issues.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div class="text-bg-light p-3 rounded mt-3">
                        <h6 class="fs-5">RESULT:</h6>
                        <p class="fs-6 mb-0">
                          A cleaner, healthier home with fresher air and less
                          effort.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="tab-pane tabDetails fade"
                  id="v-pills-Homesecurity"
                  role="tabpanel"
                  aria-labelledby="v-pills-Homesecurity-tab"
                  tabindex="0"
                >
                  {/* <strong>
                    DETER BURGLARIES WITHOUT MISSING OUT ON FRESH AIR WHILE YOU
                    SLEEP
                  </strong> */}

                  <Image
                    width={900}
                    height={500}
                    src="/images/assets/security.jpg"
                    alt="media"
                    className="lazy-img mt-40 mb-40 lg-mt-20 lg-mb-20 "
                  />

                  <div className="row">
                    <div className="col-lg-12">
                      <p>
                        Weak windows can be a security risk, making homes
                        vulnerable to break-ins, and putting your family at
                        risk. Pershiv Windows come with multi-point locking
                        systems and high quality materials to keep your home
                        safe and secure.
                      </p>
                    </div>

                    <div className="col-lg-6 col-md-6 mb-3">
                      <div className="card  rounded">
                        <div className="card-header">
                          Multiple Locking Points
                        </div>
                        <div className="card-body">
                          <p className="m-0 p-0">
                            Pershiv Windows are equipped with advanced
                            multi-point locking systems for maximum security.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 mb-3">
                      <div className="card  rounded">
                        <div className="card-header">
                          Strong, Durable Materials
                        </div>
                        <div className="card-body">
                          <p className="m-0 p-0">
                            Our products are made from reinforced materials,
                            making them tough and resistant to break-ins.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 mb-3">
                      <div className="card  rounded">
                        <div className="card-header">Peace of Mind</div>
                        <div className="card-body">
                          <p className="m-0 p-0">
                            Whether you’re at home or away, you can trust
                            Pershiv to keep your family and belongings safe.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div class="text-bg-light p-3 rounded mt-3">
                        <h6 class="fs-5">RESULT:</h6>
                        <p class="fs-6 mb-0">
                          A secure home that gives you complete peace of mind.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="tab-pane tabDetails fade"
                  id="v-pills-openings"
                  role="tabpanel"
                  aria-labelledby="v-pills-openings-tab"
                  tabindex="0"
                >
                  {/* <strong>MAKING HOMES BETTER, BRIGHTER AND HAPPIER</strong> */}
                  <Image
                    width={900}
                    height={500}
                    src="/images/assets/beach.jpg"
                    alt="media"
                    className="lazy-img mt-40 mb-40 lg-mt-20 lg-mb-20 "
                  />

                  <div className="row">
                    <div className="col-lg-12">
                      <p>
                        Homes with less natural light can feel dull and
                        unwelcoming. Pershiv Windows are designed to maximize
                        natural light, creating bright and inviting living
                        spaces.
                      </p>
                    </div>

                    <div className="col-lg-6 col-md-6 mb-3">
                      <div className="card  rounded">
                        <div className="card-header">
                          Slim Frame and Large Glass Area
                        </div>
                        <div className="card-body">
                          <p className="m-0 p-0">
                            Our Windows are designed to let in natural light,
                            making your home brighter.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 mb-3">
                      <div className="card  rounded">
                        <div className="card-header">
                          Create a Spacious Feel
                        </div>
                        <div className="card-body">
                          <p className="m-0 p-0">
                            More sunlight enhances the overall look and feel of
                            your rooms, making them seem larger and more
                            spacious.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 mb-3">
                      <div className="card  rounded">
                        <div className="card-header">
                          Boosts Mood and Energy
                        </div>
                        <div className="card-body">
                          <p className="m-0 p-0">
                            Natural light not only makes your home beautiful but
                            also creates a positive vibe that impacts your
                            health and well-being.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div class="text-bg-light p-3 rounded mt-3">
                        <h6 class="fs-5">RESULT:</h6>
                        <p class="fs-6 mb-0">
                          A bright and cheerful home filled with natural light
                          and positive vibes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="tab-pane tabDetails fade"
                  id="v-pills-Effortless"
                  role="tabpanel"
                  aria-labelledby="v-pills-Effortless-tab"
                  tabindex="0"
                >
                  {/* <strong>ADD A TOUCH OF CLASS TO YOUR HOME</strong> */}

                  <Image
                    width={900}
                    height={500}
                    src="/images/assets/living.jpg"
                    alt="media"
                    className="lazy-img mt-40 mb-40 lg-mt-20 lg-mb-20 "
                  />

                  <div className="row">
                    <div className="col-lg-12">
                      <p>
                        If you struggle with stiff or poorly designed windows,
                        it gets very frustrating. Pershiv’s Windows don't bother
                        you with such issues. They are built for a smooth
                        operation, combining effortless use with stylish, modern
                        designs.
                      </p>
                    </div>

                    <div className="col-lg-6 col-md-6 mb-3">
                      <div className="card  rounded">
                        <div className="card-header">
                          Smooth and Easy to Use
                        </div>
                        <div className="card-body">
                          <p className="m-0 p-0">
                            Pershiv Windows are designed with high end materials
                            for effortless operation, making them convenient for
                            daily use.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 mb-3">
                      <div className="card  rounded">
                        <div className="card-header">
                          Modern and Stylish Designs
                        </div>
                        <div className="card-body">
                          <p className="m-0 p-0">
                            Our products come in sleek and elegant styles,
                            adding sophistication with style to your home
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 mb-3">
                      <div className="card  rounded">
                        <div className="card-header">Durable Mechanisms</div>
                        <div className="card-body">
                          <p className="m-0 p-0">
                            The operating mechanisms are built to last, ensuring
                            a smooth experience for years to come.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div class="text-bg-light p-3 rounded mt-3">
                        <h6 class="fs-5">RESULT:</h6>
                        <p class="fs-6 mb-0">
                          Windows that are both stylish and effortless.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="tab-pane tabDetails fade"
                  id="v-pills-freedom"
                  role="tabpanel"
                  aria-labelledby="v-pills-freedom-tab"
                  tabindex="0"
                >
                  {/* <strong>REDUCE YOUR AIR CONDITIONING COSTS</strong> */}

                  <Image
                    width={900}
                    height={500}
                    src="/images/assets/aircondition.jpg"
                    alt="media"
                    className="lazy-img mt-40 mb-40 lg-mt-20 lg-mb-20 "
                  />

                  <div className="row">
                    <div className="col-lg-12">
                      <p>
                        Every home is unique, and standard designs do not always
                        match your style. Pershiv Windows offer a range of
                        customizable options to complement any home aesthetic
                        perfectly.
                      </p>
                    </div>

                    <div className="col-lg-6 col-md-6 mb-3">
                      <div className="card  rounded">
                        <div className="card-header">Customizable Options</div>
                        <div className="card-body">
                          <p className="m-0 p-0">
                            Pershiv offers a variety of styles, colors, and
                            finishes to match your interiors and personal
                            preferences.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 mb-3">
                      <div className="card  rounded">
                        <div className="card-header">
                          Perfect Fit for Every Space
                        </div>
                        <div className="card-body">
                          <p className="m-0 p-0">
                            Whether it’s a modern, classic, or unique look, our
                            products can be tailored to complement all of it.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 mb-3">
                      <div className="card  rounded">
                        <div className="card-header">Personalized Touch</div>
                        <div className="card-body">
                          <p className="m-0 p-0">
                            Add a unique style to your home with windows that
                            reflect your personality and taste.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div class="text-bg-light p-3 rounded mt-3">
                        <h6 class="fs-5">RESULT:</h6>
                        <p class="fs-6 mb-0">
                          A home that feels truly yours, with designs customized
                          to perfection.
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
    </>
  );
};

export default FeaturesTabs;
