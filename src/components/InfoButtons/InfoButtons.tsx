import React, {useState} from 'react';
import block from 'bem-cn-lite';
import {Alert, Button, Icon} from '@gravity-ui/uikit';
import {BookOpen, CopyTransparent, ListUl, LogoTelegram} from '@gravity-ui/icons';
import Figma from '../../assets/icons/figma.svg?react';
import Storybook from '../../assets/icons/storybook.svg?react';
import GitHub from '../../assets/icons/github.svg?react';

import './InfoButtons.scss';

const b = block('info-buttons');

export const InfoButtons: React.FC = () => {
    const [showAlert, setShowAlert] = useState(false);

    const handleClick = async () => {
        // Show the alert
        setShowAlert(true);

        // Wait for 5 seconds
        const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
        await sleep(5000);

        // Hide the alert
        setShowAlert(false);
    };

    return (
        <div className={b()}>
            <div style={{position: 'relative'}}>
                <Button id="bt" size="l" view="outlined" onClick={handleClick}>
                    CLICK THIS ONE
                </Button>

                {/* Properly rendered Gravity UI Alert component */}
                {showAlert && (
                    <div
                        style={{
                            position: 'fixed',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            zIndex: 1000,
                            marginTop: '8px',
                            minWidth: '300px',
                        }}
                    >
                        <Alert
                            theme="danger"
                            title="Danger"
                            message="Danger theme"
                            onClose={() => console.log('Clicked')}
                        />
                    </div>
                )}
            </div>

            <div className={b('block')}>
                <div className={b('title')}>About Gravity UI</div>
                <div className={b('buttons')}>
                    <div className={b('button')}>
                        <Button
                            size="l"
                            view="outlined"
                            href="https://gravity-ui.com/components/uikit"
                            target="_blank"
                        >
                            <Icon data={CopyTransparent} />
                            Components
                        </Button>
                    </div>
                    <div className={b('button')}>
                        <Button
                            size="l"
                            view="outlined"
                            href="https://gravity-ui.com/libraries"
                            target="_blank"
                        >
                            <Icon data={ListUl} />
                            Libraries
                        </Button>
                    </div>
                    <div className={b('button')}>
                        <Button
                            size="l"
                            view="outlined"
                            href="https://preview.gravity-ui.com/uikit/"
                            target="_blank"
                        >
                            <Icon data={Storybook} size={16} />
                            Storybook
                        </Button>
                    </div>
                    <div className={b('button')}>
                        <Button
                            size="l"
                            view="outlined"
                            href="https://github.com/gravity-ui"
                            target="_blank"
                        >
                            <Icon data={GitHub} size={16} />
                            GitHub
                        </Button>
                    </div>
                    <div className={b('button')}>
                        <Button
                            size="l"
                            view="outlined"
                            href="https://www.figma.com/community/file/1271150067798118027/Gravity-UI-Design-System-(Beta)"
                            target="_blank"
                        >
                            <Icon data={Figma} size={18} />
                            Figma
                        </Button>
                    </div>
                    <div className={b('button')}>
                        <Button
                            size="l"
                            view="outlined"
                            href="https://t.me/gravity_ui"
                            target="_blank"
                        >
                            <Icon data={LogoTelegram} />
                            Telegram
                        </Button>
                    </div>
                </div>
            </div>

            <div className={b('block')}>
                <div className={b('title')}>About Vite</div>
                <div className={b('buttons')}>
                    <div className={b('button')}>
                        <Button size="l" view="outlined" href="https://vitejs.dev" target="_blank">
                            <Icon data={BookOpen} />
                            Docs
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
