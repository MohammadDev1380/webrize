import './header.scss';
import { useImmer } from 'use-immer';
import classNames from 'classnames';
import { useEffect } from 'react';

const Header = ({ homeElements, headerZIndex }) => {
    const [isActive, setIsActive] = useImmer(false);

    const headerClasses = classNames({
        'active': isActive
    });

    document.addEventListener('scroll', (ev) => {
        if (ev) {
            const element = homeElements[0].current;
            const rect = element.getBoundingClientRect();
            const top = rect.top;

            if (top < 200) {
                setIsActive(true);
            } else {
                setIsActive(false);
            }
        }
    });

    return (
        <header style={{
            transition: 'all 250ms ease',
            zIndex: headerZIndex
        }} className={headerClasses}>
            <nav>
                <ul>
                    <li>
                        <a href="">
                            خانه
                        </a>
                    </li>
                    <li>
                        <a href="">
                            وبلاگ
                        </a>
                    </li>
                    <li>
                        <a href="">
                            درباره ما
                        </a>
                    </li>
                    <li>
                        <a href="">
                            تماس با ما
                        </a>
                    </li>
                </ul>
                <div className="logo">

                </div>
            </nav>
        </header>
    )
}

export default Header;