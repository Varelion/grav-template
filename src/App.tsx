import React from 'react';

import {AsideHeader} from '@gravity-ui/navigation';
import {Ghost} from '@gravity-ui/icons';
import {Theme, ThemeProvider} from '@gravity-ui/uikit';

import {InfoButtons} from './components/InfoButtons';
import {Wrapper} from './components/Wrapper';
import {DEFAULT_THEME} from './constants';

const App = () => {
    const [compact, setCompact] = React.useState(false);
    const [theme, setTheme] = React.useState<Theme>(DEFAULT_THEME);

    return (
        <ThemeProvider theme={theme}>
            <AsideHeader
                logo={{icon: Ghost, text: 'vite-example'}}
                compact={compact}
                hideCollapseButton={false}
                onChangeCompact={() => setCompact((prev) => !prev)}
                renderContent={() => (
                    <Wrapper setTheme={setTheme}>
                        <InfoButtons />
                    </Wrapper>
                )}
            />
        </ThemeProvider>
    );
};

export default App;
