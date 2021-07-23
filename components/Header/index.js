import Link from 'next/link';
import NavBar from '../NavBar';
import styles from '../../styles/Header.module.css';

export default function Header() {
    return (
        <div>
            <h1 className={styles.title}><span className={styles.firstLetter}>K</span><span className={styles.letterPurple}>a</span><span className={styles.letterBlue} style={{fontSize: '1.25em'}}>T</span><span className={styles.letterRed}>y</span><span className={styles.letterPurple}>'</span><span className={styles.letterYellow}>s</span> <span className={styles.letterRed} style={{fontSize: '1.5em'}}>T</span><span className={styles.letterPurple}>o</span><span className={styles.letterYellow} style={{fontSize: '1.25em'}}>Y</span><span className={styles.letterBlue} style={{fontSize: '1.5em'}}>B</span><span className={styles.letterPurple}>o</span><span className={styles.letterYellow} style={{fontSize: '1.25em'}}>x</span></h1>
            <NavBar></NavBar>
        </div>
    )
}
// class HeaderComponent extends Component {
//     render() {.letterBlue
//         return (
//             <div className="navbar">
//                 <div className="header">
//                     <div className="col-1">

//                         <div className="menu">
//                             <div>
//                                     <Link href="/User"><a>Users</a></Link>
//                             </div>
//                             <div>
//                                 <Link href="/nonUser"><a>Non Users</a></Link>
//                             </div>
//                             <input type='text' className="text-box" placeholder="Enter name"></input>

//                         </div>
//                     </div>
//                 </div>
//             </div>
//             )
//         }
//     }
//     export default HeaderComponent;
