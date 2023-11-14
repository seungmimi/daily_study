import React from 'react';
import styles from './Header.module.css'
import { Link, useLocation } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';

function Header() {

    const { logout } = useLogout();
    const {user} = useAuthContext();
    const location = useLocation();

    return (
        <header className={styles['header']}>
            <div className={styles['header-wrap']}>
                <h1>
                    <Link to="/" className={styles.logo}>
                        짧은 일기
                    </Link>
                </h1>
                <div className={styles['btn-area']}>
                    {/* 만약 유저의 상태가 null, 즉 로그아웃 이라면 */}
                    {!user && (
                        <>
                            {
                                location.pathname !== "/signup" ? (
                                    <>
                                    <Link to="/signup" className={styles['btn']}>
                                        <i className='icon icon-join' />회원가입
                                    </Link>
                                    </>) : 
                                    (<Link to="/login" className={styles['btn']}>
                                        <i className='icon icon-login' />로그인
                                    </Link>)
                            }
                        </>
                    )}
                    {/* 만약 유저의 상태가 null 이 아니라면  */}
                    {user &&
                        <>
                            <p className={styles.hello}>환영합니다 <strong>{user.displayName}</strong> 님</p>
                            <Link to="/" className={styles['btn']} onClick={logout}>
                                <i className='icon icon-logout' />
                                로그아웃
                            </Link>
                        </>
                    }
                </div>
            </div>
        </header>
    )
}

export default Header;