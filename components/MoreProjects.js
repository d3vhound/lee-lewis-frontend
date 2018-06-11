const Background = "https://leelewis.nextgencode.io/wp-content/uploads/2018/06/ASU-CHP-8.jpg"
const Background2 = "https://leelewis.nextgencode.io/wp-content/uploads/2018/06/talkington.jpg"
const Background3 = "https://leelewis.nextgencode.io/wp-content/uploads/2018/06/SUL-ROSS-GALLEGO-1.jpg"

  export default () => (
  <React.Fragment>  
  <hr />
  <section className="section">
    <div className="container has-text-centered">
      <h1 className="title is-size-3-touch" style={{ marginBottom: `2rem` }}>More Projects</h1>
    </div>
    <div className="container">
      <div className="columns">
        <div className="column">
          <div className="squarebox" style={{ background: `linear-gradient(180deg, rgba(0, 0, 0,0.5) 0%, rgba(0, 0, 0,0.5) 100%), url(${Background}) bottom no-repeat`, backgroundSize: "cover" }}>
            <h1 className="title is-size-5-mobile" style={{textAlign: `left`, fontSize: '1.5rem', marginBottom: `0`}}>Center for Human Performance</h1>
            <div className="separator" style={{ backgroundColor: `#00818C`, opacity: `1`}}></div>
            <h2 className="subtitle has-text-grey-lighter">Angelo State University</h2>
            
          </div>
        </div>
        <div className="column">
          <div className="squarebox" style={{ background: `linear-gradient(180deg, rgba(0, 0, 0,0.5) 0%, rgba(0, 0, 0,0.5) 100%), url(${Background2}) center no-repeat`, backgroundSize: "cover" }}>
            <h1 className="title is-size-5-mobile" style={{ textAlign: `left`, fontSize: '1.5rem', marginBottom: `0` }}>Margaret Talkington Center for Nursing Education</h1>
            <div className="separator" style={{ backgroundColor: `#00818C`, opacity: `1` }}></div>
            <h2 className="subtitle has-text-grey-lighter">Lubbock Christian University</h2>
          </div>
        </div>
        <div className="column">
          <div className="squarebox" style={{ background: `linear-gradient(180deg, rgba(0, 0, 0,0.5) 0%, rgba(0, 0, 0,0.5) 100%), url(${Background3}) center no-repeat`, backgroundSize: "cover" }}>
            <h1 className="title is-size-5-mobile" style={{ textAlign: `left`, fontSize: '1.5rem', marginBottom: `0` }}>Pete Gallego Center</h1>
            <div className="separator" style={{ backgroundColor: `#00818C`, opacity: `1`}}></div>
            <h2 className="subtitle has-text-grey-lighter">Sul Ross State University</h2>
          </div>
        </div>
      </div>
    </div>
  </section>
  </React.Fragment>
)