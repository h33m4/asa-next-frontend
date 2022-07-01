export default function Header({ title }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
			<a className="navbar-brand" href="#">{ title }</a>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
				aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
				<div className="navbar-nav ml-auto">
					<a className="nav-link" href="#our-mission-section">our mission</a>
					<a className="nav-link" href="#survey-section">community</a>
					<a className="nav-link" href="#three-pillars-section">what we do</a>
					<a className="nav-link" href="#stay-utd-section">stay up to date</a>
				</div>
			</div>
		</nav>
  )
}
