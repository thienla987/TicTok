import classNames from 'classnames/bind';
import styles from './Accountltem.module.scss';
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles)

function AccountItem() {
    return ( 
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} 
            src="https://tse1.mm.bing.net/th?id=OIP.VEenYTs_iB7NEayP1ihpRAHaEK&pid=Api&P=0" alt="Hoaa" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>Nguyen Van A</span>

            </div>
        </div>
     );
}

export default AccountItem;