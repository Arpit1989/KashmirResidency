import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import LayoutBody from '../components/LayoutBody';
import Button from '../components/Button';
import Typography from '../components/Typography';

const styles = theme => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.secondary.light,
    overflow: 'hidden',
  },
  layoutBody: {
    marginTop: theme.spacing.unit * 10,
    marginBottom: theme.spacing.unit * 15,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `0px ${theme.spacing.unit * 5}px`,
  },
  title: {
    marginBottom: theme.spacing.unit * 14,
  },
  number: {
    fontSize: 18,
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.secondary.main,
    fontWeight: theme.typography.fontWeightMedium,
  },
  image: {
    height: 55,
    marginTop: theme.spacing.unit * 4,
    marginBottom: theme.spacing.unit * 4,
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
    opacity: 0.7,
  },
  button: {
    marginTop: theme.spacing.unit * 8,
  },
  link: {
  },
});
const phone1 = 'tel:911942435360;';
const phone2 = 'tel:911942315276;';
const corporateMobPhone1 = 'tel:918493904550;';
const corporateMobPhone2 = 'tel:919906870867;';
const emailKashmirResidency='mailto:info@kashmirresidency.in;'

function Address(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <LayoutBody className={classes.layoutBody} width="large">
        <img
          src="/static/images/productCurvyLines.png"
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Typography variant="h4" marked="center" className={classes.title} component="h2">
          How to Reach us
        </Typography>
        <div>
          <Grid container spacing={40}>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>Corporate Reservation Office</div>
                <img
                  src="/static/svg/productHowItWorks1.svg"
                  alt="suitcase"
                  className={classes.image}
                />
                <Typography className={classes.address} variant="h5" align="center">
                  {'Chinar Complex, Airport Road, Baghat,'}
                  {' Barzalla, Srinagar-190015, Kashmir India '}
                  {' Ph.:'}
                  <Link href={phone1} className={classes.link}>
                    0194-2435360
                  </Link>
                  ,
                  <Link href={phone1} className={classes.link}>
                    0194-2435360
                  </Link>
                  ,
                  CellPhone:
                  <Link href={corporateMobPhone1} className={classes.link}>
                    +91-8493904550
                  </Link>
                  ,
                  <Link href={corporateMobPhone2} className={classes.link}>
                    +91-9906870867
                  </Link>
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>Kashmir Residency Srinagar</div>
                <img
                  src="/static/svg/productHowItWorks2.svg"
                  alt="graph"
                  className={classes.image}
                />
                <Typography variant="h5" align="center">
                  Nowgam Srinagar-190015, Kashmir
                  Ph.:
                  <Link href={phone1} className={classes.link}>
                    0194-2435360
                  </Link>
                  ,
                  <Link href={phone1} className={classes.link}>
                    0194-2435360
                  </Link>

                </Typography>

              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>Kashmir Residency Pahalgam</div>
                <img
                  src="/static/svg/productHowItWorks3.svg"
                  alt="clock"
                  className={classes.image}
                />
                <Typography variant="h5" align="center">
                  {'Movera, Rafting Point, Pahalgam '}
                  {' Phone: '}
                  <Link href={phone1} className={classes.link}>
                    0194-2435360
                  </Link>
                  ,
                  <Link href={phone1} className={classes.link}>
                    0194-2435360
                  </Link>

                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
        <Button
          color="secondary"
          size="large"
          variant="contained"
          className={classes.button}
          component={linkProps => (
            <Link {...linkProps} href="/premium-themes/onepirate/sign-up" variant="button" />
          )}
        >
          Get started
        </Button>
      </LayoutBody>
    </section>
  );
}

Address.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Address);
