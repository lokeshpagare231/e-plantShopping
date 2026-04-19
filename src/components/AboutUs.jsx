const AboutUs = () => {
  return (
    <section className="about">
      <div className="about-header">
        <p className="eyebrow">About Paradise Nursery</p>
        <h2>Greening homes with thoughtful plant pairings</h2>
        <p>
          Paradise Nursery started as a weekend plant swap between neighbors and blossomed into a
          full-service houseplant destination. We source from sustainable growers, pair every plant
          with the right care plan, and deliver the calm of a greenhouse straight to your doorstep.
        </p>
      </div>
      <div className="about-grid">
        <div className="about-card">
          <h3>Hand-selected plants</h3>
          <p>Every plant is inspected for health, color, and root strength before it ships out.</p>
        </div>
        <div className="about-card">
          <h3>Care that meets you</h3>
          <p>Starter, busy parent, or collector—we include simple guidance tailored to your light.</p>
        </div>
        <div className="about-card">
          <h3>Community roots</h3>
          <p>Workshops, repotting events, and local delivery keep the plant community growing.</p>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
