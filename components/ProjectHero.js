export default (props) => (
  <section className="hero is-medium">
    <div className="project-hero-container">
    <div className="hero-body is-black project-hero" style={{ background: `url(${props.heroImage}) center no-repeat`, backgroundSize: "cover" }}>
    <div className="project-hero-spacer"></div>
    </div>
    </div>
  </section>
)