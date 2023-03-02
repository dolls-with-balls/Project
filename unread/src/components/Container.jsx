import React from "react";
import { Card } from "./index";
import styles from "../styles/Container.module.css";

export const Container = () => {
  return (
    <>
      <div className={styles.cont}>
        <div class="row">
          <div class="col-md-6">
            <div className={styles.spc}>
              <Card></Card>
            </div>
            <div>
              <div class="row">
                <div class="col-md-6">
                  <div className={styles.spc}>
                    <Card></Card>
                  </div>
                </div>
                <div class="col-md-6">
                  <div className={styles.spc}>
                    <Card></Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div>
              <div class="row ">
                <div class="col-md-6">
                  <div className={styles.spc}>
                    <Card></Card>
                  </div>
                </div>
                <div class="col-md-6">
                  <div className={styles.spc}>
                    <Card></Card>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="row ">
                <div class="col-md-6">
                  <div className={styles.spc}>
                    <Card></Card>
                  </div>
                </div>
                <div class="col-md-6">
                  <div className={styles.spc}>
                    <Card></Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
