import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Header() {
  return (
    <div className={cx('wrapper')}>
      <header className={cx('inner')}>
        <div className={cx('logo')}>
          <div className={cx('nav-btn')}>
            <img src={images.navBtn} alt="BTN" />
          </div>
          <div className={cx('logo-youtube')}>
            <img src={images.logo} alt="YouTube" />
          </div>
          <span className={cx('country-code')}>VN</span>
        </div>
        <div className={cx('search')}>
          <div className={cx('search-form')}>
            <div className={cx('search-box')}>
              <img src={images.search} alt="search-box" />
            </div>
            <div className={cx('search-input')}>
              <input placeholder="Tìm kiếm" name="search" />
            </div>
            <div className={cx('search-delete')}>
              <img src={images.delete} alt="delete" />
            </div>
          </div>
          <button className={cx('search-btn')}>
            <img src={images.search} alt="btn" />
          </button>
          <div className={cx('voice-btn')}>
            <img src={images.voice} alt="voice" title="Search with your voice" />
          </div>
        </div>
        <div className={cx('action')}>
          <div className={cx('setting-icon')}>
            <img src={images.setting} alt="setting" />
          </div>
          <div className={cx('login-btn')}>
            <div className={cx('user-icon')}>
              <img src={images.user} alt="user" />
            </div>
            <div className={cx('login-content')}>SIGN IN</div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
