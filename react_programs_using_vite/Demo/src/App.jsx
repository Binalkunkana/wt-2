import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ClassComp from './ClassComp'
import CompNavbar from './navbar'
import Sidebar from './sidebar'
import Content from './content'
import Perent from './Lab15/Perentcomp'
import Eventdemo from './Lab15/EventDemo'
import Demo1 from './Lab15/ConditionalRendering'
import FacultyOBJ from './Lab16/facultyobj'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Lab17/home'
import Contact from './Lab17/contact'
import About from './Lab17/about'
import Product from './Lab17/product'
import Register from './Lab17/register'
import Layout from './Lab17/layout'
import StuCard from './Lab17/stuCard'
import StuTable from './Lab17/stuTable'
import FacCard from './Lab17/facCard'
import FacTable from './Lab17/FacTable'
import ProTable from './Lab17/proTable'
import ProCard from './Lab17/proCard'
function App() {
    return (
        <>
            {/* Lab14 */}
            {/* <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <CompNavbar />
                    </div>
                </div>

                <div className='row'>
                    <div className='col-2'>
                        <Sidebar />
                    </div>
                    <div className='col-10'>
                        <Content/>
                    </div>
                </div>
            </div> */}

            {/* Lab15 */}
            {/* <Perent/>
            <Eventdemo/>
            <Demo1/> */}

            {/* Lab 16 */}

            {/* <div className="container-fluid">
                <FacultyOBJ/>
            </div> */}

            {/* Lab 17 */}

            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/about" element={<About />}></Route>
                        <Route path="/contact" element={<Contact />}></Route>
                        <Route path="/product" element={<Product />}></Route>
                        <Route path="/register" element={<Register />}></Route>
                        <Route path="/stuCard" element={<StuCard/>}></Route>
                        <Route path="/stuTable" element={<StuTable/>}></Route>
                        <Route path="/facCard" element={<FacCard/>}></Route>
                        <Route path="/facTable" element={<FacTable/>}></Route>
                        <Route path="/proCard" element={<ProCard/>}></Route>
                        <Route path="/proTable" element={<ProTable/>}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
