import React from "react";

import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";
import styles from "./VaksinIndo.module.css";

const VaksinIndo = ({
  data: { totalsasaran, vaksinasi1, vaksinasi2, lastUpdate },
}) => {
  if (!totalsasaran) {
    return "Loading...";
  }
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>
        Informasi Vaksin Virus Corona di Indonesia
      </h2>
      <Grid container spacing={3} justify="center">
        <Grid
          item
          component={Card}
          xs={12}
          md={4}
          className={cx(styles.card, styles.vaksinsatu)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Minimal 1 Dosis
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={vaksinasi1}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Jumlah orang yang sudah menerima 1 dosis vaksin
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={4}
          className={cx(styles.card, styles.vaksindua)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Divaksinasi Lengkap
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={vaksinasi2}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Jumlah orang yang sudah divaksin secara lengkap
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default VaksinIndo;
