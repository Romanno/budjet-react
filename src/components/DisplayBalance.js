import React from 'react';
import {Statistic} from "semantic-ui-react";

function DisplayBalance ({ size="tiny", color='black', title, value, align="left" }) {
    return (
        <Statistic size={size} color={color}>
            <Statistic.Label style={{textAlign: {align}}}>
                {title}
            </Statistic.Label>
            <Statistic.Value>
                {value}
            </Statistic.Value>
        </Statistic>
    )
}

export default DisplayBalance;