import trollface from '../assets/trollface.png'

function Navbar() {
    return(
        <nav className='nav-bar'>
            <img src={trollface} alt='trollface' className='trollface'/>
            <h2 className='title1'>Meme Generator</h2>
            <h4 className='title2'>React Project</h4>
        </nav>
    );
}

export default Navbar;