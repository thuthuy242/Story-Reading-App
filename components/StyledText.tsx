import * as React from 'react';

import { Text, TextProps } from './base_group/Themed';

export function MonoText(props: TextProps) {
    return <Text {...props} style={[props.style, { fontFamily: 'space-mono' }]} />;
}
