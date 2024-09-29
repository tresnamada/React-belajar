import React from 'react'
import Aos from 'aos'
import Navbar from './component/Navbar'
import Hero from './component/hero'

const App = () => {
    React.useEffect(() => {
        Aos.init({
            duration: 600,
            easing: 'ease-in',
            offset: 100,
        })
    })
    return (
        <div className='overflow-hidden'>
            <Navbar />
            <Hero />
        </div>
    )
}

export default App
