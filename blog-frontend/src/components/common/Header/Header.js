import React from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Button from '../Button';

const cx = classNames.bind(styles);

const Header = ({postId, logged, onRemove}) => (
  <header className={cx('header')}>
    <div className={cx('header-content')}>
      <div className={cx('brand')}>
        <Link to="/">reactblog</Link>
      </div>
      { logged && <div className={cx('right')}>
        {
          postId && [
            <Button key='edit' theme='outline' to={`/editor?id=${postId}`}>Edit</Button>,
            <Button key='remove' theme='outline' onClick={onRemove}>Delete</Button>
          ]
        }
        <Button theme='outline' to='/editor'>New Post</Button>
      </div> }
    </div>
  </header>
);

export default Header;