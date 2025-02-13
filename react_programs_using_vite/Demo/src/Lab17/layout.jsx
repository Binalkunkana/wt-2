import { Outlet, Link } from "react-router-dom";

function Layout() {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <span class="navbar-brand" href="#">Nothing</span>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link active" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/contact">Contact</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/about">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/product">Product</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/register">Register</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/stuCard">StudentCard</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/stuTable">StudentTable</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/facCard">FacultyCard</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/facTable">FacultyTable</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/proCard">ProductCard</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/proTable">ProductTable</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    )
}

export default Layout