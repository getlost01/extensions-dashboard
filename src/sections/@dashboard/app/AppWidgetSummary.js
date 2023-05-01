// @mui
import PropTypes from 'prop-types';
import { Card, Typography } from '@mui/material';
// utils
import { fShortenNumber } from '../../../utils/formatNumber';

// ----------------------------------------------------------------------

AppWidgetSummary.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  sx: PropTypes.object,
};

export default function AppWidgetSummary({ title, total, color = 'primary', sx, ...other }) {
  return (
    <Card
      sx={{
        py: 2,
        px: 3,
        color: (theme) => theme.palette[color].darker,
        bgcolor: (theme) => theme.palette[color].lighter,
        ...sx,
      }}
      {...other}
    >
      <Typography variant="h6" sx={{ opacity: 0.65 }}>
        {title}
      </Typography>
      <Typography variant="h3" sx={{ fontSize: "1.2rem" }}>{fShortenNumber(total)}</Typography>
    </Card>
  );
}
