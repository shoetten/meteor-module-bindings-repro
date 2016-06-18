import {zoom, select} from 'd3';
import {event as currentEvent} from 'd3';

import './main.html';

Template.d3.onRendered(function rendered() {
  
	// get main d3 selector
  const canvas = select('svg.canvas');
  // init the pan & zoom behaviour
  canvas.call(zoom()
    .on('zoom', () => {
      console.log(currentEvent);
    })
  );

});
