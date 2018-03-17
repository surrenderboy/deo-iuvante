import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';
import { withInfo, setDefaults } from '@storybook/addon-info';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';

import { Button } from '@storybook/react/demo';

import IconButton from '../components/IconButton/IconButton';

// default behavior for component info
setDefaults({
    inline: true
});

storiesOf('IconButton')
    .addDecorator(withKnobs)
    .add('default', withInfo('')(
        () => (
            <IconButton
                disabled={boolean('Disabled', false)}
                onClick={action('clicked')}
                glyph={text('Icon glyph', 'favorite')}
                color={text('Icon color', 'red')}
            />
        )
    ));
