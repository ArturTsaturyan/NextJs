import { GiHamburger } from 'react-icons/gi';
import Link from 'next/link'

const Header = () =>{
    return(
        <header>
            <div>
              <GiHamburger/>
            </div>
            <nav>
                {/* <a href="/">Home</a> */}
                <Link href="/"><a>Home</a></Link>
                <Link href="/about"><a>About</a></Link>
                <Link href="/vil"><a>Comments</a></Link>
                <Link href="/burgers"><a>Burgers</a></Link>
            </nav>
        </header>
    )
}
export default Header