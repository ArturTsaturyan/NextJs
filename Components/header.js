import { GiHamburger } from 'react-icons/gi';

const Header = () =>{
    return(
        <header>
            <div>
              <GiHamburger/>
            </div>
            <nav>
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Comments</a>
                <a href="">Burgers</a>
            </nav>
        </header>
    )
}
export default Header