// Copyright (c) 2021 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

import React, {useCallback} from 'react';
import classnames from 'classnames';
import {Legend} from 'kepler.gl/dist/components/common/icons';
import {FormattedMessage} from 'kepler.gl/localization';
import {MapControlButton, Tooltip} from 'kepler.gl/dist/components/common/styled-components';
import MapControlTooltipFactory from 'kepler.gl/dist/components/map/map-control-tooltip';
import MapControlPanelFactory from 'kepler.gl/dist/components/map/map-control-panel';
import MapLegendFactory from 'kepler.gl/dist/components/map/map-legend';

const MapLegendTooltip = ({id, message}) => (
  <Tooltip id={id} place="left" effect="solid">
    <span>
      <FormattedMessage id={message} />
    </span>
  </Tooltip>
);

MLPFactory.deps = [MapControlTooltipFactory, MapControlPanelFactory, MapLegendFactory];

function MLPFactory(MapControlTooltip, MapControlPanel, MapLegend) {
  const defaultActionIcons = {
    legend: Legend
  };

  /** @type {import('./map-legend-panel').MapLegendPanelComponent} */
  const MapLegendPanel = ({
    layers,
    mapControls,
    scale,
    onToggleMapControl,
    isExport,
    logoComponent,
    actionIcons = defaultActionIcons
  }) => {
    const mapLegend = mapControls?.mapLegend || {};
    const {active: isActive, disableClose} = mapLegend || {};
    const onToggleMenuPanel = useCallback(() => onToggleMapControl('mapLegend'), [
      onToggleMapControl
    ]);

    const onClick = useCallback(
      e => {
        e.preventDefault();
        onToggleMenuPanel();
      },
      [onToggleMenuPanel]
    );

    if (!mapLegend.show) {
      return null;
    }
    return !isActive ? (
      (<MapControlButton
        data-tip
        data-for="show-legend"
        className={classnames('map-control-button', 'show-legend', {isActive})}
        onClick={onClick}
      >
        <actionIcons.legend height="22px" />
        <MapLegendTooltip id="show-legend" message={'tooltip.showLegend'} />
      </MapControlButton>)
    ) : (
      (<MapControlPanel
        scale={scale}
        header={'header.layerLegend'}
        onClick={onToggleMenuPanel}
        isExport={isExport}
        disableClose={disableClose}
        logoComponent={logoComponent}
      >
        <MapLegend layers={layers} />
      </MapControlPanel>)
    );
  };

  MapLegendPanel.displayName = 'MapLegendPanel';
  return MapLegendPanel;
}

export default MLPFactory;
