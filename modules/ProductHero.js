import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';

const backgroundImage =
  'https://res.cloudinary.com/primus/image/upload/v1547531051/firasat-durrani-39083-unsplash_vbdpue.jpg';

const styles = theme => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing.unit * 4,
    marginTop: theme.spacing.unit * 4,
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing.unit * 10,
    },
  },
  more: {
    marginTop: theme.spacing.unit * 2,
  },
});

function ProductHero(props) {
  const { classes } = props;

  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img style={{ display: 'none' }} src={backgroundImage} alt="" />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Heaven On Earth
      </Typography>
      <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
        Enjoy secret offers up to -70% off the best luxury resort in India.
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        className={classes.button}
        component={linkProps => (
          <Link {...linkProps} href="/" variant="button" />
        )}
      >
        Know More
      </Button>
      <Typography variant="body2" color="inherit" className={classes.more}>
        Discover the experience
      </Typography>
    </ProductHeroLayout>
  );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);
