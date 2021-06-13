const Header = () => {
    return(
        <>
        <header className='row'>
            <nav className="navbar navbar-expand-lg navbar-dark col-12 col-sm-12 col-lg-12 col-xl-12">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">TuLogoAcá</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href='/' className='nav-link'>Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a href='#nosotros' className='nav-link'>Acerca de</a>
                        </li>
                        <li className="nav-item">
                            <div className="dropdown">
                                <button className=" p-0 btn dropdown-toggle text-light" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    Servicios
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a className="dropdown-item" href="#service1">Servicio 1</a></li>
                                    <li><a className="dropdown-item" href="#service2">Servicio 2</a></li>
                                    <li><a className="dropdown-item" href="#service3">Servicio 3</a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </header>
        </>
    )
}

export default Header