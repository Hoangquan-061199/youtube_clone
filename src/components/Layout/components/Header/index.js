import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
  return (
    <div className={cx('wrapper')}>
      <header className={cx('inner')}>
        <h2>Header</h2>
      </header>
    </div>
  );
}

export default Header;
