import React from 'react';
import PropTypes from 'prop-types';
import styled from '@styling';

import moment from 'moment';

/*
  Rechart is D3.js wrapper that leverages react's virtual DOM as render method.
*/
import {
  Label,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  LineChart,
  Line,
} from 'recharts';

const Title = styled('h3')``;

const formatTick = tick => moment(tick).format('MMM Do YY hh:mm:ss');

const colors = ['red', 'green'];

const Chart = ({
  className,
  data,
  height = 300,
  width = 600,
  title,
  yAxis,
}) => {
  const { time, ...sample } = data[0] || {};
  const series = Object.keys(sample);

  return (
    <div className={className}>
      <Title>{title}</Title>
      <LineChart data={data} height={height} width={width}>
        {series.map((serie, index) => (
          <Line
            key={serie}
            dataKey={serie}
            stroke={colors[index]}
            type="monotone"
          />
        ))}
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="time" tickFormatter={formatTick} />
        <YAxis>
          <Label
            angle={-90}
            position="insideLeft"
            style={{ textAnchor: 'middle' }}
            value={yAxis}
          />
        </YAxis>
        <Legend height={36} verticalAlign="bottom" />
      </LineChart>
    </div>
  );
};

Chart.propTypes = {
  className: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object),
  height: PropTypes.number,
  title: PropTypes.string,
  width: PropTypes.number,
  yAxis: PropTypes.string,
};

export default styled(Chart)`
  align-items: center;
  display: flex;
  flex-direction: column;

  ${Title} {
    margin-bottom: 2.4rem;
  }
`;
