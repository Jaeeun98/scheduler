import { Route } from 'react-router';
import Aside from '../aside/aside';
import Daily from '../daily/daily';
import Monthly from '../monthly/monthly';
import WrapHeader from '../wrapHeader/wrapHeader';
import styles from  './wrap.module.css'


const Wrap = (props) => {
    return(
        <div className={styles.wrap}>
            <WrapHeader />
            <main className={styles.main}>
                <Aside />
                <Route path='/calendar' exact >
                    <Monthly />
                </Route>
                <Route path='/daily'>
                    <Daily />
                </Route>
            </main>
        </div>
    )
}
export default Wrap;